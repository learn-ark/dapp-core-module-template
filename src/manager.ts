import { Container, Contracts } from "@arkecosystem/core-kernel";

@Container.injectable()
export class DappManager {
    @Container.inject(Container.Identifiers.LogService)
    private readonly logger!: Contracts.Kernel.Logger;

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
