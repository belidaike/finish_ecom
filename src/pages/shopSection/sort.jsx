import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link, useNavigate } from "react-router-dom";
const Sort = (props) => {
    const { id, productName, price, productImage, productCategory } = props.item

    const { addToCart, cartItems, setCountCart } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
    console.log(id)
    const navigate = useNavigate()
    return (
        <section className="product">
            <div className="kani">
                <img src={productImage} onClick={() => navigate(`/product/${id}`)} alt="" />
            </div>
            <h1 className="productName">{productName}</h1>
            <h2 className="categoryItem">{productCategory}</h2>
            <h2 className="price">
                {price > 1000 ? `$${price / 1000}` : `$${price}`}
            </h2>
            <div className="flexSpaceBetween buttons">
                <Link to='/cart' className="button2" onClick={() => {
                    addToCart(id), setCountCart(n => n + 1)
                }}>Buy now</Link>
                <button className="button" title="Add to cart!"
                    onClick={() => {
                        addToCart(id), setCountCart(n => n + 1)
                    }}>Add to cart{cartItemCount > 0
                        ? ` (${cartItemCount})`
                        : ``
                    }
                </button>
            </div>
        </section>
    )
}

export default Sort
