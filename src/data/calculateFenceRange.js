export function calculateFenceRange(selection) {
    const ft = Number(selection.feet || 0);
    const singleGates = Number(selection.singleGates || 0);
    const doubleGates = Number(selection.doubleGates || 0);
    const marginPercent = Number(selection.margin || 20);

    // Optional toggles
    const includeDemo = Boolean(selection.includeDemo);
    const includeFinish =
        selection.color === "stained" || selection.color === "painted";

    if (!ft || ft <= 0) return null;

    // -----------------------------
    // BASIC LAYOUT
    // -----------------------------
    const sectionLength = 8;
    const sections = Math.ceil(ft / sectionLength);
    const posts = sections + 1;

    // -----------------------------
    // MATERIAL BASELINES
    // More realistic market-friendly numbers
    // -----------------------------
    let materialPerFt = 13;

    if (selection.fenceType === "vinyl") {
        materialPerFt = 24;
    } else if (selection.fenceType === "cedar") {
        materialPerFt = 17;
    } else if (selection.fenceType === "wood") {
        materialPerFt = 13;
    }

    // Style adjustments
    if (selection.style === "board-on-board") {
        materialPerFt += 2.5;
    }

    if (selection.style === "good-neighbor") {
        materialPerFt += 2;
    }

    if (selection.style === "horizontal") {
        materialPerFt += 4;
    }

    // Height adjustments
    if (selection.height === "4") {
        materialPerFt -= 1.5;
    }

    if (selection.height === "8") {
        materialPerFt += 4;
    }

    // Post adjustments
    if (selection.post === "metal-post") {
        materialPerFt += 2;
    }

    if (selection.post === "6x6-post") {
        materialPerFt += 3;
    }

    // Top / cap adjustment in materials
    let capMaterialPerFt = 0;
    if (
        selection.top === "cap" ||
        selection.top === "cap-rail" ||
        selection.top === "cap-and-trim"
    ) {
        capMaterialPerFt = 1.5;
    }

    // Color / finish adjustments
    let finishPerFt = 0;
    if (includeFinish) {
        finishPerFt = 1.5;
    }

    const materialTotal = ft * (materialPerFt + capMaterialPerFt + finishPerFt);

    // Gate materials
    const gateMaterialTotal =
        singleGates * 180 +
        doubleGates * 350;

    // -----------------------------
    // LABOR - adjusted to real numbers
    // -----------------------------
    const demoLabor = includeDemo ? ft * 3 : 0;
    const diggingLabor = posts * 20;
    const postInstallLabor = posts * 12;
    const picketInstallLabor = ft * 6.5;

    const capLabor =
        selection.top === "cap" ||
            selection.top === "cap-rail" ||
            selection.top === "cap-and-trim"
            ? ft * 1.25
            : 0;

    const finishLabor = includeFinish ? ft * 1.5 : 0;

    const gateLabor =
        singleGates * 150 +
        doubleGates * 275;

    const laborTotal =
        demoLabor +
        diggingLabor +
        postInstallLabor +
        picketInstallLabor +
        capLabor +
        finishLabor +
        gateLabor;

    // -----------------------------
    // TOTALS
    // -----------------------------
    const baseTotal = materialTotal + gateMaterialTotal + laborTotal;
    const marginMultiplier = 1 + marginPercent / 100;
    const finalTotal = baseTotal * marginMultiplier;

    // Presentation range
    const lowTotal = Math.round(finalTotal);
    const highTotal = Math.round(finalTotal * 1.07);

    return {
        sections,
        posts,
        materialTotal: Math.round(materialTotal),
        gateMaterialTotal: Math.round(gateMaterialTotal),
        laborTotal: Math.round(laborTotal),
        baseTotal: Math.round(baseTotal),
        marginPercent,
        lowPerFt: Math.round(lowTotal / ft),
        highPerFt: Math.round(highTotal / ft),
        lowTotal,
        highTotal,
    };
}