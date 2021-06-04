# ethers-aws-kms-signer

This is a wallet or signer that can be used together with [Ethers.js](https://github.com/ethers-io/ethers.js/) applications.

## Getting Started

```sh
npm i ethers-aws-kms-signer
```

You can provide the AWS Credentials using the various ways listed [here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) depending on how you are using this library. You can also explicitly specify them when invoking the `AwsKmsSigner` constructor as shown below.

```js
import { AwsKmsSigner } from "ethers-aws-kms-signer";

const kmsCredentials = {
  accessKeyId: "AKIAxxxxxxxxxxxxxxxx", // credentials for your IAM user with KMS access
  secretAccessKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // credentials for your IAM user with KMS access
  region: "ap-southeast-1",
  keyId: "arn:aws:kms:ap-southeast-1:123456789012:key/123a1234-1234-4111-a1ab-a1abc1a12b12",
};

const provider = ethers.providers.getDefaultProvider("ropsten");
let signer = new AwsKmsSigner(kmsCredentials);
signer = signer.connect(provider);

const tx = await signer.sendTransaction({ to: "0xE94E130546485b928C9C9b9A5e69EB787172952e", value: 1 });
console.log(tx);

```

# Developers
## Install

 `git clone` this repo

```sh
$ git clone https://github.com/rjchow/nod my-module
$ cd my-module
$ rm -rf .git
$ npm install # or yarn
```

Just make sure to edit `package.json`, `README.md` and `LICENSE` files accordingly with your module's info.

## Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run build # generate docs and transpile code
```

## Logging

Turn on debugging by using the DEBUG environment variable for Node.js and using localStorage.debug in the browser.

E.g:

```bash
DEBUG="PLACEHOLDER_PROJECT_NAME:*" npm run dev
```

## Commit message format

This boiler plate uses the **semantic-release** package to manage versioning. Once it has been set up, version numbers and Github release changelogs will be automatically managed. **semantic-release** uses the commit messages to determine the type of changes in the codebase. Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

Use `npm run commit` instead of `git commit` in order to invoke Commitizen commit helper that helps with writing properly formatted commit messages.


## License

MIT © [RJ Chow](https://github.com/rjchow)


# Credits

Utmost credit goes to Lucas Henning for doing the legwork on parsing the AWS KMS signature and public key asn formats: https://luhenning.medium.com/the-dark-side-of-the-elliptic-curve-signing-ethereum-transactions-with-aws-kms-in-javascript-83610d9a6f81

A significant portion of code was inspired by the work he published at https://github.com/lucashenning/aws-kms-ethereum-signing
