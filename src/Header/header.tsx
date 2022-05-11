import { Box, Container, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import './style.css';

const Header:React.FC = () => {
    const location = useLocation();
    const gallerySelected = location.pathname === '/' || location.pathname.toLocaleLowerCase().includes('/gallery');
    const aboutSelected = location.pathname.toLocaleLowerCase().includes('/about');

    return <Container maxWidth="xl">
    <Box sx={{backgroundColor: 'white', display: 'flex', justifyContent: 'end', margin:'1rem 0 1rem 0'}}>
        <Link style={{textDecoration: 'none'}} to={'/gallery'}>
            <Typography 
                className={gallerySelected?'underline':''}
                sx={{ cursor: 'pointer' }} 
                noWrap 
                color={'black'} 
                variant="h6" 
                component="div" 
                marginY={2} 
                marginX={2}>
                    Gallery
            </Typography>
        </Link>
        <Link style={{textDecoration: 'none'}}  to={'/about'}>
            <Typography
                className={aboutSelected?'underline':''}
                sx={{ cursor: 'pointer' }} 
                noWrap 
                color={'black'} 
                variant="h6" 
                component="div" 
                marginY={2} 
                marginX={2}>
                    About
            </Typography>
        </Link>
        </Box>
    </Container>
}

export default Header;