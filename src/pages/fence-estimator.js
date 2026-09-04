import * as React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// =========================
// CONFIG – MATERIAL PRICES
// =========================

const MATERIAL_PRICES = {
    post_4x4x8_PT: 17.5,
    post_6x6x8_PT: 35.5,
    post_metal_round_for_wood: 80.0,

    rail_2x4x8_PT: 7.4,

    picket_6ft_PT: 2.2,
    picket_6ft_cedar: 4.2,
    picket_8ft_cedar: 5.8,

    concrete_80lb_bag: 11.0,

    gate_hardware_single: 30,
    gate_hardware_double: 60,

    misc_hardware_per_100ft: 100,
};

// =========================
// CONSTANTS – LOGIC
// =========================

const SECTION_LENGTH_FT = 8;
const PICKET_WIDTH_IN = 5.5;
const GAP_IN = 0.5;
const RAILS_PER_SECTION = 3;

const LABOR_DEMO_PER_FT = 5;
const LABOR_DIG_HOLE_PER_POST = 25;
const LABOR_SET_POST_PER_POST = 15;
const LABOR_PICKET_INSTALL_PER_FT = 8;
const LABOR_CAP_PER_FT = 2;

const LABOR_GATE_SINGLE = 250;
const LABOR_GATE_DOUBLE = 450;

const SALES_PERCENT = 0.1;

const TRAILER_FEE = 150;
const PERMIT_FEE = 200;
const HOA_FEE = 200;
const PROPERTY_LINE_FEE = 800;

const MARGIN_OPTIONS = [10, 15, 20, 25, 30, 35];

const ceil = (n) => Math.ceil(n);

const formatMoney = (value) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(value || 0);

const todayLabel = () =>
    new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date());

// =========================
// HELPERS
// =========================

function getPostMaterialKey(postType) {
    if (postType === "wood_4x4") return "post_4x4x8_PT";
    if (postType === "wood_6x6") return "post_6x6x8_PT";
    return "post_metal_round_for_wood";
}

function getPicketMaterialKey(fenceStyle, height) {
    if (fenceStyle === "wood_privacy_dogear") {
        return "picket_6ft_PT";
    }

    if (fenceStyle === "board_on_board" && Number(height) >= 8) {
        return "picket_8ft_cedar";
    }

    return "picket_6ft_cedar";
}

function getPicketPitchIn(fenceStyle) {
    if (fenceStyle === "board_on_board") {
        return PICKET_WIDTH_IN / 2;
    }

    return PICKET_WIDTH_IN + GAP_IN;
}

function fenceStyleLabel(value) {
    if (value === "wood_privacy_dogear") return "Wood Privacy – Dog Ear";
    if (value === "board_on_board") return "Board-on-Board";
    return value || "-";
}

function postTypeLabel(value) {
    if (value === "wood_4x4") return "Wood 4x4 PT";
    if (value === "wood_6x6") return "Wood 6x6 PT";
    if (value === "metal_round") return "Metal round";
    return value || "-";
}

function fileNameSafe(value) {
    return (value || "fence-estimate")
        .replace(/[^a-z0-9]/gi, "_")
        .replace(/_+/g, "_")
        .toLowerCase();
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const result = String(reader.result || "");
            const base64 = result.split(",")[1];
            resolve(base64);
        };

        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// =========================
// CORE CALC FUNCTION
// =========================

