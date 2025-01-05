import { Container, Grid2, styled, Typography } from "@mui/material";
import SlideAbout from "../../../../Components/SlideAbout/SlideAbout";


const StyledAbout = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
    paddingBottom: "40px",

    [theme.breakpoints.up('xs')]: {
        paddingTop: "50px",
        maxHeight: "300px",
        overflowY: "auto",
        paddingLeft: "10px",
        paddingRight:"10px",
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: "0px", 
        maxHeight: "none", 
        overflowY: "visible", 
        paddingLeft: "0px", 
        paddingRight: "0px",
    }

})) 

const About = () => {
    return(
        <StyledAbout>
            <Container maxWidth='lg'>
                <Grid2 size = {{md: 12}}>
                    <Typography id="about" variant="h3" fontSize={'24px'} color={'secondary'} gutterBottom>
                        About-me
                    </Typography>
                    <SlideAbout />
                </Grid2>
            </Container>
        </StyledAbout>
    )
}

export default About;