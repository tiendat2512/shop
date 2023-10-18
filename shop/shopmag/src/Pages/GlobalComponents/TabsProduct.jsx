import { Box, Typography } from '@mui/material'
import Overlay from './Overlay';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export default function TabsProduct(props) {

  return (
    <>
      {(props.isOpen === true) ?
      <Box>

        <Overlay onClickEvent={props.isClose}/>
      <Box sx={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: 'lightgrey', zIndex: '120', padding: '20px' }}>
        <button onClick={props.isClose}>X</button>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box className="left-content dp-flex">
            <div style={{ objectFit: 'cover', width: '80px', height: '100px' }}>
              <img style={{ width: '100%', height: '100%' }} src="https://templates.microweber.com/shopmag/userfiles/cache/thumbnails/1800/tn-ce2dac27-ba78-4e19-977f-db2fa5d47a77-6-1-1150522327.webp " alt="" />
            </div>
            <Typography> Men shirt</Typography>
          </Box>
          <Box className=" dp-flex" sx={{ marginLeft: '100px' }}>
            <Typography> $180.000</Typography>
            <input type="number" /><DeleteIcon />

          </Box>
        </Box>
        <Box className=" dp-flex" >

          <Box >
            <Typography>Enter Coupon Code</Typography>
            <input type="text" />
            <button>Apply</button>
          </Box>
          <Box >
            <Typography>Total amount</Typography>
            <Typography>Subtotal: $ 180.00</Typography>
            <Typography>Tax: $ 36.00</Typography>
            <Typography>Total:$ 216.00</Typography>

          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

          <button>Continue Shopping</button>
          <button>Process checkout</button>
        </Box>





      </Box>

      </Box>



        : ""}




    </>
  )
}
