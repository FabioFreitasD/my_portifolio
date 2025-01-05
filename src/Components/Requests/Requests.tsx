import { Card, Container, styled } from "@mui/material";
import { Box, Grid2, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Repository {
    id: number;
    name: string;
    html_url: string;
    language: string;
}

const StyledContainer = styled("section")(({theme}) => ({
    background: theme.palette.primary.main,
    textAlign: "center",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    '& .gridList': {
        display: 'flex',
        justifyContent: 'space-evelin',
        alignItems: 'center',
        paddingTop: "20px"
    },
    '& .itemLink': {
        display: 'block',
        backgroundColor: '#eeb15b',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        padding: '8px',
        marginBottom: '2px',
        marginTop: '2px'
    }
}))


const Request: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [falhaErro, setFalhaErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        fetch('https://api.github.com/users/fabiofreitasd/repos')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Erro ao buscar repositórios');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(e => {
                setEstaCarregando(false);
                setFalhaErro(true);
                console.error('Erro:', e);
            });
    }, []);

    return (
        
        <Box>
            <StyledContainer>
                {estaCarregando ? (
                    <Typography variant="h3" color="secondary">Carregando...</Typography>
                ) : falhaErro ? (
                    <Typography variant="h3" color="secondary">Erro ao carregar os repositórios</Typography>
                ) : (
                    <Container>
                        <Typography id="projects" variant="h3" color="secondary">Projects</Typography>
                        <Grid2 container spacing={2}>
                            {repos.map(({ id, name, language, html_url }) => (
                                <Grid2 key={id}  size={{xs:12, sm:6, md:4}} className="gridList">                              
                                    <ListItem key={id} className="listItem" >
                                        <Card sx={{ p:2, height:{xs: 'auto'}, width: {xs: 'auto', sm: 200, md: 300}, display: 'flex', flexDirection:'column', '& > *': {flexGrow: 1} }}>
                                            <div>
                                                <b>Nome:</b> {name}
                                            </div>
                                            <div>
                                                <b>Linguagem:</b> {language}
                                            </div>
                                            <a className="itemLink" target="_blank" href={html_url} rel="noopener noreferrer" >Visitar no Github</a>
                                        </Card>
                                    </ListItem>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Container>
                )}
            </StyledContainer>
        </Box>
    );
};

export default Request;
