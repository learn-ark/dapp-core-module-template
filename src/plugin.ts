import { Container, Logger } from "@arkecosystem/core-interfaces";
import { defaults } from "./defaults";
import { DappManager } from "./manager";

export const plugin: Container.IPluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    alias: "dapp-core-template",
    async register(container: Container.IContainer, options) {
        if (!options.enabled) {
            container
                .resolvePlugin<Logger.ILogger>("logger")
                .info("dApp is enabled");

            return undefined;
        }

        container.resolvePlugin<Logger.ILogger>("logger").info("Starting dApp");
        const dappManager = new DappManager(); // creating instance of your dApp

        dappManager.start(options);

        return dappManager;
    },

    async deregister(container: Container.IContainer) {
        const dappManager = container.resolvePlugin("dapp-core-template");

        if (dappManager) {
            container
                .resolvePlugin<Logger.ILogger>("logger")
                .info("Stopping dApp");
            return dappManager.stop();
        }
    }
};
