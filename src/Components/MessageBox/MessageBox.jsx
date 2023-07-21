import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

export default function App() {
	const [open, setOpen] = React.useState(false);

	const handleToClose = (event, reason) => {
		if ("clickaway" == reason) return;
		setOpen(false);
	};

	const handleClickEvent = () => {
		setOpen(true);
	};

	return (
		<div style={{}}>
			<h4>
				How to use SnackBar Component in ReactJS?
			</h4>
			<Button onClick={handleClickEvent}>
				Open Snackbar
			</Button>
			<Snackbar
				anchorOrigin={{
					horizontal: "left",
					vertical: "bottom",
				}}
				open={open}
				autoHideDuration={5000}
				message="Sample Warning"
				onClose={handleToClose}
				action={
					<React.Fragment>
						<IconButton
							size="small"
							aria-label="close"
							color="inherit"
							onClick={handleToClose}
						>
							<CloseIcon fontSize="small" />
						</IconButton>
					</React.Fragment>
				}
			/>
		</div>
	);
}
