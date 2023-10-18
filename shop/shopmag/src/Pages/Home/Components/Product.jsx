import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Overlay from '../../GlobalComponents/Overlay';
import TabsProduct from '../../GlobalComponents/TabsProduct';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Product() {
    const [isOpenCard, setisOpenCard] = useState(false)

    const handleToggleCard = () => setisOpenCard(!isOpenCard)

    return (
        <>

            <Box sx={{ width: '100%', height: "100%"}}>

                <Card sx={{ width: '100%', height: "100%"}}>
                    <Box sx={{ position: "relative", width: "100%", height: "400px" }} className='container-card'>
                        < Link to="/product-details" style={{ textDecoration: 'none', color: 'black' }}>
                            <CardMedia
                                sx={{ height: '100%' }}
                                image="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1800/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-6-1-1150522327.webp "
                                title="ao he"
                            />
                        </Link >


                        <CardActions sx={{ position: 'absolute', bottom: 0, right: 0 }}>
                            <Button size="small" sx={{ color: "black" }} className='card-btn' onClick={handleToggleCard}><ShoppingCartIcon /></Button>

                            < Link to="/product-details" style={{ textDecoration: 'none', color: 'black' }}>
                                <Button size="small" sx={{ color: "black", border: 'box' }} className='card-btn' ><RemoveRedEyeIcon /></Button>
                            </Link >
                        </CardActions>
                    </Box>
                    <CardContent>
                        < Link to="/product-details" style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant="body2" color="text.secondary">
                                Áo mùa hè
                            </Typography>
                        </Link >
                        <Typography gutterBottom variant="h5" component="div">
                            700.000VND
                        </Typography>
                    </CardContent>

                </Card>

                <TabsProduct isOpen={isOpenCard} isClose={handleToggleCard} />
            </Box>


        </>

    )
}
