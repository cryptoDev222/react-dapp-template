import React, { useContext } from 'react'
import styles from './Snackbar.module.css';
import CloseIcon from '@/assets/svg/icons/CloseIcon.svg'
import { SnackbarContext } from '@/contexts/SnackbarContext'

export default function SimpleSnackbar() {
	const { snackbar, showMessage } = useContext(SnackbarContext)

	const { message, type, open } = snackbar

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		showMessage('', type)
	}

	return (
		<div>
			{
				open && (
					<div>Helloooo</div>
				)
			}
		</div>
	)
}
