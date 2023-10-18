import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import React from 'react'
import Product from '../../../Home/Components/Product';
import TabsProduct from '../../../GlobalComponents/TabsProduct';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function CatalogContent() {
    return (
        <>
            <TabsProduct />
            <Box sx={{
                display: {
                    xs: 'block',
                    md: 'none'
                }
            }}>
                <button style={{ width: '90%', height: 'auto', marginLeft: '5%',marginBottom:'30px' }}><FilterAltIcon /></button>
            </Box>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} >
                <Grid item xs={12} sm={4} md={3} sx={{display:{
                    xs:'none',
                    md:'block'
                }}}>
                    <Typography variant='h5'>Search </Typography>

                    <Divider />
                    <div className='search-btngrp' style={{ display: 'flex', margin: '10px 0' }}>
                        <span>
                            <input type="text" style={{ height: '31px' }} />

                        </span>
                        <span>
                            <button ><ManageSearchIcon /></button>

                        </span>

                    </div>
                    <div className='search-list' >

                        <Typography variant='h5'>Categories</Typography>
                        <Divider />
                        <ul >
                            <Typography>Men</Typography>
                            <li ><Typography>Shirts</Typography></li>
                            <li><Typography>Shoes</Typography></li>
                            <li><Typography>T-Shirts</Typography>
                                <ul >
                                    <li ><Typography>Blue T-Shirts</Typography></li>
                                </ul>
                            </li>

                        </ul>
                        <ul>
                            <Typography>Women</Typography>
                            <li><Typography>Clothes</Typography></li>
                            <li><Typography>Jackets</Typography>
                                <ul>
                                    <li ><Typography>Jacket</Typography></li>
                                </ul>
                            </li>
                            <li><Typography>Shoes</Typography>
                                <ul>
                                    <li ><Typography>New Shoes</Typography></li>
                                </ul>
                            </li>
                            <li><Typography>T-Shirts</Typography></li>
                            <li><Typography>Bags</Typography></li>

                        </ul>
                    </div>
                    <Divider />
                    <div> <Typography variant='h5'>Tag</Typography></div>
                </Grid>

                <Grid item xs={12} sm={8} md={9} >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} >
                        <Grid item xs={12} sm={12} md={12} className='card-container'>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <div>

                                    <Typography>Displaying 10 of 10 results.</Typography>
                                </div>
                                <div>

                                    <Box sx={{ display: 'flex' }}>
                                        <Typography >Limit</Typography>


                                        <select style={{ WebkitAppearance: 'none', MozAppearance: 'none', width: '100px', height: '50px', transform: 'translateY(-12px)' }}>
                                            <option >Select</option>
                                            <option >6</option>
                                            <option >7</option>
                                            <option >8</option>
                                            <option >9</option>
                                            <option >10</option>
                                        </select>
                                        <Typography >Sort</Typography>
                                        <select style={{ WebkitAppearance: 'none', MozAppearance: 'none', width: '100px', height: '50px', transform: 'translateY(-12px)' }}  >
                                            <option >Select</option>
                                            <option >Product New</option>
                                            <option >Product Old</option>

                                        </select>
                                    </Box>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>


                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} className='card-container'>
                            <Product />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>










        </>
    )
}
