import { INestApplication, Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger("DBService");

  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL || 'postgresql://atul:atul@localhost:5432/atul',
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log("Connected to database");
    } catch (error) {
      this.logger.error(`Unable to connect to database, Reason: ${error.message}`);
      throw new Error(error.message);
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on("beforeExit", async () => {
      await app.close();
      this.logger.warn("Database: Graceful Shutdown");
    });
  }
}
