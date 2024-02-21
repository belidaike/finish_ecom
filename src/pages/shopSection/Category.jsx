import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const Category = (props) => {
    const { setSearch } = useContext(ShopContext)
    const { data } = props

    return (
        <div className='paddings flexColCenter category'>
            <img src={data.productImage} onClick={() => setSearch(data.productCategory)} alt={data.productCategory} title={data.productCategory} />
            {data.productCategory}
        </div>
    )
}

export default Category
