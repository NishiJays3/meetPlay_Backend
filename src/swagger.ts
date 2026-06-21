import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MeetPlay Backend API',
      version: '1.0.0',
      description: 'API documentation for the MeetPlay backend server',
    },
    // Relative URL → "Try it out" calls the same origin serving the docs,
    // so it works on both localhost and https://api.meetplay.in without
    // hitting a hardcoded loopback address (which browsers block).
    servers: [{ url: '/', description: 'Current host' }],
  },
  // Scan route files for @openapi JSDoc annotations.
  // Globs cover both ts (dev) and compiled js (prod).
  apis: ['./src/routes/*.ts', './dist/routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
