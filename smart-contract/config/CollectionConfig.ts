import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'StickTestNFTpt4',
  tokenName: 'Stick Test NFT pt4',
  tokenSymbol: 'STCK4',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10,

  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 10,
  },
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 3
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },

  contractAddress: '0x48D233F22F532CD40980d91b006776929F120d30',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
