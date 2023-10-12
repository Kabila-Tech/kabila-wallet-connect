import { KabilaSigner } from "./entities/KabilaSigner";

export interface IKabilaConnect {
  accountId: string,
  signer: KabilaSigner,
  connect(something: any): Promise<void>,
  disconnect(disconnect: any): Promise<void>,
  sign(transaction: string): Promise<string>,
  execute(transaction: string): Promise<void>,
  executeAndWait(transaction: string): Promise<void>
}