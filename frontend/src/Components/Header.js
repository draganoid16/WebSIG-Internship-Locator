import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// MUI imports
import {
	Button,
	Typography,
	Grid,
	AppBar,
	Toolbar,
	Menu,
	MenuItem,
	Snackbar,
} from "@mui/material";

// Contexts
import StateContext from "../Contexts/StateContext";
import DispatchContext from "../Contexts/DispatchContext";


function Header() {
	const navigate = useNavigate();
	const GlobalState = useContext(StateContext);
	const GlobalDispatch = useContext(DispatchContext);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function HandleProfile() {
		setAnchorEl(null);
		navigate("/perfil");
	}

	const [openSnack, setOpenSnack] = useState(false);

	async function HandleLogout() {
		setAnchorEl(null);
		const confirmLogout = window.confirm("Tens a certeza que queres dar logout?");
		if (confirmLogout) {
			try {
				const response = await Axios.post(
					"http://localhost:8000/api-auth-djoser/token/logout/",
					GlobalState.userToken,
					{ headers: { Authorization: "Token ".concat(GlobalState.userToken) } }
				);

				GlobalDispatch({ type: "logout" });
				setOpenSnack(true);
			} catch (e) {}
		}
	}

	useEffect(() => {
		if (openSnack) {
			setTimeout(() => {
				navigate(0);
			}, 1500);
		}
	}, [openSnack]);

	return (
		<AppBar position="static" style={{ backgroundColor: "black" }}>
			<Toolbar>
				<div style={{ marginRight: "auto" }}>
					<Button color="inherit" onClick={() => navigate("/")}>
						<Typography variant="h4">UAEstagios</Typography>{" "}
					</Button>
				</div>
				<div>
					<Button
						color="inherit"
						onClick={() => navigate("/listings")}
						style={{ marginRight: "2rem" }}
					>
						<Typography variant="h6">Estagios</Typography>{" "}
					</Button>
					<Button
						color="inherit"
						style={{ marginLeft: "2rem" }}
						onClick={() => navigate("/empresas")}
					>
						{" "}
						<Typography variant="h6">Empresas</Typography>{" "}
					</Button>
				</div>
				<div style={{ marginLeft: "auto", marginRight: "10rem" }}>
					<Button
						onClick={() => navigate("/adicionarestagio")}
						className="adicionar-estagio"
					>
						Adicionar Estagio
					</Button>

					{GlobalState.userIsLogged ? (
						<Button
							className="perfil"
							onClick={handleClick}
						>
							{GlobalState.userUsername}
						</Button>
					) : (
						<Button
							className="perfil"
							onClick={() => navigate("/login")}
						>
							Login
						</Button>
					)}

					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem
							className="perfil"
							onClick={HandleProfile}
						>
							Perfil
						</MenuItem>
						<MenuItem
							className="perfil"
							onClick={HandleLogout}
						>
							Logout
						</MenuItem>
					</Menu>
					<Snackbar
						open={openSnack}
						message="Logout com sucesso!"
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
