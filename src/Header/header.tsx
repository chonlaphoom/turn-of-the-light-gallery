import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return <div style={{backgroundColor:'white', display:'flex', justifyContent:'end'}}>
            <Typography sx={{cursor:'pointer'}} noWrap color={'black'} variant="h6" component="div" marginY={2} marginX={2}>About</Typography>
            <Typography sx={{cursor:'pointer'}} noWrap color={'black'} variant="h6" component="div" marginY={2} marginX={2}>Room</Typography>
    </div>
}

export default Header;