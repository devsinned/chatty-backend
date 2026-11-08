import express, { type Express } from 'express';
import { ChattyServer } from './setupServer.ts';
import databaseConnection from './setupDatabase.ts';
import { config } from './config.ts';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const applicatiion: Application = new Application();
applicatiion.initialize();
