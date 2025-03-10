import { Request, Response } from "express";
import { sendEmail } from "../services/sendEmail";
import { RequestHandler } from "express";

import dotenv from "dotenv";
dotenv.config();

const handleFormSubmission: RequestHandler = async (req, res) => {
    try {
        const {email, subject, message} = req.body;

        if (!email || !subject || !message){
            res.status(400).json({error:"Missing required fields"});
            return; // Just return without a value
        }

        await sendEmail({
            to: process.env.TO_EMAIL as string,
            from: process.env.FROM_EMAIL as string, 
            subject,
            text: `${message} enviada por ${email}`,
            html: `<strong>${message}</strong>`,
        });

        res.status(200).json({ to:email, subject, message});
        
        
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
        
    }
};

export default handleFormSubmission;