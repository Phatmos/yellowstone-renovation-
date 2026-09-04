import formidable from "formidable";
import fs from "fs";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config({ path: `.env` });

export const config = {
    bodyParser: false, // ✅ Required for file upload
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        // ✅ Parse form with formidable
        const form = formidable({ multiples: true });

        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) =>
                err ? reject(err) : resolve({ fields, files })
            );
        });

        console.log("✅ Form parsed:", fields);

        // ✅ Extract user fields
        const name = fields.name || "Unknown";
        const phone = fields.phone || "No Phone";
        const email = fields.email || "No Email";

        // ✅ Google Drive Auth
        const auth = new google.auth.JWT(
            process.env.GDRIVE_CLIENT_EMAIL,
            null,
            process.env.GDRIVE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            ["https://www.googleapis.com/auth/drive.file"]
        );

        const drive = google.drive({ version: "v3", auth });

        // ✅ Create a folder for this lead
        const folder = await drive.files.create({
            requestBody: {
                name: `${name} - ${phone}`,
                mimeType: "application/vnd.google-apps.folder",
                parents: [process.env.GDRIVE_FOLDER_ID],
            },
        });

        const folderId = folder.data.id;
        console.log("📁 New Lead Folder Created:", folderId);

        const uploaded = [];

        const photoFiles = files.photos
            ? Array.isArray(files.photos)
                ? files.photos
                : [files.photos]
            : [];

        // ✅ Upload each photo
        for (const file of photoFiles) {
            const fileStream = fs.createReadStream(file.filepath);

            const upload = await drive.files.create({
                requestBody: {
                    name: file.originalFilename,
                    parents: [folderId],
                },
                media: {
                    mimeType: file.mimetype,
                    body: fileStream,
                },
            });

            uploaded.push(upload.data.id);
        }

        console.log("📸 Uploaded files:", uploaded.length);

        return res.status(200).json({
            success: true,
            uploaded: uploaded.length,
            message: "Lead submitted successfully!",
        });

    } catch (error) {
        console.error("❌ Upload Error:", error);
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}
