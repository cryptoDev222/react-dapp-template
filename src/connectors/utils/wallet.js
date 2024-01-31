import React from 'react'
import { hooks as metaMaskHooks, metaMask } from '@/connectors/metaMask'

export const getConnectorHooks = (type) => {
  switch (type) {
    case 'MetaMask':
      return { type: 'MetaMask', hooks: metaMaskHooks || null, connector: metaMask }
    // case 'WalletConnect V2':
    //   return { type: 'WalletConnect V2', hooks: walletConnectV2Hooks || null, connector: walletConnectV2 }
    // case 'Coinbase Wallet':
    //   return { type: 'Coinbase Wallet', hooks: coinbaseWalletHooks || null, connector: coinbaseWallet }
    // case 'Network':
    //   return { type: 'Network', hooks: networkHooks || null, connector: network }
    // case 'Gnosis Safe':
    //   return { type: 'Gnosis Safe', hooks: gnosisSafeHooks || null, connector: gnosisSafe }
    default:
      return null
  }
}
