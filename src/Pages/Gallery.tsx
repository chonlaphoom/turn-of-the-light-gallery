import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import { IMAGES } from "../Data/gallery"
import { ImageBoxProps } from "../Interfaces/Image"

const CoverSection = () => {
    return <div style={{ textAlign: 'end', backgroundColor: 'black', height: '450px', margin: '1rem 0 4rem 0' }}>
        <Container maxWidth="lg">
            <img style={{ textAlign: 'end' }} src='/gallery/IMG_0286.JPG' width={300} height={450} />
        </Container>
    </div>
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageUrl, title, description }) => {
    return <Grid item xs="auto">
        <Paper elevation={3}>
            <img src={imageUrl} width={300} height={300} />
        </Paper>
        <Typography sx={{ cursor: 'pointer' }} marginTop={2} align='left' color='black' variant='h6'>{title}</Typography>
        <p style={{ overflow: "hidden", textOverflow: "ellipsis", width: "300px", textAlign: 'start', color: 'black' }} >{description}</p>
    </Grid>
}

const GalleryPage = () => <div style={{ marginBottom: '250px' }}>
    <CoverSection />
    <Container maxWidth="lg">
        <Grid container spacing={10} direction="row" justifyContent="center">
            {IMAGES.map((image, index) => <ImageBox {...image} />)}
        </Grid>
    </Container>
</div>

export default GalleryPage;