import { Typography } from "@mui/material";
import  './style.css';

const Footer = () => {
    return <div id="footer">
        <Typography fontWeight={600} my={2}>Turn of the Light</Typography>
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