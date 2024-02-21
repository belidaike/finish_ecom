import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css'
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import logo from '/logo.png'

const Navbar = (props) => {
    const { handleChange, countCart } = useContext(ShopContext)

    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <span>
                    <Link to="/"><img src={logo} width={50} alt="" /></Link>
                    <h4>LeapShop</h4>
                </span>
                <input type="text" placeholder='Search' onChange={handleChange} />
                <div className="nav-menu">
                    <span className='cart'>
                        <Link to='/cart'><FaShoppingCart size={32} className='nav-svg' /></Link>
                        <span className='countCart'>{countCart}</span>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar