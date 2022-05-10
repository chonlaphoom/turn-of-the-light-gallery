import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header:React.FC = () => {

    return <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'end', margin:'1rem 0 1rem 0' }}>
        <Link style={{textDecoration: 'none'}} to={'/gallery'}>
            <Typography 
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
    </div>
}

export default Header;