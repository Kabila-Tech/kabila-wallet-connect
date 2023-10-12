import { IKabilaConnect } from "./IKabilaConnect";
import { KabilaSigner } from "./entities/KabilaSigner";


export class KabilaConnect implements IKabilaConnect {
  accountId: string;
  signer: KabilaSigner;

  constructor(accountId: string) {
    this.accountId = accountId;
    this.signer = new KabilaSigner()
  }

  async connect(onConnect?: Function): Promise<void> {
    // walletConnector.connect()
  }

  async disconnect(topic: any, onDisconnect?: Function): Promise<void> {
    // walletConnector.disconnect()
  }

  async sign(transaction: string): Promise<string> {
    return 'null';
  }

  async execute(transaction: string): Promise<void> {
    // walletConnector.send
  }

  async executeAndWait(transaction: string): Promise<void> {
  }

}