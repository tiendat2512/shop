import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import Overlay from './Overlay';
export default function LoginForm(props) {
    const closeLoginNOpenRegister = () => {
        props.closeLogin()
        props.openRegister()
    }
    return (
        <>
            {(props.isOpenLogin === true) ?
                <div>
                    <Overlay onClickEvent={props.closeLogin}/>
                    <div className="form-container">
                        <div className="btn-close">
                            <button onClick={props.closeLogin} ><CloseIcon /></button>
                        </div>
                        <Typography variant='h4'>Login</Typography>
                        <div className="text-field">
                            <input type="text" placeholder='Email address*' />
                            <br />
                            <input type="text" placeholder='password*' />
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='h7'>Remember me <input type="checkbox" /></Typography>

                                <Typography variant='h7'>Forgot your password ?</Typography>

                            </Box>
                        </div>
                        <div className="btn-login">
                            <button><Typography>Login</Typography></button>
                            <br />
                            <button onClick={closeLoginNOpenRegister}><Typography>Create New Account</Typography></button>
                        </div>
                    </div>
                </div>

                : ""}
        </>
    )
}
