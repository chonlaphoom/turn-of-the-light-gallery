import { Box, Container, Typography } from "@mui/material";

const AboutDrawer = () => {
    return <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0 20px 0' }}>
        <div>
            <img src="https://media.giphy.com/media/o4OxHgVp2dDL3LyFsC/giphy.gif" height={500} />
        </div>
        <div style={{ alignSelf: 'center', margin: '0 0 0 50px', overflow: "hidden", textOverflow: "ellipsis", width: "400px", textAlign: 'start', color: 'black' }}>
            <Typography my={2} variant="h4">About The Concepts</Typography>
            <span>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam facilisis sit amet felis at interdum.
                Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut.
                Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper.
                Etiam ut finibus lorem
            </span>
        </div>
    </Box>;
}

const AboutConcept = () => {
    return <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0 20px 0' }}>
        <div style={{ alignSelf: 'center', margin: '0 50px 0 0', overflow: "hidden", textOverflow: "ellipsis", width: "400px", textAlign: 'start', color: 'black' }}>
            <Typography my={2} variant="h4">About The Artist</Typography>
            <span>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam facilisis sit amet felis at interdum.
                Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut.
                Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper.
                Etiam ut finibus lorem
            </span>
        </div>
        <div>
            <img src="https://media.giphy.com/media/2xu5zpSV3oqKcCSZ49/giphy.gif" height={500} />
        </div>
    </Box>;
}

const AboutPage = () => {
    return <Container maxWidth='lg'>
        <AboutDrawer />
        <AboutConcept />
    </Container>
}

export default AboutPage;