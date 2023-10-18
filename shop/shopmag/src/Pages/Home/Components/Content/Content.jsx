import { Box, Button, ButtonGroup, Container, Grid } from '@mui/material'
import React from 'react'
import CardCollection from '../CardCollection'
import Product from '../Product'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    link
} from "react-router-dom";
export default function Content() {
    return (
        <>
            <Box sx={{ padding: '50px' }}>
                <CardCollection />
            </Box>
            <Container fixed>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} className='card-container'>
                        <Product />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
