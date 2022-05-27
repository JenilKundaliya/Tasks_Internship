import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
function Product({product}) {
    return (
        <div className="product">
          
            <img src={product.image}></img>
            <div className="product__info">
                <p className="info__name">{product.title}</p>
                <p className="info__description">
                    {product.description}
                </p>
                <p className="info__price">Rs. {product.price}</p>
                <Link to={`products/${product.id}`} className="info__button">View More</Link>

            </div>
        </div>
    )
}

export default Product
