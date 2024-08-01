import React from 'react';
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)(({ theme }) => ({
    width: '100%',
    background: `url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center/55% repeat-x #000`,
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Heading = styled(Typography)(({ theme }) => ({
    fontSize: '70px',
    color: '#FFFFFF',
    lineHeight: 1,
}));

const SubHeading = styled(Typography)(({ theme }) => ({
    fontSize: '20px',
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(1), // Adding some padding for better readability
}));

const Banner = () => {
    return (
        <Image>
            <Heading variant="h1">BLOG</Heading>
            <SubHeading variant="subtitle1">Blog Nest</SubHeading>
        </Image>
    );
};

export default Banner;
