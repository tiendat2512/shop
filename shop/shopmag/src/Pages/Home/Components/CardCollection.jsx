import { Grid, Button, Box } from '@mui/material'
import React from 'react'

export default function CardCollection() {
    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '50px' }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='card-collection-col'>
                <Box className='card-collection-col-prop' sx={{ position: 'relative', width:'100%', height:'100%', }}>
                    <img className='card-collection-img' src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1800/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-6-1-1150522327.webp " alt="" />
                    <Button style={{ position: 'absolute', bottom: 50, right: '30px', color:'black',backgroundColor:'white',border:'1px solid black'}}>New Arrivals</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}  className='card-collection-col' sx={{ position: 'relative' }}>
                <Box className='card-collection-col-prop' sx={{ position: 'relative', width:'100%', height:'100%'}}>
                    <img className='card-collection-img' src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1800/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-6-1-1150522327.webp"  alt="" />
                    <Button style={{ position: 'absolute', bottom: 50, right: '50%',transform:'translateX(50%)', color:'black',backgroundColor:'white',border:'1px solid black'}}>Women collection</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3} className='card-collection-col' sx={{ position: 'relative' }}>
                <Box className='card-collection-col-prop' sx={{ position: 'relative', width:'100%', height:'100%'}}>
                    <img className='card-collection-img' src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-274f354b-e795-41d4-9b4f-7f7684100cf7-1-2372155925.webp" alt="" />
                    <Button style={{ position: 'absolute', bottom: 50, right: '50%',transform:'translateX(50%)', color:'black',backgroundColor:'white',border:'1px solid black'}}>Men collection</Button>
                </Box>
            </Grid>
        </Grid>

    )
}
