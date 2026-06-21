import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MeetPlay Backend API',
      version: '1.0.0',
      description: 'API documentation for the MeetPlay backend server',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local' },
      { url: 'https://api.meetplay.in', description: 'Production' },
    ],
  },
  // Scan route files for @openapi JSDoc annotations.
  // Globs cover both ts (dev) and compiled js (prod).
  apis: ['./src/routes/*.ts', './dist/routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
