import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { getProducts } from '../../store/productAPI';

import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

import { addToCart } from '../../store/cart'


const Product = props => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <div className="productGrid">
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {products.map((items, idx) => {
                    if (props.activeCategory === items.category)
                        return (
                            <Card key={idx} elevation={3}>
                                <CardMedia image={items.image}
                                    height="140"
                                    component="img"
                                />
                                <CardContent>
                                    <Typography component="h2"> {items.name} </Typography>
                                    <Typography component="h2"> Description: {items.description} </Typography>
                                    <Typography component="h2"> Price: {items.price} </Typography>
                                    <Typography component="h2"> Inventory: {items.inventoryCount} </Typography>
                                </CardContent>
                                <Button onClick={() => props.addToCart(items)}>Add to Cart</Button>
                            </Card>
                        )
                })}
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    activeCategory: state.store.activeCategory
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Product);