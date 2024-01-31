import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Snackbar.module.css";
import { SnackbarContext } from "@/contexts/SnackbarContext";

const AlertBox = ({ id, type, message }) => {
  const [closed, setClosed] = useState(false);
  const alertDiv = useRef(null);
  const { removeItem } = useContext(SnackbarContext);

	const getClassNameFromType = (_type) => {
		let className = styles.success;
		switch(_type) {
			case 'success':
				className = styles.success
				break
			case 'error':
				className = styles.error
				break
			case 'warning':
				className = styles.warning
			default:
				className = styles.success
		}

		return className
	}

  useEffect(() => {
    setTimeout(() => {
      setClosed(true);
    }, 10000);
  }, []);

  useEffect(() => {
    if (closed) {
      setTimeout(() => {
        removeItem(id);
      }, 500);
    }
  }, [closed]);

  const handleClose = () => {
    setClosed(true);
  };

  return (
    <div
      onClick={(e) => handleClose(e.target, id)}
      ref={alertDiv}
      className={
        closed
          ? `${styles.alert} ${getClassNameFromType(type)} ${styles.close}`
          : `${styles.alert} ${getClassNameFromType(type)} ${styles.open}`
      }
    >
      {message}
    </div>
  );
};

function SimpleSnackbar() {
  const { snackbar } = useContext(SnackbarContext);

  return (
    <div className={styles.provider}>
      {snackbar.map((_bar) => (
        <AlertBox key={_bar.id} id={_bar.id} type={_bar.type} message={_bar.message} />
      ))}
    </div>
  );
}

export default React.memo(SimpleSnackbar);
