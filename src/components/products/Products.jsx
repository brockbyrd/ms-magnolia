import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    {id:1, name: 'Hat', description: 'To look cool.', price:'$55', image:'https://img.hatshopping.com/Green-Classic-Tyrolean-Hat.44013_pf174.jpg'} ,
    {id:2, name: 'Car', description: 'To look cool.',price:'$25,000', image:'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg'},

]

const Products = () => {   
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products