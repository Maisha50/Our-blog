import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';

// Components
import Post from './Post';
import Loader from '../../loader/loader';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            setLoading(true); // Set loading to true before fetching
            let response = await API.getAllPosts({ category: category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
            setLoading(false); // Set loading to false after fetching
        }
        fetchData();
    }, [category]);

    if (loading) {
        return <Loader />; // Render loader while data is being fetched
    }

    return (
        <Grid container spacing={3}>
            {posts.length ? posts.map(post => (
                <Grid item lg={3} sm={4} xs={12} key={post._id}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                        <Post post={post} />
                    </Link>
                </Grid>
            )) : (
                <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
                    No data is available for the selected category
                </Box>
            )}
        </Grid>
    );
}

export default Posts;
