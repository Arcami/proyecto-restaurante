const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restaurante API",
      version: "1.0.0",
      description: "API documentation for the Restaurante application",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [
    path.join(__dirname, "api/routes/*.js"),
    path.join(__dirname, "api/controllers/*.js"),
  ],
};

const specs = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  specs,
};
