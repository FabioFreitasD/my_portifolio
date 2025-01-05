import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
}))

const NavBar = () => {

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem component="a" href="#about">About</MenuItem>
                    <MenuItem component="a" href="#skills">Skills</MenuItem>
                    <MenuItem component="a" href="#projects">Projects</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar;