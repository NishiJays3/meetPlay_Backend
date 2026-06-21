import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import healthRouter from './routes/health';
import { swaggerSpec } from './swagger';

const app: Application = express();

app.use(express.json());

app.use('/health', healthRouter);

// API documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api-docs.json', (_req, res) => {
  res.json(swaggerSpec);
});

export default app;
