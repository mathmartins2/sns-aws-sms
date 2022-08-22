import 'dotenv/config';
import express, {json} from 'express';
import routes from './routes/sms.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});