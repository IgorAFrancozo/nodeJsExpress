import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prime Bebidas',
            version: '1.0.0',
        },
    },
    apis: [
        path.join(__dirname, '../routes/produtosRoutes.js'),
        path.join(__dirname, '../routes/estabelecimentosRoutes.js')
    ],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
