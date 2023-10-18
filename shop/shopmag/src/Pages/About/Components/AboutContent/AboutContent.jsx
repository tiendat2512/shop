
import { Box, Container, Typography, Divider, Grid, colors } from '@mui/material'
import React from 'react'

export default function AboutContent() {
    return (

        <>
            <Box sx={{ padding: '0 120px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img style={{
                                width: "100%",
                                height: 'auto'
                            }}
                                src="https://templates.microweber.com/shopmag/userfiles/templates/shopmag/assets/images/about-skin-1.jpg" alt="" />
                            <Box>
                                <Box>
                                    <Typography>John Doe</Typography>
                                    <Typography>Position</Typography>
                                </Box>
                               <button></button>
                                    
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} >
                        <Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='h2' sx={{ padding: ' 0 50px ' }}>09 </Typography>
                                <Divider />
                                <Typography sx={{ opacity: '70%', padding: '20px' }}> YEARS EXPERIENCE WORKING</Typography>
                            </Box>
                            <Box>
                                <Typography className='Text-Content' variant='h5' > Lusion providing rare & beautiful items sourced both locally & globally</Typography>
                                <Typography className='Text-Content'>We have worked hand-in-hand with a large scale of customers all over the world accomplishing a wide range of industries and services for 10+ years. Each of our work represents our dedication to the quality.</Typography>
                                <Typography className='Text-Content'>Please browse through our case studies to see the difference we can bring to your business..</Typography>
                                <Typography className='Text-Content'>Our comprehensive experience is the key to give our Clients best services.</Typography>
                                <button style={{
                                    marginTop: '30px',
                                    cursor: 'pointer',
                                    backgroundColor: 'white',
                                    width: '150px',
                                    height: '50px',

                                }}><Typography> CONTACT US</Typography></button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <div style={{ backgroundColor: '#2c2c2c', marginTop: '30px', }}>
                <Typography variant='h4' sx={{ textAlign: 'center', color: 'white' }}> Responsible and sustainable development</Typography>
                <Box sx={{ margin: '50px' }}>
                    <Grid container rowSpacing={1}>
                        <Grid item xs={12} sm={4} md={4} sx={{ padding: '20px' }}>
                            <Box sx={{ backgroundColor: 'white', padding: '40px 20px' }}>
                                <Typography variant='h6'> Our Vision</Typography>
                                <ul >

                                    <li>Good Service</li>
                                    <li>For Community</li>
                                    <li>Long Term Development</li>
                                    <li>Save Our Planet</li>
                                    <li>Help People</li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} sx={{ padding: '20px' }}>
                            <Box sx={{ backgroundColor: 'white', padding: '40px 20px' }}>
                                <Typography variant='h6'> Our Vision</Typography>
                                <ul >

                                    <li>Good Service</li>
                                    <li>For Community</li>
                                    <li>Long Term Development</li>
                                    <li>Save Our Planet</li>
                                    <li>Help People</li>
                                </ul>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={4} md={4} sx={{ padding: '20px' }}>
                            <Box sx={{ backgroundColor: 'white', padding: '40px 20px' }}>
                                <Typography variant='h6'> Our Vision</Typography>
                                <ul >
                                    <li>Good Service</li>
                                    <li>For Community</li>
                                    <li>Long Term Development</li>
                                    <li>Save Our Planet</li>
                                    <li>Help People</li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <div style={{ textAlign: 'center' }}><Typography variant='h3'>The Leader Board Of Our Company</Typography></div>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={4} md={3}>
                    <Box>
                        <img style={{
                            width: "100%",
                            height: 'auto'
                        }}
                            src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/500/tn-banner-minipage2-540x-1-2802140076.webp" alt="" />

                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Box>
                        <img style={{
                            width: "100%",
                            height: 'auto'
                        }}
                            src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/500/tn-banner-minipage2-540x-1-2802140076.webp" alt="" />

                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Box>
                        <img style={{
                            width: "100%",
                            height: 'auto'
                        }}
                            src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/500/tn-banner-minipage2-540x-1-2802140076.webp" alt="" />

                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Box>
                        <img style={{
                            width: "100%",
                            height: 'auto'
                        }}
                            src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/500/tn-banner-minipage2-540x-1-2802140076.webp" alt="" />

                    </Box>
                </Grid>
            </Grid>







        </ >


    )
}
