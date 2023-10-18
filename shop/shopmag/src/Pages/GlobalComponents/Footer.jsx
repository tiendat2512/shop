import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { Footer } from '@govuk-react/footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function GlobalFooter() {
  return (
    <>
      <Box sx={{marginTop:'100px'}}>
        <Footer>
          <Footer.Navigation>
            <Grid container spacing={2} sx={{textAlign:{
                xs:'center',
                md:'unset '
                }}}>
              <Grid item xs={12} sm={6} md={3} >

                <Footer.Link >
                  <Typography variant='body1 h1'>Company</Typography>
                </Footer.Link>

                <ul>
                  <li>

                    <Footer.Link href="/">
                      <Typography variant='body2'>Privacy Policy</Typography>
                    </Footer.Link>
                  </li>
                  <li>
                    <Footer.Link href="/">
                      <Typography variant='body2'>Terms & Contidions</Typography>
                    </Footer.Link>
                  </li>
                  <li>
                    <Footer.Link href="/">
                      <Typography variant='body2'>Delivery And Returns</Typography>
                    </Footer.Link>
                  </li>
                  <li>
                    <Footer.Link href="/">
                      <Typography variant='body2'>Shipping Information</Typography>
                    </Footer.Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <Footer.Link >
                    <Typography variant='body1 h1'>Help</Typography>
                  </Footer.Link>
                </div>
                <ul>
                  <li>

                    <Footer.Link href="/">
                      <Typography variant='body2'>Privacy Policy</Typography>
                    </Footer.Link>
                  </li>
                  <li>
                    <Footer.Link href="/">
                      <Typography variant='body2'>Terms & Contidions</Typography>
                    </Footer.Link>
                  </li>
                  <li>
                    <Footer.Link href="/">
                      <Typography variant='body2'>Delivery And Returns</Typography>
                    </Footer.Link>
                  </li>
                  <li>
                    <Footer.Link href="/">
                      <Typography variant='body2'>Shipping Information</Typography>
                    </Footer.Link>
                  </li>
                </ul>


              </Grid>
              <Grid item xs={12} sm={12} md={3} sx={{padding:'30px'
              }}>
                <div>
                  <Footer.Link >
                    <Typography variant='body2'>Follow Us</Typography>
                  </Footer.Link>
                </div>
                <div>
                  <Footer.Link href="/">
                    <Typography variant='body2' sx={{ paddingTop: '20px' }}>And get Free Shipping on all your orders!</Typography>
                  </Footer.Link>
                </div>
                <div className='socialbtn-group'>

                  <Footer.Link href="/">
                    <Typography ><FacebookIcon /> </Typography>
                  </Footer.Link>
                  <Footer.Link href="/">
                    <Typography ><TwitterIcon /> </Typography>
                  </Footer.Link>
                  <Footer.Link href="/">
                    <Typography ><PinterestIcon /> </Typography>
                  </Footer.Link>
                </div>

              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <div>
                  <Footer.Link >
                    Sign up now & get 10% off
                  </Footer.Link>
                </div>
                <div>
                  <Footer.Link  >
                    <Typography variant='body2' sx={{ paddingTop: '10px' }}>Be the first to know about our new arrivals and exclusive offers.</Typography>
                  </Footer.Link>
                </div>

                <div>
                  <input placeholder='your email address' style={{ height: '30px' }} type="text" />
                </div>

                <div >
                  <Footer.Link >
                   <button style={{backgroundColor:'black',color:'white',height:'30px',cursor:'pointer'}}>SUBSCRIBE</button>
                  </Footer.Link>
                </div>

              </Grid>




            </Grid>
          </Footer.Navigation>
        </Footer>
      </Box>
    </>
  )
}

