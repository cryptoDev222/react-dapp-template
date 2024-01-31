import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import { SnackbarProvider } from "./contexts";
import { Web3ReactProvider } from "@web3-react/core";
import Snackbar from "./components/shared/Snackbar";
import { hooks as metaMaskHooks, metaMask } from '@/connectors/metaMask'
import AppRouter from "./routes";

const connectors = [
  [metaMask, metaMaskHooks],
]

const App = () => {
  return (
    <SnackbarProvider>
      <Web3ReactProvider connectors={connectors}>
        <div className="App">
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