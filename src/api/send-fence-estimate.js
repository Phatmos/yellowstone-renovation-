import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const {
            clientEmail,
            senderEmail,
            subject,
            body,
            pdfBase64,
            pdfFileName,
        } = req.body || {};

        if (!clientEmail) {
            return res.status(400).json({ error: "Client email is required." });
        }

        if (!pdfBase64) {
            return res.status(400).json({ error: "PDF attachment is required." });
        }

        const safeBody = String(body || "");
        const htmlBody = safeBody
            .split("\n")
            .map((line) =>
                line.trim()
                    ? `<p style="margin:0 0 12px;">${escapeHtml(line)}</p>`
                    : `<div style="height:12px;"></div>`
            )
            .join("");

        const msg = {
            to: clientEmail,
            from: process.env.SENDGRID_FROM_EMAIL,
            replyTo: senderEmail || process.env.SENDGRID_FROM_EMAIL,
            subject: subject || "Fence Estimate - Yellowstone Renovation",
            text: safeBody,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111;">
          ${htmlBody}
        </div>
      `,
            attachments: [
                {
                    content: pdfBase64,
                    filename: pdfFileName || "fence_estimate.pdf",
                    type: "application/pdf",
                    disposition: "attachment",
                },
            ],
        };

        await sgMail.send(msg);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully.",
        });
    } catch (error) {
        console.error("SEND EMAIL API ERROR:", error.response?.body || error);

        return res.status(500).json({
            error: "Failed to send email.",
            details: error.message,
        });
    }
} const response = await fetch("/.netlify/functions/send-fence-estimate", {
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

const responseText = await response.text();

let data;
try {
    data = JSON.parse(responseText);
} catch (e) {
    console.error("Server returned non-JSON:", responseText);
    throw new Error("Server returned HTML instead of JSON.");
}

if (!response.ok) {
    throw new Error(data?.details || data?.error || "Failed to send email");
}