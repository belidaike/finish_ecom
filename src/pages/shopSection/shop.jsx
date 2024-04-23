import React, { useContext, useState } from 'react'
import { CATEGORIES } from '../../categories'
import './shop.css'
import { ShopContext } from '../../context/shop-context'
import { Product } from './product'
import Category from './Category'

const Shop = () => {
    const compareByPriceUp = (a, b) => a.price - b.price
    const compareByPriceDown = (a, b) => b.price - a.price
    const [sortACS, setSortACS] = useState(false)
    const [sortDES, setSortDEC] = useState(false)
    const { addToCart, filteredProducts, setSearch } = useContext(ShopContext);
    if (sortACS === true) {
        const sortedArrayUp = filteredProducts.sort(compareByPriceUp)
    } if (sortDES === true) {
        const sortedArrayDown = filteredProducts.sort(compareByPriceDown)
    }
    return (
        <div className='shop'>
            {/* Categories */}
            <div className='paddings categories-wrapper'>
                <h1 className='flexCenter category-title' onClick={() => setSearch('')} title='All Categories'>Categories</h1>
                <div className="paddings categories">
                    {CATEGORIES.map(item => <Category key={item.id} data={item} />)}
                </div>
            </div>

            {/* Products */}
            <div className="products-wrapper">
                {filteredProducts.length > 0 ?
                    (
                        <>
                            <div>
                                <div className='paddings shop-title'><h1>All for YOU!</h1></div>
                                <div className='paddings options'>
                                    <label onClick={() => { setSortACS(false), setSortDEC(false) }}>sort by:</label>
                                    <button className='button' onClick={() => { setSortACS(true), setSortDEC(false) }}>asc</button>
                                    <button className='button' onClick={() => { setSortDEC(true), setSortACS(false) }}>des</button>
                                </div>
                            </div>
                            <div className="products">
                                {
                                    filteredProducts.map(item =>
                                        <Product key={item.id} item={item} />)
                                }
                            </div>
                        </>

                    )
                    :
                    <div className='paddings noItem'>
                        <h3 className='paddings'>There is no such item found.</h3>
                    </div>
                }
            </div>
            {/* End Products */}
        </div >
    )

}

export default Shop