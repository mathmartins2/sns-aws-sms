import AWS from "aws-sdk";
import publishSms from "../utils/sns.js";

const sns = new AWS.SNS({ apiVersion: "2010-03-31" });

export const sendSMS = async (req, res) => {
    try {
        const { Message, PhoneNumber } = req.body;

        await publishSms({ sns, PhoneNumber, Message });
       
        return res.status(200).json({
            message: "SMS sent successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
}