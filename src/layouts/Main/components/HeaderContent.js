import React from 'react'
import styles from './comp.module.css';
import ConnectButton from '../../../components/buttons/ConnectWalletButton';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
  return (
    <div className={styles.topbar}>
      <Link to="/">
        <h3>React Dapp</h3>
      </Link>
      <ConnectButton />
    </div>
  )
}

export default HeaderContent;