import CartProducts from "../components/CartProducts";
import Footer from "../components/Footer";
import Payment from "../components/Payment";

const Cart = () => {
   
    return (
        <>
        <div className="cart-container">
            <CartProducts />
            <Payment />
            
        </div>
        <Footer/>
        </>
    );
       
}
export default Cart;