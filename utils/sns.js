import AWS from 'aws-sdk';
import snsAwsConfig  from '../config/snsAwsConfig.js';

AWS.config.update(snsAwsConfig);

export default function publishSms({ sns, Message, PhoneNumber }) {
    try {
        PhoneNumber = validatePhoneNumber(PhoneNumber);

        return sns.publish({Message, PhoneNumber}).promise();
    } catch (error) {
        throw error;
    }
}

const validatePhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.replace(/[^\d]/g, '');

    if(phoneNumber.length !== 13) {
        throw('Invalid phone number');
    }

    return phoneNumber;
}
