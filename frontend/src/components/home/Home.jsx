import { Grid } from '@mui/material';
import { useState,useEffect ,useMemo} from 'react';

// Components
import Banner from '../banner/Banner';
import Categories from '../home/categories';
import Posts from './post/Posts';

const Home = () => {
    const [query, setQuery] = useState("");
    return (

        <>
            <Banner />
            <Grid container spacing={2}>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid item xs={12} sm={10} lg={10}>
                <div className="SearchBar">
            <input
              type="text"
              placeholder="Search"
              className="search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Posts query={query} />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;