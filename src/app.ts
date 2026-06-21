import express, { Application } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import healthRouter from './routes/health';
import { swaggerSpec } from './swagger';

const app: Application = express();

// Allow cross-origin requests. Set CORS_ORIGIN to a comma-separated
// list of allowed origins in production; defaults to allowing all.
const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
  : '*';

app.use(cors({ origin: corsOrigins }));

app.use(express.json());

app.use('/health', healthRouter);

// API documentation
// Register the raw spec route before the catch-all UI mount so it isn't shadowed.
app.get('/api-docs.json', (_req, res) => {
  res.json(swaggerSpec);
});
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
