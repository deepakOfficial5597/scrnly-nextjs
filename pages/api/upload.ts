import { google } from 'googleapis';
import { authenticate } from '@/shared/utils/google/gd-auth';
import { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import formidable from 'formidable';

const drive = google.drive({ version: 'v3' });
const FOLDER_ID = '1a9mj6hAJB8Blb-BZivuEE0JQXCo46gmo';

export const config = {
  api: {
    bodyParser: false
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const form = formidable();

    try{
      const formData: any = await new Promise((resolve, reject) => {
        form.parse(req, (err: any, fields: any, files: any) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });
      const file: any = await formData.files.file[0];
      const auth = await authenticate();
      
      const driveResponse = await drive.files.create({
        auth,
        requestBody: {
          name: file.originalFilename,
          mimeType: file.mimetype,
          parents: [FOLDER_ID],
        },
        media: {
          mimeType: file.mimetype,
          body: fs.createReadStream(file.filepath),
        },
      });
      res.json({ success: true, fileId: driveResponse.data.id });
    }catch(error){
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
