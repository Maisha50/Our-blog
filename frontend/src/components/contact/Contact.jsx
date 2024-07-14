import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Instagram, Email } from '@mui/icons-material';
import { styled } from '@mui/system';

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

const Contact = () => {
    return (
       <div>Contact page</div>
    );
};

export default Contact;
