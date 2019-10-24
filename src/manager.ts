import { app } from "@arkecosystem/core-container";
import { Logger } from "@arkecosystem/core-interfaces";

export class DappManager {
    private readonly logger: Logger.ILogger = app.resolvePlugin<Logger.ILogger>(
        "logger"
    );

    /**
     * Your dApp init code goes here
     * @param options - from default.ts
     */
    public start(options: any) {
        this.logger.info("Initialization of dApp");
    }

    /**
     * Your dApp stopping code goes here
     */
    public stop() {
        this.logger.info("Stopping dApp");
    }
}
