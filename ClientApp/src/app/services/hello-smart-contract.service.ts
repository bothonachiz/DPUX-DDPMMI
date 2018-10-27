import { Injectable } from "@angular/core";

import * as Web3 from "web3";
import { promise } from "protractor";

declare let require: any;
declare let window: any;

const tokenAbi = require("./tokenContract.json");

@Injectable()
export class HelloSmartContractService {
  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress = "0x5D0020270A7405d786730c3597b7a6f84cC7147C";

  constructor() {
    this._web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/v3/f8cf6abf447740b7b5d28982c8749b03"
      )
    );
    console.log("test");
  }

  // public async getAddress(): Promise<string> {
  //   const result: string = (await new Promise((resolve, reject) => {
  //     this._web3.eth.getAddress((err, accs) => {
  //       resolve(accs);
  //     });
  //   })) as string;
  //   return Promise.resolve(result);
  // }
}
