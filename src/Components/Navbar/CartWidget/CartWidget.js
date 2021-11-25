import './cartWidget.css';

const CartWidget = () => {
    const cartColor = {
        color: 'white',
    };

    return ( 
        <div className="cart-widget">
            <a href="">
                <i className="fas fa-shopping-cart" style={cartColor}></i>
            </a>
        </div>
    );
}
 
export default CartWidget;