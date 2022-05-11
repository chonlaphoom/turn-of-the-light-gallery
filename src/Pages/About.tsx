import { Box, Container, Grid, Typography } from "@mui/material";


const AboutDrawer = () => {
    return <Grid container spacing={3}>
    <Grid item sm={6} textAlign="left">
        <div>
            <img src="https://media.giphy.com/media/o4OxHgVp2dDL3LyFsC/giphy.gif" height={500} />
        </div>
    </Grid>
    <Grid item sm={6}>
        <Typography align="left" my={2} variant="h4">
            About The Concepts
        </Typography>
        <Typography paragraph align="left">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam facilisis sit amet felis at interdum.
            Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut.
            Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper.
            Etiam ut finibus lorem
        </Typography>
    </Grid>
    </Grid>;
}

const AboutConcept = () => {
    return <Grid container spacing={3}>
    <Grid item sm={6} alignSelf={'center'}>
        <Typography align="left" my={2} variant="h4">
            About The Artist
        </Typography>
        <Typography paragraph align="left">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam facilisis sit amet felis at interdum.
            Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut.
            Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper.
            Etiam ut finibus lorem
        </Typography>
    </Grid>
    <Grid item sm={6} textAlign="right">
        <img src="https://media.giphy.com/media/2xu5zpSV3oqKcCSZ49/giphy.gif" height={500} />
    </Grid>
    </Grid>;
}

const AboutPage = () => {
    return <Container maxWidth='md'>
        <AboutDrawer />
        <AboutConcept />
    </Container>
}

export default AboutPage;