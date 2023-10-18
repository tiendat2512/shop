
import { Box, Divider, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import ImageGallery from 'react-image-gallery';
import Product from '../../../Home/Components/Product';

const images = [
  {
    original: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-6-1-1353699343.webp',
    thumbnail: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-6-1-1353699343.webp',
  },
  {
    original: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-5-1-980417998.webp',
    thumbnail: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-5-1-980417998.webp',
  },
  {
    original: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-2-1-2139046092.webp',
    thumbnail: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-2-1-2139046092.webp',
  },
  {
    original: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-3-1-4025460300.webp',
    thumbnail: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-3-1-4025460300.webp',
  },
  {
    original: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-1-1-364866829.webp',
    thumbnail: 'https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1920/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-1-1-364866829.webp',
  },
];


export default function ContentProduct() {
  return (
    <>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ marginLeft: '20px' }}>
            <ImageGallery items={images} infinite={true} showFullscreenButton={false} showPlayButton={false} slideDuration={4} useBrowserFullscreen={false} showNav={false} thumbnailPosition={'left'} disableThumbnailSwipe={true} originalHeight={'300vh'} />;
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
            <Typography variant='h4'>Men Shirt</Typography>
            <button style={{ width: '50px', height: '50px' }}><ArrowBackIcon /></button>
          </Box>
          <Divider />
          <Box sx={{ margin: '20px' }}>
            <Typography variant='h5'> $ 180.00</Typography>
            <Typography variant='h6'> SKU - Menshirt-01</Typography>
            <Typography variant='h6' sx={{ padding: '30px 0' }}> How to write product descriptions that sell One of the best things you can do to make your store successful is invest some time in writing great product descriptions. You want to provide detailed yet concise information that will entice potential customers to buy.</Typography>
            <Typography variant='h6'>Think like a consumer Think about what you as a consumer would want to know, then include those features in your description. For clothes: materials and fit. For food: ingredients and how it was prepared. Bullets are your friends when listing features.</Typography>
            <Box className='check-color' sx={{ display: 'flex', paddingTop: '30px', justifyContent: 'space-between' }}>
              <Typography variant='h6' component="div" style={{ display: 'flex', alignItems: "center" }}>Color</Typography>
              <div style={{ display: 'flex', alignItems: "center" }}>
                <input type="radio" className='check-color' />
                <Typography variant='h6'> red</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: "center" }}>
                <input type="radio" className='check-color' />
                <Typography variant='h6'> green</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: "center" }}>
                <input type="radio" className='check-color' />
                <Typography variant='h6'> white</Typography>
              </div>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
              <Typography variant='h6'>Size</Typography>
              <Box>
                <select style={{ width: '400px', height: '30px', transform: 'translateX(-170px)' }}>
                  <option value="">S</option>
                  <option value="">L</option>
                  <option value="">M</option>
                </select>
              </Box>
            </Box>'
            <div>
              <button>Add to cart </button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className='card-container'>
             <Typography variant='h3' sx={{marginTop:'50px'}}>Related products</Typography>

        </Grid>

        <Grid item xs={12} sm={6} md={3} className='card-container'>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='card-container'>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='card-container'>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className='card-container'>
          <Product />
        </Grid>
      </Grid>
        <Divider sx={{marginTop:'50px'}} />
































    </>
  )
}
