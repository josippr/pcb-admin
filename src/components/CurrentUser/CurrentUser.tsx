import React, { useState, useEffect } from "react";

import { styled } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Avatar from "boring-avatars";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useNavigate } from "../../navigation/navigation";

import "../../styles/global.css";

const UserContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
});

const UserSpan = styled("span")({
  color: "#0A1849",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});

const MenuDropdown = styled(Menu)({
  width: "100% !important",
});

const CurrentUser: React.FC = () => {
  const [user] = useAuthState(auth);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()?.navigate;

  useEffect(() => {
    if (user) {
      setDisplayName(user.email);
    } else {
      setDisplayName(null);
    }
  }, [user]);

  const handleSignInClick = () => {
    navigate && navigate("/login");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (user) {
      setAnchorEl(event.currentTarget);
    } else {
      handleSignInClick();
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    auth.signOut();
    navigate && navigate("/login");
    handleClose();
  };

  return (
    <div>
      <UserContainer onClick={handleClick}>
        {user ? (
          <>
            <Avatar
              size={40}
              name={displayName || "User"}
              variant="marble"
              colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
            />
            <UserSpan className="capitalizeFirstLetter">{displayName}</UserSpan>
            <IconButton size="small">
              <ArrowDropDownIcon style={{ color: "#0A1849" }} />
            </IconButton>
          </>
        ) : (
          <UserSpan className="capitalizeFirstLetter" onClick={handleSignInClick}>Sign In</UserSpan>
        )}
      </UserContainer>
      {user && (
        <MenuDropdown
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <CloseButton size="small" onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <br />
          <MenuItem>My Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={() => navigate && navigate("/privacy-policy")}>
            Privacy Policy
          </MenuItem>
          <MenuItem onClick={() => navigate && navigate("/report-bugs")}>Report Bugs</MenuItem>
          <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
        </MenuDropdown>
      )}
    </div>
  );
};

export default CurrentUser;
