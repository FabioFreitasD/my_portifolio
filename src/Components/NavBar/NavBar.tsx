import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly"
}))

const NavBar = () => {

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar;