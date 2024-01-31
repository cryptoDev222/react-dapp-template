import React from 'react';
import useAuth from '@/hooks/useAuth'
import { useWeb3React } from '@web3-react/core';

const ConnectButton = () => {
  const { login, logout } = useAuth()
  const { account } = useWeb3React();

  return (
    <button
      style={{
        borderRadius: '8px',
        background: 'var(--theme-button-back)',
        color: 'var(--theme-button-text)',
        outline: 'none',
        height: '32px',
        border: 'none',
        cursor: 'pointer'
      }}
        onClick={() => {
          if (!account) {
            login('MetaMask')
          } else {
            logout()
          }
        }}
      >
        {account ? `${account.slice(0, 4)}...${account.slice(account.length - 3, account.length)}` : "Connect"}
      </button>
  )
}

export default ConnectButton