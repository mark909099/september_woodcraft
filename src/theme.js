import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#4e342e',
        },
        secondary: {
            main: '#9e9e9e',
        },
        background: {
            default:'#eeeeee'
        },
    },
    typography: {
        fontFamily: "Tahoma, Arial",
        button: {
            textTransform: 'none',
        },
    },
    
})
