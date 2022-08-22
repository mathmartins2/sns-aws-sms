import AWS from 'aws-sdk';
import snsAwsConfig  from '../config/snsAwsConfig.js';

AWS.config.update(snsAwsConfig);

export default function publishSms({ sns, Message, PhoneNumber }) {
    return sns.publish({Message, PhoneNumber}).promise();
}
