import React from 'react'

const testimonyItem = ({ item }) => {
    return (
        <div>
            <img src={item.productImage} alt="" className="carousel-img" />
            <div className="carousel-item-text">{item.productDescription}</div>
        </div>
    )
}

export default testimonyItem