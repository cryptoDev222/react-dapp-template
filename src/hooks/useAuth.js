import React from "react";
import { useWeb3React } from "@web3-react/core";
import { getConnectorHooks } from "@/connectors/utils/wallet";
import { getName } from "@/connectors/utils";

const useAuth = () => {
  const { connector } = useWeb3React();

  const login = async (connectorID) => {
      const connectorObj = getConnectorHooks(connectorID);
      const connector = connectorObj?.connector;
      if (connector) {
        connector
          .activate()
          .then(() =>
            console.log("Successfully Connected!", getName(connector))
          )
          .catch((error) => {
            window.localStorage.removeItem('sphynx-manage-wallet');
            console.log("Error login : ", error.name, error.message);
          });
      } else {
        console.log("Connection Error");
      }
    }

  const logout = () => {
    if (connector?.deactivate) {
      connector.deactivate();
    } else {
      connector.resetState();
    }
    window.localStorage.removeItem('sphynx-manage-wallet');
  };

  return { login, logout };
};

export default useAuth;
