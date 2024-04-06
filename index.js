// 通过 助记词+密码 恢复私钥
const solanaWeb3 = require('@solana/web3.js');
const bip39 = require('bip39')
const bs58 = require('bs58')
const ed25519 = require('ed25519-hd-key')

const derivePath = "m/44'/501'/0'/0'"

const mnemonic = "助记词xxxxxxxxxxxxxxxxxxxxxxxxxxx";
const password = ''

const seed = bip39.mnemonicToSeedSync(mnemonic, password); // (mnemonic, password)
const derivedSeed = ed25519.derivePath(derivePath, seed.toString('hex')).key

const account = solanaWeb3.Keypair.fromSeed(derivedSeed.slice(0, 32))

const address = account.publicKey.toBase58()
const secretKey = account.secretKey

console.log('address: ', address);
console.log('secretKey: ', bs58.encode(account.secretKey));
