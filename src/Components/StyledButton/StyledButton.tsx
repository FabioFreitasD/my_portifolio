import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButtonElement = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light
    }
}))

const StyledButton: React.FC<StyledButtonProps> = ({ children , onClick }) => {

    return(
        <StyledButtonElement onClick={ onClick }>
            {children}
        </StyledButtonElement>
    )
}

export default StyledButton;