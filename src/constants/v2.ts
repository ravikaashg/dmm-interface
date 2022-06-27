import { ChainId } from '@kyberswap/ks-sdk-core'
import { t } from '@lingui/macro'
// a list of tokens by chain
type ChainStringList = {
  readonly [chainId in ChainId]: string
}
const V2_CORE_FACTORY_ADDRESS = '0x5F1dddbf348aC2fbe22a163e30F99F9ECE3DD50a'
export const PRO_AMM_CORE_FACTORY_ADDRESSES: ChainStringList = {
  [ChainId.MAINNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.ROPSTEN]: '0x7D877Cde00D6575bd45E15Af64BA193e32A09743',
  [ChainId.RINKEBY]: '0xBC1A68889EB9DE88838259B16d30C3639304A546',
  [ChainId.GÖRLI]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.KOVAN]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.MATIC]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.MUMBAI]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.BSCTESTNET]: '0x2D2B8D5093d0288Da2473459545FE7a2f057bd7D',
  [ChainId.BSCMAINNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.AVAXTESTNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.AVAXMAINNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.FANTOM]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.CRONOSTESTNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.CRONOS]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.ARBITRUM]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.ARBITRUM_TESTNET]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.BTTC]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.AURORA]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.VELAS]: V2_CORE_FACTORY_ADDRESS,
  [ChainId.OASIS]: V2_CORE_FACTORY_ADDRESS,
}

const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x2B1c7b41f6A8F2b2bc45C3233a5d5FB3cD6dC9A8'
export const PRO_AMM_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: ChainStringList = {
  [ChainId.MAINNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.ROPSTEN]: '0x593040768dAF97CEB9d2dBD627B00a209A5FE986',
  [ChainId.RINKEBY]: '0x50067B85491Fd7f3E3a5e707a9161F1f4f68372e',
  [ChainId.GÖRLI]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.KOVAN]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.MATIC]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.MUMBAI]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.BSCTESTNET]: '0xe0a4C2a9343A79A1F5b1505C036d033C8A178F90',
  [ChainId.BSCMAINNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.AVAXTESTNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.AVAXMAINNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.FANTOM]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.CRONOSTESTNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.CRONOS]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.ARBITRUM_TESTNET]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.ARBITRUM]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.BTTC]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.AURORA]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.VELAS]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
  [ChainId.OASIS]: NONFUNGIBLE_POSITION_MANAGER_ADDRESS,
}
// const TICK_READER = '0xb4748ce3ca04BE8f7E266dC9E38343A286eB5Ec6' //-- old
const TICK_READER = '0xe3AC3fd66EB31cAf4EE0831b262D837c479FFCe5'

export const PRO_AMM_TICK_READER: ChainStringList = {
  [ChainId.MAINNET]: TICK_READER,
  [ChainId.ROPSTEN]: '0x9A32cd0d2Fc6C60bFE51B0f0Ab27bAd82ca8F3FD',
  [ChainId.RINKEBY]: '0xF08651170A4593898B5506BAbaf3A7fc85C0958E',
  [ChainId.GÖRLI]: TICK_READER,
  [ChainId.KOVAN]: TICK_READER,
  [ChainId.MATIC]: "0x48f6D7dAE56623Dde5a0D56B283165cAE1753D70",
  [ChainId.MUMBAI]: TICK_READER,
  [ChainId.BSCTESTNET]: TICK_READER,
  [ChainId.BSCMAINNET]: TICK_READER,
  [ChainId.AVAXTESTNET]: TICK_READER,
  [ChainId.AVAXMAINNET]: TICK_READER,
  [ChainId.FANTOM]: TICK_READER,
  [ChainId.CRONOSTESTNET]: TICK_READER,
  [ChainId.CRONOS]: TICK_READER,
  [ChainId.ARBITRUM_TESTNET]: TICK_READER,
  [ChainId.ARBITRUM]: TICK_READER,
  [ChainId.BTTC]: TICK_READER,
  [ChainId.OASIS]: TICK_READER,
  [ChainId.VELAS]: TICK_READER,
  [ChainId.AURORA]: TICK_READER,
}

const INIT_CODE_HASH = '0xc597aba1bb02db42ba24a8878837965718c032f8b46be94a6e46452a9f89ca01'

export const PRO_AMM_INIT_CODE_HASH: ChainStringList = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.ROPSTEN]: INIT_CODE_HASH,
  [ChainId.RINKEBY]: '0x9af381b43515b80cfc9d1c3abe15a1ebd48392d5df2bcce1eb4940eea548c789',
  [ChainId.GÖRLI]: INIT_CODE_HASH,
  [ChainId.KOVAN]: INIT_CODE_HASH,
  [ChainId.MATIC]: INIT_CODE_HASH,
  [ChainId.MUMBAI]: INIT_CODE_HASH,
  [ChainId.BSCTESTNET]: INIT_CODE_HASH,
  [ChainId.BSCMAINNET]: INIT_CODE_HASH,
  [ChainId.AVAXTESTNET]: INIT_CODE_HASH,
  [ChainId.AVAXMAINNET]: INIT_CODE_HASH,
  [ChainId.FANTOM]: INIT_CODE_HASH,
  [ChainId.CRONOSTESTNET]: INIT_CODE_HASH,
  [ChainId.CRONOS]: INIT_CODE_HASH,
  [ChainId.ARBITRUM_TESTNET]: INIT_CODE_HASH,
  [ChainId.ARBITRUM]: INIT_CODE_HASH,
  [ChainId.BTTC]: INIT_CODE_HASH,
  [ChainId.AURORA]: INIT_CODE_HASH,
  [ChainId.VELAS]: INIT_CODE_HASH,
  [ChainId.OASIS]: INIT_CODE_HASH,
}

