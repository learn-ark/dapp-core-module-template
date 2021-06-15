import { Container, Contracts, Providers } from "@arkecosystem/core-kernel";
import { DappManager } from "./manager";

const DappManagerIdentifier = Symbol.for("DappManager");

export class ServiceProvider extends Providers.ServiceProvider {
    public async register(): Promise<void> {
        this.app.get<Contracts.Kernel.Logger>(Container.Identifiers.LogService).info(`Loading dapp`);

        this.app.bind<DappManager>(DappManagerIdentifier).to(DappManager).inSingletonScope();
    }

    public async boot(): Promise<void> {
        this.app.get<Contracts.Kernel.Logger>(Container.Identifiers.LogService).info(`Booting dapp`);
    
        this.app.get<DappManager>(DappManagerIdentifier).start({});
    }

    public async dispose(): Promise<void> {
        this.app.get<Contracts.Kernel.Logger>(Container.Identifiers.LogService).info(`Disposing dapp`);
    
        this.app.get<DappManager>(DappManagerIdentifier).stop();
    }
}