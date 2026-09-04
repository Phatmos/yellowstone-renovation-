const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Method not allowed" }),
        };
    }

    try {
        const {
            clientEmail,
            senderEmail,
            subject,
            body,
            pdfBase64,
            pdfFileName,
        } = JSON.parse(event.body || "{}");

        if (!clientEmail) {
            return {
                statusCode: 400,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ error: "Client email is required." }),
            };
        }

        if (!pdfBase64) {
            return {
                statusCode: 400,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ error: "PDF attachment is required." }),
            };
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

        await sgMail.send({
            to: clientEmail,
            from: process.env.SENDGRID_FROM_EMAIL,
            replyTo: senderEmail || process.env.SENDGRID_FROM_EMAIL,
            subject: subject || "Fence Estimate - Yellowstone Renovation",
            text:
                safeBody ||
                "Hey,\n\nThank you for choosing Yellowstone Renovation for your fence project.\n\nAttached is your fence estimate for review.",
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
        });

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                success: true,
                message: "Email sent successfully.",
            }),
        };
    } catch (error) {
        console.error("SEND EMAIL ERROR:", error?.response?.body || error.message || error);

        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                error: "Failed to send email.",
                details:
                    error?.response?.body?.errors?.[0]?.message ||
                    error.message ||
                    "Unknown error",
            }),
        };
    }
};