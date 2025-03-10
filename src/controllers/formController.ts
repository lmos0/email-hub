import { Request, Response } from "express";
import { sendEmail } from "../services/sendEmail";
import { RequestHandler } from "express";

const handleFormSubmission: RequestHandler = async (req, res) => {
    try {
        const {email, subject, message} = req.body;

        if (!email || !subject || !message){
            res.status(400).json({error:"Missing required fields"});
            return; // Just return without a value
        }

        await sendEmail({
            to: email,
            from: process.env.FROM_EMAIL as string, 
            subject,
            text: message,
            html: `<strong>${message}</strong>`,
        });

        res.status(200).json({ to:email, subject, message});
        
        
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
        
    }
};

export default handleFormSubmission;