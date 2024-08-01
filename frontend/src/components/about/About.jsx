
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;


const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h2">BLOG NEST</Typography>
                <Text variant="h5">Welcome to Blog Nest, your ultimate online sanctuary for thoughtful insights, engaging stories, and diverse perspectives.

At Blog Nest, we believe that every story has the power to inspire, inform, and transform. Our mission is to create a space where readers can find a wide range of articles that not only entertain but also provide valuable knowledge and fresh viewpoints.
            <br />
            Thank you for visiting Blog Nest. We look forward to sharing this journey with you!
    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/zinku053" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/_zinnnnnku_53?igsh=MWRjNW5uMWRvYXVrZg==" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:adnanzihan14@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;