import { Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import Overlay from './Overlay';

export default function RegisterForm({ isOpenRegister, closeRegister,openLogin  }) {
  const closeRegisterNopenLogin =() =>{
      closeRegister()
      openLogin()


  }

  return (
    <>
      {(isOpenRegister === true) ?
        <div>
          <Overlay onClickEvent={closeRegister} />
          <div className="form-container">
          <button onClick={closeRegisterNopenLogin}>{`<`}</button>
            <div className="btn-close">
              <button onClick={closeRegister}><CloseIcon /></button>
            </div>
            <Typography variant='h4'>Register</Typography>
            <Box>
              <input type="text" placeholder='Email' />
              <br />
              <input type="text" placeholder='Password' />
              <br />


              <Typography >2345 <input type=" number" placeholder='security code' /></Typography>

            </Box>
            <Box>
              <button>Register</button>
              <br />
              <button >Login</button>
            </Box>

          </div >
        </div>
    : "" }
      
          
          




      

    </>
  )
}


