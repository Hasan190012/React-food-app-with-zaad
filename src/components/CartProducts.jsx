import useShop from "../ShopContext"

const CartProducts = () => {

    const {products,removeFromCart,total} = useShop();
    return (
        <div className="cart-products">
            <h2>Cart Products</h2>
            {products.map((product) => (
                <div className="cart-product">
                    <div className="cart-title-img">
                        <img src={product.urlImage} alt="" />
                        <span>{product.name}</span>
                    </div>
                    <h5>${product.price}</h5>
                    <span className="delete" onClick={() => removeFromCart(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </span>
                </div>
            ))}
            <div className="total-price">
                <h2>Total is: ${total}</h2>
            </div>
        </div>
    )
}
export default CartProducts;