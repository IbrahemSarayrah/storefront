
import { connect } from "react-redux";
import { Card, Button, Typography } from '@material-ui/core'
import { removeFromCart } from '../../store/cart'

const Cart = props => {
    return (
        <Card className="cart" elevation={3}>
            <p>Cart Items:</p>
            {props.cartItems.map(item => {
                return (
                    <>
                        <ul>
                            <li>
                                <Typography component="h2"> {item.name} </Typography>
                                <Button onClick={() => props.removeFromCart(item)}>Remove</Button>
                            </li>
                        </ul>
                    </>
                )
            })}
        </Card>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cart
});

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);