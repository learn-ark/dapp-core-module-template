# ARK Core - dApp Template Project

<p align="center">
    <img src="https://github.com/ArkEcosystem/core-plugin-skeleton/blob/master/banner.png" />
</p>

Create a new project based on this template and load your plugin into the corresponding network configuration.

# ARK Core - dApp Installation Setup Steps
This is a basic template project for Ark dApp development.

> This Example is currently operational only on our `core/develop` branch!

This template project provides initial structure for your dApp development. 

## dApp Installation

### STEP 0: Create New Project Based On This Template

### STEP 1: Checkout Your New dApp Project As a GitSubmodule in `core/plugins`

Assuming you have already checked out out core repository and have local testnet running. If not head over to https://learn.ark.dev/core-getting-started/spinning-up-your-first-testnet#step-2-testnet-network-boot

```bash
cd plugins/ #location for loading of custom non-core dApps
git submodule add -f https://github.com/your-handle/your-dapp-name 
cd your-dapp-name
```

### STEP 2: Load The dApp In The Corresponding Network Configurations.

In our example we load `your-dapp-name` in the Testnet network configuration.

Go to:
`core/packages/core/bin/testnet`

```bash
cd packages/core/bin/config/testnet
```

Locate file `plugins.js`. We will add our dApp/plugin name to end of the list of the loaded plugins. This means that core will pickup the plugin/dapp and load it for a specific network configuration. Add line `"@arkecosystem/your-dapp-name": {}`: to the end of the `plugins.js` file, so it looks something like this:

```javascript
    "@arkecosystem/core-exchange-json-rpc": {
        enabled: process.env.CORE_EXCHANGE_JSON_RPC_ENABLED,
        host: process.env.CORE_EXCHANGE_JSON_RPC_HOST || "0.0.0.0",
        port: process.env.CORE_EXCHANGE_JSON_RPC_PORT || 8080,
        allowRemote: false,
        whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
    },
    "@arkecosystem/core-snapshots": {},
    "@arkecosystem/your-dapp-name": {}, //our application hook (here we load the plugin/dapp)
```

> Make sure to run `yarn setup` from the `core` root folder when you change or add code to `core/plugins`

### STEP 3: Start Local Testnet Blockchain

Start local blockchain with testnet running on your developer computer. Follow steps defined in here:
https://learn.ark.dev/core-getting-started/spinning-up-your-first-testnet#step-2-testnet-network-boot

> Pay attention to the core log. It should write that your plugin/dapp was loaded.


## Use Block Explorer To View Local Running Testnet

The following code instructions will run a local copy of ARK Explorer and connect to local node.

```bash
    git clone https://github.com/arkecosystem/explorer
    cd explorer

    yarn install

    yarn serve:testnet

```

After running `yarn serve:testnet` you should see the following:

```bash
 DONE  Compiled successfully in 11030ms                                                                                                        11:07:14 AM

No type errors found
Version: typescript 3.6.3
Time: 6973ms

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.178:8080/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

Head over to http://localhost:8080/ to view contents of local running blockchain with Testnet environment setup.

---

Congrats, your dapp is loaded. Now look at the resources below to understand more about our dapp development.

-   [Introduction To Custom Transactions](https://blog.ark.io/an-introduction-to-blockchain-application-development-part-2-2-909b4984bae)
-   [Learn Development With ARK](https://learn.ark.dev)


## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.


## License

[MIT](LICENSE) © [ArkEcosystem](https://ark.io)
