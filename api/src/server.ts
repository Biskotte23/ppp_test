import 'reflect-metadata';

import { config } from 'dotenv';
import path from 'path';

import App from './App';
import GenericRouter from './routes/GenericRouter';

const envPath = path.join(__dirname, '..', '..', '.env');
config({ path: envPath });

const port = process.env.PORT || 8000;

const app = new App();

async function launchAPI() {
  app.server.listen(port, () => {
    console.log(`API running (documentation: http://localhost:${port}${GenericRouter.route}/doc)`);
  });
}

launchAPI();
