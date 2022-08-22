import {Router} from 'express';
import {sendSMS} from '../controller/sms.js';

const router = Router();

router.post('/send-sms', sendSMS);

export default router;