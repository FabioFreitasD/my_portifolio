import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, IconButton, styled, Typography } from "@mui/material";

const StyledContainer = styled('section')(({theme}) => ({
    background: theme.palette.primary.main,
    paddingBottom: "20px",
    '& .container-footer': {
        display: "block",
        textAlign: "center",
        color: theme.palette.primary.contrastText
    },
    [theme.breakpoints.up('xs')]: {
        '& .container': {
            display: "block",
            padding: "10px",
            textAlign: "center",
        },
        '& .descretion': {
            paddingTop: "20px"
        }
    },
    [theme.breakpoints.up('md')]: {
        '& .container': {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    }
}))

const Footer = () => {
    return(
        <StyledContainer>
            <Box>
                <Container className="container" sx={{ px: 0, py: 0}} >
                    <Box className="container-footer">
                        <Typography fontSize="1.4em" >Redes</Typography>
                        <IconButton>
                            <Facebook sx={{color: "#3b5998"}} />
                        </IconButton>                            
                        <IconButton>
                            <Twitter  sx={{color: "#00acee"}}/>
                        </IconButton>
                        <IconButton>
                            <Instagram  sx={{color: "purple"}}/>
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/dev-fabio-freitas/">
                            <LinkedIn sx={{color: "#0e76a8"}}/>
                        </IconButton>
                        <Typography>Contact Us</Typography>
                    </Box>
                    <Typography className="descretion" variant="h6" color="secondary">
                        Rua Estrada da Pedreira nº 316C, Bairro Barrocada - Itamonte - MG<br/>
                        © 2025 Fabio Freitas Diniz. Todos os direitos reservados.
                    </Typography>
                </Container>
            </Box>
        </StyledContainer>
    )
}

export default Footer;