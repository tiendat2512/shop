import { Box, Button, Divider, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { slide as Menu } from 'react-burger-menu'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



export default function StickyNav() {
    const [isOpenLogin, setIsOpenLogin] = useState(false)
    const [isOpenRegister, setisOpenRegister] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


    const handleOpenLogin = () => {
        setIsOpenLogin(!isOpenLogin)

    }


    const handleOpenRegister = () => {
        console.log(124);
        setisOpenRegister(!isOpenRegister)

        console.log(isOpenRegister);


    }
    const handleOpen = () => {
        setIsOpen(!isOpen)

    }






    let count = 50;
    return (

        <>
            <Menu >
                <Typography variant='h5' sx={{ color: "black" }}>Shopmag</Typography>

                <a id="home" className="menu-item" href="/" style={{ color: 'black' }}>Home</a>

                <a id="about" className="menu-item" href="/about" style={{ color: 'black' }}>About</a>
                <a id="contact" className="menu-item" href="/contact" style={{ color: 'black' }}>Contact</a>
                    <a id="shop" className="menu-item " href="/catalog" style={{ color: 'black', textDecoration: 'none' }}>Shop<ArrowDropDownIcon /></a>
                <Box >
                    <ul className=" item-shop">
                        <li>
                            <a id="shop" className=" item-shop" href="/catalog" >Men</a>
                        </li>
                        <li>
                            <a id="shop" className=" item-shop" href="/catalog" >Women</a>
                        </li>

                    </ul>

                </Box>

            </Menu>
            <Box className="sticky-nav" sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: "white", zIndex: "100" }}>
                <Box component="ul" className='sticky-container' sx={{ alignItems: 'center' }}>

                    <div className="logo" >
                        <Typography variant='h5' sx={{
                            display: {
                                xs: 'none',
                                md: 'block',

                            }
                        }} >ShopMag</Typography>
                    </div>
                    <Box sx={{
                        display: {

                            xs: 'none',
                            sm: 'none',
                            md: 'block'

                        }
                    }}>

                        <Box className='menu-center' >
                            <Typography className="menu-item" variant='h5' >
                                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                    Home
                                </Link>
                            </Typography>
                            <Typography className="menu-item  shop-item" variant='h5'  ><Link to='/catalog' style={{ textDecoration: 'none', color: 'black' }}>Shop</Link> <ArrowDropDownIcon />
                                <Box className="hidden" sx={{ backgroundColor: 'white', cursor: 'pointer' }}>
                                    <List component="nav" aria-label="mailbox folders" className="menu-item" >
                                        <ListItem >
                                            <Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>
                                                <ListItemText primary="Men" />
                                            </Link>
                                        </ListItem>
                                        <Divider />

                                        <Divider light />
                                        <ListItem >
                                            <Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>
                                                <ListItemText primary="Women" />
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Typography>
                            <Typography variant='h5' className="menu-item"><Link to="/About" style={{ textDecoration: 'none', color: 'black' }}>About</Link></Typography>
                            <Typography variant='h5' className="menu-item" >Contact</Typography>
                        </Box>
                    </Box>
                    <div>
                        <button onClick={handleOpen} style={{ padding: '10px 20px', position: 'relative' }}>Log in</button>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={count} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </div>

                    <div className={`group-function ${(isOpen === true) ? "group-function-open" : ""}`} style={{ position: 'absolute', transform: 'translate(1510px,50px)', transition: '.6s' }} >
                        <div>

                            <Button variant="contained" onClick={handleOpenLogin} className='btn-login' sx={{
                                padding: "3px 9px",
                                backgroundColor: "#000000",
                                color: "#ffffff",
                                borderRadius: '0',
                                padding: '0 30px',

                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#000000',
                                    border: "1px solid black",
                                    boxShadow: 'none !important',
                                }
                            }}>
                                <Typography variant='h5' sx={{ fontSize: '1.5rem', textTransform: 'none' }} fontWeight={100}>Login</Typography>
                            </Button>
                        </div>
                        <div>

                            <Button variant="contained" onClick={handleOpenRegister} className='btn-login' sx={{
                                padding: "3px 9px",
                                backgroundColor: "#000000",
                                color: "#ffffff",
                                borderRadius: '0',
                                padding: '0 10px',
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#000000',
                                    border: "1px solid black",
                                    boxShadow: 'none !important',
                                }
                            }}>
                                <Typography variant='h5' sx={{ fontSize: '1.5rem', textTransform: 'none' }} fontWeight={100}>Register</Typography>
                            </Button>
                        </div>



                    </div>

                </Box>
            </Box>
            <LoginForm isOpenLogin={isOpenLogin} closeLogin={handleOpenLogin} openRegister={handleOpenRegister} />
            <RegisterForm isOpenRegister={isOpenRegister} closeRegister={handleOpenRegister} openLogin={handleOpenLogin} />

            <div style={{ marginBottom: '100px' }}></div>

        </>
    )
}
