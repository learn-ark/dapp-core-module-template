import { app } from "@arkecosystem/core-container";
import {
    Blockchain,
    Database,
    EventEmitter,
    Logger
} from "@arkecosystem/core-interfaces";

/**
 * Abstract class that exposes important Core Platform classes that you can work with
 * Adjust to your needs.
 */
export abstract class BaseService {
    protected readonly config = app.getConfig();
    protected readonly logger: Logger.ILogger = app.resolvePlugin<
        Logger.ILogger
    >("logger");
    protected readonly emitter: EventEmitter.EventEmitter = app.resolvePlugin<
        EventEmitter.EventEmitter
    >("event-emitter");

    protected readonly blockchain = app.resolvePlugin<Blockchain.IBlockchain>(
        "blockchain"
    );
    protected readonly databaseService = app.resolvePlugin<
        Database.IDatabaseService
    >("database");
    protected readonly transactionsRepository = app.resolvePlugin<
        Database.IDatabaseService
    >("database").transactionsBusinessRepository;
    protected readonly blocksRepository = app.resolvePlugin<
        Database.IDatabaseService
    >("database").blocksBusinessRepository;
}
