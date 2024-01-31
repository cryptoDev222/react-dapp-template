import React, { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import { SnackbarProvider } from "./contexts";
import { Web3ReactProvider } from "@web3-react/core";
import Snackbar from "./components/shared/Snackbar";
import { getConnectorHooks } from "@/connectors/utils/wallet";
import { hooks as metaMaskHooks, metaMask } from '@/connectors/metaMask'
import AppRouter from "./routes";

const connectors = [
  [metaMask, metaMaskHooks],
]

function Child() {
  useEffect(() => {
    const connectorId = window.localStorage.getItem('react-dapp-wallet')
    if (connectorId) {
      const connectorObj = getConnectorHooks(connectorId)
      if (connectorObj?.connector) {
        connectorObj?.connector?.connectEagerly()
      }
    }
  }, [])
  return null
}

const App = () => {
  return (
    <SnackbarProvider>
      <Web3ReactProvider connectors={connectors}>
        <div className="App">
          <Child />
          <Router>
            <AppRouter />
          </Router>
          <Snackbar />
        </div>
      </Web3ReactProvider>
    </SnackbarProvider>
  );
};

export default App;