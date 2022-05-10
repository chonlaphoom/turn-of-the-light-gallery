import { Typography } from "@mui/material";
import  './style.css';

const Footer = () => {
    return <div id="footer">
        <Typography fontWeight={600} my={2}>
            <img src="https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif" width={50} height={50}/>
        </Typography>
        <Typography 
            className="highlight"
            noWrap
            onClick={()=> { window.location.href = `https://www.instagram.com/ohmallstars/`; }}
            component="span"
            style={{cursor:'pointer'}}
            mx={2} 
            fontWeight={600}
        >
                @ohmallstars
        </Typography>
        <Typography 
            className="highlight"
            noWrap
            onClick={()=> { window.location.href = `https://www.instagram.com/vittchanon/`; }}
            component="span"
            style={{cursor:'pointer'}}
            mx={2}
            fontWeight={600}
        >
                @vittchanon
        </Typography>
        <Typography fontWeight={600} my={2}>@2022 Copyright: chonlaphoom All Rights Reserved</Typography>
    </div>
}

export default Footer;