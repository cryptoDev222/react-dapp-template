import React, { createContext, useState } from "react";

export const SnackbarContext = createContext({
  showMessage: () => {},
  snackbar: {},
});

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState([]);

  const showMessage = (message, type = "success") => {
    setSnackbar([
      ...snackbar,
      {
				id: Math.random() * (new Date().getTime()),
        message,
        type,
        open: !!message,
      },
    ]);
  };

	const removeItem = (index) => {
		let snackbarTemp = snackbar;
		const real = snackbarTemp.filter(item => item.id !== index)

		setSnackbar([...real])
	}

  const contextValue = {
    showMessage,
    snackbar,
		removeItem
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
    </SnackbarContext.Provider>
  );
};