function calcFenceEstimate(options) {
    const {
        lengthFt,
        heightFt,
        fenceStyle,
        postType,
        removeOldFt = 0,
        gatesSingle = 0,
        gatesDouble = 0,
        includeCap = false,
        companyMarginPercent = 20,
        customMaterials = [],
        includeTrailer = false,
        includePermit = false,
        includeHOA = false,
        includePropertyLine = false,
        mode = "full",
    } = options;

    if (!lengthFt || lengthFt <= 0) {
        return null;
    }

    const sections = ceil(lengthFt / SECTION_LENGTH_FT);
    const posts = sections + 1;
    const rails = sections * RAILS_PER_SECTION;

    const picketPitchIn = getPicketPitchIn(fenceStyle);
    const picketsPerFt = 12 / picketPitchIn;
    const pickets = ceil(lengthFt * picketsPerFt);

    const bagsConcrete = ceil(posts * 1.0);

    const postMaterialKey = getPostMaterialKey(postType);
    const picketMaterialKey = getPicketMaterialKey(fenceStyle, heightFt);

    // MATERIALS
    const postCost = posts * MATERIAL_PRICES[postMaterialKey];
    const railCost = rails * MATERIAL_PRICES.rail_2x4x8_PT;
    const picketCost = pickets * MATERIAL_PRICES[picketMaterialKey];
    const concreteCost = bagsConcrete * MATERIAL_PRICES.concrete_80lb_bag;

    const gateHardwareCost =
        gatesSingle * MATERIAL_PRICES.gate_hardware_single +
        gatesDouble * MATERIAL_PRICES.gate_hardware_double;

    const hardwareMisc =
        (lengthFt / 100) * MATERIAL_PRICES.misc_hardware_per_100ft;

    const coreMaterialsTotal =
        postCost +
        railCost +
        picketCost +
        concreteCost +
        gateHardwareCost +
        hardwareMisc;

    const normalizedCustomMaterials = customMaterials.filter((item) => {
        const name = (item.name || "").trim();
        const qty = parseFloat(item.quantity) || 0;
        const price = parseFloat(item.unitPrice) || 0;
        return name || qty > 0 || price > 0;
    });

    const customMaterialsTotal = normalizedCustomMaterials.reduce((sum, item) => {
        const qty = parseFloat(item.quantity) || 0;
        const unitPrice = parseFloat(item.unitPrice) || 0;
        return sum + qty * unitPrice;
    }, 0);

    const extrasFees =
        (includeTrailer && removeOldFt > 0 ? TRAILER_FEE : 0) +
        (includePermit ? PERMIT_FEE : 0) +
        (includeHOA ? HOA_FEE : 0) +
        (includePropertyLine ? PROPERTY_LINE_FEE : 0);

    const materialsTotal = coreMaterialsTotal + customMaterialsTotal + extrasFees;

    // LABOR
    const laborDemo = removeOldFt * LABOR_DEMO_PER_FT;
    const laborDigging = posts * LABOR_DIG_HOLE_PER_POST;
    const laborSetPosts = posts * LABOR_SET_POST_PER_POST;
    const laborPickets = lengthFt * LABOR_PICKET_INSTALL_PER_FT;
    const laborCap = includeCap ? lengthFt * LABOR_CAP_PER_FT : 0;
    const laborGates =
        gatesSingle * LABOR_GATE_SINGLE + gatesDouble * LABOR_GATE_DOUBLE;

    const laborTotal =
        laborDemo +
        laborDigging +
        laborSetPosts +
        laborPickets +
        laborCap +
        laborGates;

    let baseMaterialPortion = 0;
    let baseLaborPortion = 0;

    if (mode === "full") {
        baseMaterialPortion = materialsTotal;
        baseLaborPortion = laborTotal;
    } else if (mode === "materials") {
        baseMaterialPortion = materialsTotal;
        baseLaborPortion = 0;
    } else {
        baseMaterialPortion = extrasFees;
        baseLaborPortion = laborTotal;
    }

    const materialMargin = baseMaterialPortion * (companyMarginPercent / 100);
    const laborMargin = baseLaborPortion * (companyMarginPercent / 100);

    const subtotalMaterialsWithMargin = baseMaterialPortion + materialMargin;
    const subtotalLaborWithMargin = baseLaborPortion + laborMargin;

    const subtotalAfterCompany =
        subtotalMaterialsWithMargin + subtotalLaborWithMargin;

    const salesCommission = subtotalAfterCompany * SALES_PERCENT;
    const grandTotal = subtotalAfterCompany + salesCommission;

    const pricePerFoot = lengthFt ? grandTotal / lengthFt : 0;

    return {
        sections,
        posts,
        rails,
        pickets,
        bagsConcrete,
        customMaterialsNormalized: normalizedCustomMaterials,

        materials: {
            postCost,
            railCost,
            picketCost,
            concreteCost,
            gateHardwareCost,
            hardwareMisc,
            coreMaterialsTotal,
            customMaterialsTotal,
            extrasFees,
            materialsTotal,
        },

        labor: {
            laborDemo,
            laborDigging,
            laborSetPosts,
            laborPickets,
            laborCap,
            laborGates,
            laborTotal,
        },

        totals: {
            mode,
            companyMarginPercent,
            baseMaterialPortion,
            baseLaborPortion,
            materialMargin,
            laborMargin,
            subtotalMaterialsWithMargin,
            subtotalLaborWithMargin,
            subtotalAfterCompany,
            salesCommission,
            grandTotal,
            pricePerFoot,
        },
    };
}

