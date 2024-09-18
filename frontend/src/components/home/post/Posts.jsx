import { useEffect, useState, useMemo } from "react";
import { Grid, Box } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../../service/api";

// Components
import Post from "./Post";
import Loader from "../../loader/loader";

const Posts = ({ query }) => {
  const [posts, getPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        getPosts(response.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  const filteredBlogs = useMemo(() => {
    const lowerCaseQuery = query.toLowerCase();
    return posts.filter((post) => {
      return (
        post.description.toLowerCase().includes(lowerCaseQuery) ||
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.username.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }, [posts, query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container spacing={3}>
      {filteredBlogs.length ? (
        filteredBlogs.map((post) => (
          <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
          No data is available for the selected category
        </Box>
      )}
    </Grid>
  );
};

export default Posts;

