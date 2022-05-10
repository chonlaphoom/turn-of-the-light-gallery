import { Box, Container, Grid, Paper, Typography } from "@mui/material"

interface ImageBoxProps {
    imageUrl: string,
    title: string,
    description?: string
}

const IMAGES: ImageBoxProps[] = [
    {
        imageUrl: "/gallery/IMG_0286.JPG",
        title: '001',
        description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
         Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
         Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
         Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0287.JPG",
        title: '002',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0288.JPG",
        title: '003',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0289.JPG",
        title: '004',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0290.JPG",
        title: '005',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0291.JPG",
        title: '006',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0292.JPG",
        title: '007',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0293.JPG",
        title: '008',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0294.JPG",
        title: '009',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0295.JPG",
        title: '010',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0296.JPG",
        title: '011',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    },
    {
        imageUrl: "/gallery/IMG_0297.JPG",
        title: '012',
        description: `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam facilisis sit amet felis at interdum. 
        Aliquam ut scelerisque augue. Phasellus feugiat nisl diam, eu tempus diam dictum ut. 
        Quisque volutpat felis erat, vitae tincidunt sapien commodo quis. Curabitur commodo pretium semper. 
        Etiam ut finibus lorem`
    }
]

const CoverSection = () => {
    return <div style={{ backgroundColor: 'black', height: '450px', margin: '1rem 0 4rem 0' }}></div>
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageUrl, title, description }) => {
    return <Grid item xs="auto">
        <Paper elevation={3}>
            <img src={imageUrl} width={300} height={300} />
        </Paper>
        <Typography sx={{ cursor: 'pointer' }} align='left' color='black' variant='h6'>{title}</Typography>
        <p style={{ overflow: "hidden", textOverflow: "ellipsis", width: "300px", textAlign: 'start', color: 'black' }} >{description}</p>
    </Grid>
}

const GalleryPage = () => {
    return <div style={{ marginBottom: '250px' }}>
        <CoverSection />
        <Container maxWidth="lg">
            <Grid container spacing={10} direction="row" justifyContent="center">
                {
                    IMAGES.map((image, index) => <ImageBox {...image} />)
                }
            </Grid>
        </Container>
    </div>;
}

export default GalleryPage;