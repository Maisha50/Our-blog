import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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
            <Banner />
            <Wrapper>
                <Typography variant="h3">BLOG NEST</Typography>
                <Text variant="h5">
                Welcome to Our Blog Website – 
                a vibrant space where stories come to life, ideas ignite, and inspiration thrives. We're passionate about creating a community where readers and writers can connect, share, and grow together.Here is our github{' '}
                    <Link href="https://github.com/zinku053" color="inherit" target="_blank">
                        <GitHub />
                    </Link>.
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have a chat? Reach out to me on{' '}
                    <Link href="https://www.instagram.com/_zinnnnnku_53?igsh=MWRjNW5uMWRvYXVrZg==" color="inherit" target="_blank">
                        <Instagram />
                    </Link>{' '}
                    or send me an Email{' '}
                    <Link href="mailto:adnanzihan14@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
};

export default About;