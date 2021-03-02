import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, InputBase } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useLocation } from 'react-router-dom';


import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();

    return(
        <>
        <AppBar position="fixed" className="classes.appBar" color="inherit">
            <Toolbar>
                <Typography varient='h6' className="classes.title" color="inherit">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Magnolia_sieboldii_flower_1.jpg/220px-Magnolia_sieboldii_flower_1.jpg' alt= "Hi" height="25px" className={classes.image}/>
                    Magnolia
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                </div>

                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="Show Cart Items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}



export default Navbar;