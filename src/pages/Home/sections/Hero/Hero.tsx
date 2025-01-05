import { Box, Container, Grid2, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../Components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../Components/AnimatedBackground/AnimatedBackground";


const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')] : {    // <= mobile
            paddingTop: "100px",
            height: "100vh",
            paddingBottom: "80px",
        },
        [theme.breakpoints.up('md')] : {    // >= mobile
            paddingTop: "0",
            height: "100vh",
            paddinBottom: "0"
        }
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "60%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.primary.contrastText}`
    }))

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/my_curriculo.pdf';
        link.download = 'my_curriculo.pdf';
        link.click();
    }   
    
    const handleContactMe = () => {
        window.location.href = 'mailto:fabiofreitasdiniz365@gmail.com?subject=Contato&body=Olá, Fabio!';
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg"> 
                    <Grid2 container spacing={2}>
                        <Grid2 size = {{ xs:12, md:5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} alt={Avatar} />
                                </Box>
                            </Box>
                        </Grid2>
                        <Grid2 size = {{ xs:12, md:7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Fabio Freitas</Typography>
                            <Typography color="secondary" variant="h2" textAlign="center">I'm a Developer Front-End</Typography>
                            <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid2 size = {{ xs:12, md:4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleDownload}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid2>
                                <Grid2 size = {{ xs:12, md:4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleContactMe}> 
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero;
