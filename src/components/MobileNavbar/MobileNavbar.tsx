import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "boring-avatars";
import { User } from "firebase/auth";
import { useNavigate } from "../../navigation/navigation";
import { styled } from "@mui/material/styles";
import { auth } from "../../firebase";

const MobileMenu = styled("div")({
  color: "#0a1849",
  fontSize: "36px !important",
  width: "50px",
  height: "50px",
  marginTop: "10px",
});

const NavMenuItem = styled(MenuItem)({
  textDecoration: "none",
});

interface MobileNavbarProps {
  user: User | null;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()?.navigate;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
		await auth.signOut();
		handleClose();
    navigate && navigate("/login");
  };

  return (
    <MobileMenu>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {user ? (
					<NavMenuItem onClick={() => navigate && navigate("/profile")}>
						<Avatar
							size={30}
							name={user.email || "User"}
							variant="marble"
							colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
						/><p style={{marginLeft: '10px', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif'}}>{user.email && user.email.split('@')[0]}</p>
					</NavMenuItem>
				) : (
					<NavMenuItem onClick={() => {handleClose(); navigate && navigate("/login") }}>
						Sign In
					</NavMenuItem>
				)}
        <NavMenuItem onClick={() => {handleClose(); navigate && navigate("/");}}>Home</NavMenuItem>
        <NavMenuItem onClick={() => {handleClose(); navigate && navigate("/users");}}>Users</NavMenuItem>
        <NavMenuItem onClick={() => {handleClose(); navigate && navigate("/");}}>Blog Posts</NavMenuItem>
        <NavMenuItem onClick={() => {handleClose(); navigate && navigate("/");}}>Info</NavMenuItem>
        <NavMenuItem onClick={() => {handleClose(); handleSignOut()}}>Log Out</NavMenuItem>
      </Menu>
    </MobileMenu>
  );
};

export default MobileNavbar;
