export function getName(connector) {
  if (connector) return 'MetaMask'
  // if (connector instanceof WalletConnectV2) return 'WalletConnect V2'
  // if (connector instanceof CoinbaseWallet) return 'Coinbase Wallet'
  // if (connector instanceof Network) return 'Network'
  // if (connector instanceof GnosisSafe) return 'Gnosis Safe'
  return 'Unknown'
}
