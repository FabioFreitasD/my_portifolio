import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let Theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});

Theme = responsiveFontSizes(Theme)

export default Theme;
