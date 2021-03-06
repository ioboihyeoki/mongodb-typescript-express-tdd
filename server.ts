import { mongoose } from '@typegoose/typegoose';
import express from 'express';
import { DB_URL, HOST, PORT } from './src/config';
import { productRoutes } from './src/routes';

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);
app.get('/', (req, res) => res.send('Hello world'));
app.listen(PORT, HOST);
console.log(`Server Running on http://localhost:${PORT}`);
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.RequestHandler | null
  ) => {
    res.status(500).json({ message: err.message });
  }
);
export { app };
