import { Grid } from '@mui/material';

// Components
import Banner from '../banner/Banner';
import Categories from '../home/categories';
import Posts from './post/Posts';

const Home = () => {
    return (
        <>
            <Banner />
            <Grid container spacing={2}>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid item xs={12} sm={10} lg={10}>
                    <Posts /> {/* Add Posts component here */}
                </Grid>
            </Grid>
        </>
    );
};

export default Home;