// =========================
// COMPONENT
// =========================

const FenceEstimatorPage = () => {
    const [clientName, setClientName] = React.useState("");
    const [clientAddress, setClientAddress] = React.useState("");
    const [clientEmail, setClientEmail] = React.useState(
        ""
    );
    const [senderEmail, setSenderEmail] = React.useState("info@yellowstonerenovation.com");
    const [logoUrl, setLogoUrl] = React.useState("/YR-logo.png");

    const [lengthFt, setLengthFt] = React.useState("");
    const [heightFt, setHeightFt] = React.useState("6");
    const [fenceStyle, setFenceStyle] = React.useState("wood_privacy_dogear");
    const [postType, setPostType] = React.useState("wood_4x4");
    const [removeOldFt, setRemoveOldFt] = React.useState("");
    const [gatesSingle, setGatesSingle] = React.useState("");
    const [gatesDouble, setGatesDouble] = React.useState("");
    const [includeCap, setIncludeCap] = React.useState(false);

    const [mode, setMode] = React.useState("full");
    const [companyMarginPercent, setCompanyMarginPercent] = React.useState(20);

    const [customMaterials, setCustomMaterials] = React.useState([
        { id: 1, name: "", unitPrice: "", quantity: "" },
    ]);

    const [includeTrailer, setIncludeTrailer] = React.useState(false);
    const [includePermit, setIncludePermit] = React.useState(false);
    const [includeHOA, setIncludeHOA] = React.useState(false);
    const [includePropertyLine, setIncludePropertyLine] = React.useState(false);

    const [result, setResult] = React.useState(null);
    const [emailPreview, setEmailPreview] = React.useState("");
    const [isSendingEmail, setIsSendingEmail] = React.useState(false);

    const pdfRef = React.useRef(null);

    const handleAddCustomMaterial = () => {
        setCustomMaterials((items) => [
            ...items,
            { id: Date.now(), name: "", unitPrice: "", quantity: "" },
        ]);
    };

    const handleRemoveCustomMaterial = (id) => {
        setCustomMaterials((items) => {
            const next = items.filter((item) => item.id !== id);
            return next.length
                ? next
                : [{ id: Date.now(), name: "", unitPrice: "", quantity: "" }];
        });
    };

    const handleCustomChange = (id, field, value) => {
        setCustomMaterials((items) =>
            items.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const buildEmailBody = React.useCallback(
        (estimateResult) => {
            const firstName = (clientName || "there").trim().split(" ")[0] || "there";
            const total = estimateResult
                ? formatMoney(estimateResult.totals.grandTotal)
                : "-";

            return `Hey ${firstName},

Thank you for choosing Yellowstone Renovation for your fence project.

Attached is your fence estimate for review.

This estimate includes:
- Fence installation
- Posts
- Rails
- Pickets
- Concrete
- Gate options listed in the proposal

Project summary:
- Fence style: ${fenceStyleLabel(fenceStyle)}
- Length: ${lengthFt || 0} ft
- Height: ${heightFt || 0} ft
- Single gates: ${gatesSingle || 0}
- Double gates: ${gatesDouble || 0}
- Total: ${total}

Please review the attached estimate and let us know if you have any questions.

Thank you,
Yellowstone Renovation`;
        },
        [clientName, fenceStyle, lengthFt, heightFt, gatesSingle, gatesDouble]
    );

    const handleCalculate = React.useCallback(() => {
        const nextResult = calcFenceEstimate({
            lengthFt: Number(lengthFt) || 0,
            heightFt: Number(heightFt) || 6,
            fenceStyle,
            postType,
            removeOldFt: Number(removeOldFt) || 0,
            gatesSingle: Number(gatesSingle) || 0,
            gatesDouble: Number(gatesDouble) || 0,
            includeCap,
            companyMarginPercent: Number(companyMarginPercent) || 20,
            customMaterials,
            includeTrailer,
            includePermit,
            includeHOA,
            includePropertyLine,
            mode,
        });

        setResult(nextResult);
        setEmailPreview(buildEmailBody(nextResult));
    }, [
        lengthFt,
        heightFt,
        fenceStyle,
        postType,
        removeOldFt,
        gatesSingle,
        gatesDouble,
        includeCap,
        companyMarginPercent,
        customMaterials,
        includeTrailer,
        includePermit,
        includeHOA,
        includePropertyLine,
        mode,
        buildEmailBody,
    ]);

    React.useEffect(() => {
        handleCalculate();
    }, [handleCalculate]);

    const generatePdfBlob = async () => {
        if (!pdfRef.current || !result) {
            throw new Error("Estimate is not ready.");
        }

        const canvas = await html2canvas(pdfRef.current, {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            scrollY: -window.scrollY,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        return pdf.output("blob");
    };

    const handleDownloadPdf = async () => {
        try {
            const pdfBlob = await generatePdfBlob();
            const url = URL.createObjectURL(pdfBlob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `${fileNameSafe(clientName)}_fence_estimate.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();

            URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
            alert(error.message || "Failed to generate PDF.");
        }
    };
    const handleGmailWithPdf = async () => {
        if (!result) return alert("Generate estimate first");

        // download PDF
        const pdfBlob = await generatePdfBlob();
        const url = URL.createObjectURL(pdfBlob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${clientName || "Client"} - Fence Estimate.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        // open Gmail
        const subject = `${clientName || "Client"} - Fence Estimate (${lengthFt} ft)`;
        const body = encodeURIComponent(buildEmailBody(result));

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${clientEmail}&su=${encodeURIComponent(subject)}&body=${body}`;

        window.open(gmailUrl, "_blank");
    };
    const handleSendEmail = async () => {
        if (!result) {
            alert("Please calculate estimate first.");
            return;
        }

        if (!clientEmail) {
            alert("Please enter client email.");
            return;
        }

        try {
            setIsSendingEmail(true);

            const pdfBlob = await generatePdfBlob();
            const pdfBase64 = await blobToBase64(pdfBlob);

            const response = await fetch("/.netlify/functions/send-fence-estimate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientName,
                    clientAddress,
                    clientEmail,
                    senderEmail,
                    subject: "Fence Estimate - Yellowstone Renovation",
                    body: buildEmailBody(result),
                    pdfBase64,
                    pdfFileName: `${fileNameSafe(clientName)}_fence_estimate.pdf`,
                }),
            });

            const text = await response.text();

            let data;
            try {
                data = JSON.parse(text);
            } catch {
                throw new Error(`Server returned non-JSON response: ${text}`);
            }

            if (!response.ok) {
                throw new Error(data?.details || data?.error || "Failed to send email");
            }

            alert("Estimate email sent successfully.");
        } catch (error) {
            console.error("SEND EMAIL ERROR:", error);
            alert(error.message || "Failed to send email.");
        } finally {
            setIsSendingEmail(false);
        }
    };

    return (
        <main className="fw-page">
            <style>{`
        .fw-page {
          min-height: 100vh;
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: radial-gradient(circle at top left, #1d976c 0, #1f2933 45%, #020617 100%);
          color: #f5f5f7;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 16px 60px;
          gap: 24px;
        }

        .fw-shell {
          width: 100%;
          max-width: 1380px;
          background: radial-gradient(circle at top left, rgba(15,23,42,0.98) 0, rgba(3,7,18,0.98) 65%);
          border-radius: 24px;
          border: 1px solid rgba(148, 163, 184, 0.35);
          box-shadow: 0 32px 90px rgba(0, 0, 0, 0.8);
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          overflow: hidden;
        }

        @media (max-width: 1100px) {
          .fw-shell {
            grid-template-columns: 1fr;
          }
        }

        .fw-left {
          padding: 28px;
          border-right: 1px solid rgba(148, 163, 184, 0.18);
          background: linear-gradient(145deg, rgba(15,23,42,0.97), rgba(6,78,59,0.35));
        }

        .fw-right {
          padding: 24px 24px 28px;
          background: radial-gradient(circle at top right, #111827 0, #020617 70%);
        }

        .fw-pdf-card {
          background: #ffffff;
          color: #111827;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.18);
        }

        .fw-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.4);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 14px;
        }

        .fw-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34, 197, 94, 0.9);
        }

        .fw-title {
          font-size: 26px;
          font-weight: 650;
          margin-bottom: 6px;
        }

        .fw-subtitle {
          font-size: 13px;
          color: #cbd5f5;
          margin-bottom: 18px;
          max-width: 560px;
        }

        .fw-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 16px;
          margin-bottom: 18px;
        }

        @media (max-width: 640px) {
          .fw-grid {
            grid-template-columns: 1fr;
          }
        }

        .fw-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fw-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9ca3af;
        }

        .fw-input,
        .fw-select {
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.7);
          background: #ffffff;
          color: #000000;
          padding: 9px 13px;
          font-size: 14px;
          outline: none;
        }

        .fw-input::placeholder {
          color: #6b7280;
        }

        .fw-input:focus,
        .fw-select:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.35);
          background: #ffffff;
          color: #000000;
        }

        .fw-input[type="number"]::-webkit-outer-spin-button,
        .fw-input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .fw-input[type="number"] {
          appearance: textfield;
          -moz-appearance: textfield;
        }

        .fw-hint {
          font-size: 11px;
          color: #6b7280;
        }

        .fw-mode-row,
        .fw-fees-row,
        .fw-margin-row,
        .fw-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .fw-pill-toggle {
          position: relative;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.55);
          background: rgba(15, 23, 42, 0.9);
          cursor: pointer;
          font-size: 12px;
          color: #e5e7eb;
        }

        .fw-pill-toggle input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .fw-pill-toggle.is-active {
          border-color: #22c55e;
          background: radial-gradient(circle at top left, rgba(34,197,94,0.2), rgba(15,23,42,1));
          box-shadow: 0 0 0 1px rgba(34,197,94,0.25);
        }

        .fw-section-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9ca3af;
          margin: 12px 0 8px;
        }

        .fw-custom-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr auto;
          gap: 6px;
          margin-bottom: 6px;
          align-items: center;
        }

        @media (max-width: 640px) {
          .fw-custom-row {
            grid-template-columns: 1fr;
          }
        }

        .fw-custom-delete,
        .fw-secondary-btn,
        .fw-add-material-btn,
        .fw-button {
          cursor: pointer;
        }

        .fw-add-material-btn,
        .fw-secondary-btn,
        .fw-custom-delete {
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.7);
          background: transparent;
          color: #e5e7eb;
          font-size: 12px;
          padding: 8px 12px;
        }

        .fw-button {
          border: none;
          padding: 10px 18px;
          border-radius: 999px;
          background: linear-gradient(135deg, #22c55e, #4ade80);
          color: #022c22;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 16px 36px rgba(16, 185, 129, 0.45);
        }

        .fw-button:disabled,
        .fw-secondary-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .fw-grand-total {
          font-size: 34px;
          font-weight: 800;
          color: #16a34a;
          margin-top: 12px;
          margin-bottom: 6px;
        }

        .fw-total-label,
        .fw-pdf-muted {
          font-size: 12px;
          color: #6b7280;
        }

        .fw-list {
          font-size: 13px;
          color: #111827;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .fw-list li {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 5px 0;
          border-bottom: 1px dashed rgba(0,0,0,0.08);
        }

        .fw-list li strong {
          font-weight: 700;
        }

        .fw-zoho-block {
          margin-top: 16px;
        }

        .fw-zoho-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9ca3af;
          margin-bottom: 6px;
        }

        .fw-zoho-textarea {
          width: 100%;
          min-height: 260px;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.5);
          background: rgba(15, 23, 42, 0.9);
          color: #e5e7eb;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          padding: 8px 10px;
          resize: vertical;
        }

        .fw-pdf-header {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 14px;
          margin-bottom: 16px;
        }

        .fw-pdf-brand {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
        }

        .fw-pdf-sub {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .fw-pdf-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        @media (max-width: 760px) {
          .fw-pdf-grid-2 {
            grid-template-columns: 1fr;
          }
        }

        .fw-pdf-box {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 14px;
          background: #ffffff;
        }

        .fw-pdf-box h3 {
          margin: 0 0 8px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #6b7280;
        }

        .fw-logo {
          width: 140px;
          max-height: 56px;
          object-fit: contain;
          margin-bottom: 8px;
        }
      `}</style>

            <div className="fw-shell">
                <section className="fw-left">
                    <div className="fw-badge">
                        <span className="fw-badge-dot" />
                        Yellowstone Fencing · Internal tool
                    </div>

                    <h1 className="fw-title">Fence Estimator for Sales</h1>
                    <p className="fw-subtitle">
                        Clean client PDF without margin details, plus instant email sending
                        with PDF attachment directly from the site.
                    </p>

                    <div className="fw-section-title">Client information</div>
                    <div className="fw-grid">
                        <div className="fw-field">
                            <label className="fw-label">Client name</label>
                            <input
                                className="fw-input"
                                type="text"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                placeholder="Client name"
                            />
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Client email</label>
                            <input
                                className="fw-input"
                                type="email"
                                value={clientEmail}
                                onChange={(e) => setClientEmail(e.target.value)}
                                placeholder="client@email.com"
                            />
                        </div>

                        <div className="fw-field" style={{ gridColumn: "1 / -1" }}>
                            <label className="fw-label">Client address</label>
                            <input
                                className="fw-input"
                                type="text"
                                value={clientAddress}
                                onChange={(e) => setClientAddress(e.target.value)}
                                placeholder="Client address"
                            />
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Sender email (reply-to)</label>
                            <input
                                className="fw-input"
                                type="email"
                                value={senderEmail}
                                onChange={(e) => setSenderEmail(e.target.value)}
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Logo URL</label>
                            <input
                                className="fw-input"
                                type="text"
                                value={logoUrl}
                                onChange={(e) => setLogoUrl(e.target.value)}
                                placeholder="/YR-logo.png"
                            />
                        </div>
                    </div>

                    <div className="fw-section-title">Estimate mode</div>
                    <div className="fw-mode-row">
                        {["full", "materials", "labor"].map((item) => (
                            <label
                                key={item}
                                className={`fw-pill-toggle ${mode === item ? "is-active" : ""}`}
                            >
                                <input
                                    type="radio"
                                    name="mode"
                                    value={item}
                                    checked={mode === item}
                                    onChange={(e) => setMode(e.target.value)}
                                />
                                {item === "full"
                                    ? "Full"
                                    : item === "materials"
                                        ? "Materials only"
                                        : "Labor only"}
                            </label>
                        ))}
                    </div>

                    <div className="fw-grid">
                        <div className="fw-field">
                            <label className="fw-label">Fence length (ft)</label>
                            <input
                                className="fw-input"
                                type="number"
                                min="0"
                                value={lengthFt}
                                onChange={(e) => setLengthFt(e.target.value)}
                                placeholder="Fence length"
                            />
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Fence height (ft)</label>
                            <input
                                className="fw-input"
                                type="number"
                                min="4"
                                value={heightFt}
                                onChange={(e) => setHeightFt(e.target.value)}
                                placeholder="Fence height"
                            />
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Fence style</label>
                            <select
                                className="fw-select"
                                value={fenceStyle}
                                onChange={(e) => setFenceStyle(e.target.value)}
                            >
                                <option value="wood_privacy_dogear">Wood Privacy – Dog Ear</option>
                                <option value="board_on_board">Board-on-Board</option>
                            </select>
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Post type</label>
                            <select
                                className="fw-select"
                                value={postType}
                                onChange={(e) => setPostType(e.target.value)}
                            >
                                <option value="wood_4x4">Wood 4x4 PT</option>
                                <option value="wood_6x6">Wood 6x6 PT</option>
                                <option value="metal_round">Metal round</option>
                            </select>
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Old fence removal (ft)</label>
                            <input
                                className="fw-input"
                                type="number"
                                min="0"
                                value={removeOldFt}
                                onChange={(e) => setRemoveOldFt(e.target.value)}
                                placeholder="Removal ft"
                            />
                            <div className="fw-hint">Demo at $5 / ft</div>
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Single gates</label>
                            <input
                                className="fw-input"
                                type="number"
                                min="0"
                                value={gatesSingle}
                                onChange={(e) => setGatesSingle(e.target.value)}
                                placeholder="0"
                            />
                        </div>

                        <div className="fw-field">
                            <label className="fw-label">Double gates</label>
                            <input
                                className="fw-input"
                                type="number"
                                min="0"
                                value={gatesDouble}
                                onChange={(e) => setGatesDouble(e.target.value)}
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className="fw-section-title">Cap / top option</div>
                    <div className="fw-fees-row">
                        <label className={`fw-pill-toggle ${includeCap ? "is-active" : ""}`}>
                            <input
                                type="checkbox"
                                checked={includeCap}
                                onChange={(e) => setIncludeCap(e.target.checked)}
                            />
                            Include cap (+ $2 / ft labor)
                        </label>
                    </div>

                    <div className="fw-section-title">Company margin</div>
                    <div className="fw-margin-row">
                        {MARGIN_OPTIONS.map((margin) => (
                            <label
                                key={margin}
                                className={`fw-pill-toggle ${companyMarginPercent === margin ? "is-active" : ""
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="companyMarginPercent"
                                    value={margin}
                                    checked={companyMarginPercent === margin}
                                    onChange={() => setCompanyMarginPercent(margin)}
                                />
                                {margin}%
                            </label>
                        ))}
                    </div>

                    <div className="fw-section-title">Extra fees</div>
                    <div className="fw-fees-row">
                        <label className={`fw-pill-toggle ${includeTrailer ? "is-active" : ""}`}>
                            <input
                                type="checkbox"
                                checked={includeTrailer}
                                onChange={(e) => setIncludeTrailer(e.target.checked)}
                            />
                            Trailer fee
                        </label>

                        <label className={`fw-pill-toggle ${includePermit ? "is-active" : ""}`}>
                            <input
                                type="checkbox"
                                checked={includePermit}
                                onChange={(e) => setIncludePermit(e.target.checked)}
                            />
                            Permit
                        </label>

                        <label className={`fw-pill-toggle ${includeHOA ? "is-active" : ""}`}>
                            <input
                                type="checkbox"
                                checked={includeHOA}
                                onChange={(e) => setIncludeHOA(e.target.checked)}
                            />
                            HOA
                        </label>

                        <label
                            className={`fw-pill-toggle ${includePropertyLine ? "is-active" : ""}`}
                        >
                            <input
                                type="checkbox"
                                checked={includePropertyLine}
                                onChange={(e) => setIncludePropertyLine(e.target.checked)}
                            />
                            Property line
                        </label>
                    </div>

                    <div className="fw-section-title">Custom materials</div>
                    {customMaterials.map((item) => (
                        <div key={item.id} className="fw-custom-row">
                            <input
                                className="fw-input"
                                type="text"
                                value={item.name}
                                onChange={(e) =>
                                    handleCustomChange(item.id, "name", e.target.value)
                                }
                                placeholder="Material name"
                            />
                            <input
                                className="fw-input"
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) =>
                                    handleCustomChange(item.id, "unitPrice", e.target.value)
                                }
                                placeholder="Unit price"
                            />
                            <input
                                className="fw-input"
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleCustomChange(item.id, "quantity", e.target.value)
                                }
                                placeholder="Qty"
                            />
                            <button
                                type="button"
                                className="fw-custom-delete"
                                onClick={() => handleRemoveCustomMaterial(item.id)}
                            >
                                ×
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        className="fw-add-material-btn"
                        onClick={handleAddCustomMaterial}
                    >
                        Add custom material
                    </button>

                    <div className="fw-action-row" style={{ marginTop: 16 }}>
                        <button className="fw-button" type="button" onClick={handleCalculate}>
                            Recalculate estimate
                        </button>
<button
  type="button"
  className="fw-secondary-btn"
  onClick={handleGmailWithPdf}
>
  Gmail + PDF
</button>
                        <button
                            type="button"
                            className="fw-secondary-btn"
                            onClick={handleDownloadPdf}
                            disabled={!result}
                        >
                            Download PDF
                        </button>

                        <button
                            type="button"
                            className="fw-secondary-btn"
                            onClick={handleSendEmail}
                            disabled={!result || isSendingEmail}
                        >
                            {isSendingEmail ? "Sending..." : "Send email with PDF"}
                        </button>
                    </div>
                </section>

                <section className="fw-right">
                    <div ref={pdfRef} className="fw-pdf-card">
                        <div className="fw-pdf-header">
                            <div>
                                {logoUrl ? (
                                    <img
                                        src={logoUrl}
                                        alt="Yellowstone Renovation logo"
                                        className="fw-logo"
                                        crossOrigin="anonymous"
                                    />
                                ) : null}

                                <div className="fw-pdf-brand">Yellowstone Fencing</div>
                                <div className="fw-pdf-sub">Fence Estimate</div>
                                <div className="fw-pdf-sub">Date: {todayLabel()}</div>
                            </div>
                        </div>

                        <div className="fw-pdf-grid-2">
                            <div className="fw-pdf-box">
                                <h3>Client</h3>
                                <ul className="fw-list">
                                    <li><span>Name</span><span>{clientName || "-"}</span></li>
                                    <li><span>Email</span><span>{clientEmail || "-"}</span></li>
                                    <li><span>Address</span><span>{clientAddress || "-"}</span></li>
                                </ul>
                            </div>

                            <div className="fw-pdf-box">
                                <h3>Project</h3>
                                <ul className="fw-list">
                                    <li><span>Length</span><span>{lengthFt || 0} ft</span></li>
                                    <li><span>Height</span><span>{heightFt || 0} ft</span></li>
                                    <li><span>Style</span><span>{fenceStyleLabel(fenceStyle)}</span></li>
                                    <li><span>Post type</span><span>{postTypeLabel(postType)}</span></li>
                                    <li><span>Cap</span><span>{includeCap ? "Yes" : "No"}</span></li>
                                    <li><span>Single gates</span><span>{gatesSingle || 0}</span></li>
                                    <li><span>Double gates</span><span>{gatesDouble || 0}</span></li>
                                </ul>
                            </div>
                        </div>

                        {result ? (
                            <>
                                <div className="fw-grand-total">
                                    {formatMoney(result.totals.grandTotal)}
                                </div>
                                <div className="fw-total-label">Total Project Cost</div>

                                <div className="fw-pdf-grid-2" style={{ marginTop: 16 }}>
                                    <div className="fw-pdf-box">
                                        <h3>Included</h3>
                                        <ul className="fw-list">
                                            <li><span>Fence installation</span><span>Included</span></li>
                                            <li><span>Posts</span><span>Included</span></li>
                                            <li><span>Rails</span><span>Included</span></li>
                                            <li><span>Pickets</span><span>Included</span></li>
                                            <li><span>Concrete</span><span>Included</span></li>
                                            <li><span>Gate(s)</span><span>Included</span></li>
                                        </ul>
                                    </div>

                                    <div className="fw-pdf-box">
                                        <h3>Material quantities</h3>
                                        <ul className="fw-list">
                                            <li><span>Sections (8 ft)</span><span>{result.sections}</span></li>
                                            <li><span>Posts</span><span>{result.posts}</span></li>
                                            <li><span>Rails 2x4x8</span><span>{result.rails}</span></li>
                                            <li><span>Pickets</span><span>{result.pickets}</span></li>
                                            <li><span>Concrete bags</span><span>{result.bagsConcrete}</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="fw-pdf-box" style={{ marginTop: 16 }}>
                                    <h3>Price summary</h3>
                                    <ul className="fw-list">
                                        <li>
                                            <span>Price per foot</span>
                                            <span>{formatMoney(result.totals.pricePerFoot)}/ft</span>
                                        </li>
                                        <li>
                                            <strong>Grand total</strong>
                                            <strong>{formatMoney(result.totals.grandTotal)}</strong>
                                        </li>
                                    </ul>

                                    <div className="fw-pdf-muted" style={{ marginTop: 10 }}>
                                        Thank you for considering Yellowstone Renovation for your fence project.
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="fw-pdf-box" style={{ marginTop: 16 }}>
                                <h3>Estimate</h3>
                                <div className="fw-pdf-muted">
                                    Fill out the project fields on the left to generate the estimate.
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="fw-zoho-block">
                        <div className="fw-zoho-title">Email preview</div>
                        <textarea
                            className="fw-zoho-textarea"
                            readOnly
                            value={emailPreview}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default FenceEstimatorPage;

export const Head = () => (
    <>
        <title>Fence Estimator · Internal</title>
        <meta name="robots" content="noindex, nofollow" />
    </>
);