const QUOTER = '0x0D125c15D54cA1F8a813C74A81aEe34ebB508C1f'

export const PRO_AMM_QUOTER: ChainStringList = {
  [ChainId.MAINNET]: QUOTER,
  [ChainId.ROPSTEN]: '0x7BA7cC55D3Ef5226b421bb3fD689251855B4cd21',
  [ChainId.RINKEBY]: '0x5BcbB0bb7236d9fb3DB4C996B05f0e6162Ba5B64',
  [ChainId.GÖRLI]: QUOTER,
  [ChainId.KOVAN]: QUOTER,
  [ChainId.MATIC]: QUOTER,
  [ChainId.MUMBAI]: QUOTER,
  [ChainId.BSCTESTNET]: '0xF4117D3c57BFe20fB2600eaE4028FB12bF99Ac10',
  [ChainId.BSCMAINNET]: QUOTER,
  [ChainId.AVAXTESTNET]: QUOTER,
  [ChainId.AVAXMAINNET]: QUOTER,
  [ChainId.FANTOM]: QUOTER,
  [ChainId.CRONOSTESTNET]: QUOTER,
  [ChainId.CRONOS]: QUOTER,
  [ChainId.ARBITRUM_TESTNET]: QUOTER,
  [ChainId.ARBITRUM]: QUOTER,
  [ChainId.BTTC]: QUOTER,
  [ChainId.AURORA]: QUOTER,
  [ChainId.VELAS]: QUOTER,
  [ChainId.OASIS]: QUOTER,
}

const ROUTER = '0xC1e7dFE73E1598E3910EF4C7845B68A9Ab6F4c83'
export const PRO_AMM_ROUTERS: ChainStringList = {
  [ChainId.MAINNET]: ROUTER,
  [ChainId.ROPSTEN]: '0x1A46dCaC1d91F1731574BEfAEDaC4E0392726e35',
  [ChainId.RINKEBY]: '0x335cB9b399e3c33c4a0d1bE7407675C888f66e86',
  [ChainId.GÖRLI]: ROUTER,
  [ChainId.KOVAN]: ROUTER,
  [ChainId.MATIC]: ROUTER,
  [ChainId.MUMBAI]: ROUTER,
  [ChainId.BSCTESTNET]: '0x785b8893342dfEf9B5D565f67be971b859d34a15',
  [ChainId.BSCMAINNET]: ROUTER,
  [ChainId.AVAXTESTNET]: ROUTER,
  [ChainId.AVAXMAINNET]: ROUTER,
  [ChainId.FANTOM]: ROUTER,
  [ChainId.CRONOSTESTNET]: ROUTER,
  [ChainId.CRONOS]: ROUTER,
  [ChainId.ARBITRUM_TESTNET]: ROUTER,
  [ChainId.ARBITRUM]: ROUTER,
  [ChainId.BTTC]: ROUTER,
  [ChainId.OASIS]: ROUTER,
  [ChainId.VELAS]: ROUTER,
  [ChainId.AURORA]: ROUTER,
}

// const LM_READER = '0x1646F75cFda0B37f4A3C92bCc68ecc41046e3957'
// export const PRO_AMM_LM_READER: ChainStringList = {
//   [ChainId.MAINNET]: LM_READER,
//   [ChainId.ROPSTEN]: LM_READER,
//   [ChainId.RINKEBY]: LM_READER,
//   [ChainId.GÖRLI]: LM_READER,
//   [ChainId.KOVAN]: LM_READER,
//   [ChainId.MATIC]: LM_READER,
//   [ChainId.MUMBAI]: LM_READER,
//   [ChainId.BSCTESTNET]: LM_READER,
//   [ChainId.BSCMAINNET]: LM_READER,
//   [ChainId.AVAXTESTNET]: LM_READER,
//   [ChainId.AVAXMAINNET]: LM_READER,
//   [ChainId.FANTOM]: LM_READER,
//   [ChainId.CRONOSTESTNET]: LM_READER,
//   [ChainId.CRONOS]: LM_READER,
//   [ChainId.ARBITRUM_TESTNET]: LM_READER,
//   [ChainId.ARBITRUM]: LM_READER,
//   [ChainId.BTTC]: LM_READER,
//   [ChainId.OASIS]: LM_READER,
//   [ChainId.VELAS]: LM_READER,
//   [ChainId.AURORA]: LM_READER,
// }

export const FARM_CONTRACTS: { readonly [chainId in ChainId]?: Array<string> } = {
  [ChainId.BSCTESTNET]: [],
  [ChainId.RINKEBY]: ['0x13c8F670d3bbd4456870a2C49Bb927F166A977Bd'],
  [ChainId.ROPSTEN]: [],
}

export const ELASTIC_NOT_SUPPORTED: { [key: string]: string } = {
  [ChainId.AURORA]: t`Elastic is not supported on Aurora. Please switch to other chains`,
  // [ChainId.VELAS]: t`Elastic will be available soon`,
}

export enum VERSION {
  ELASTIC = 'elastic',
  CLASSIC = 'classic',
}
