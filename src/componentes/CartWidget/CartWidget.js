import { CartContext } from '../../Cartcontext/CartContext'
import './CartWidget.css';
import shop from './assets/basket.svg'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const CartWidget = () => {
     const {totalQuantity}= useContext(CartContext)

    return (
            
        <Link to= '/cart' className='CartWidget'>
            <img className='CarImg' src={shop} alt='cart-wdiget'/>
            {totalQuantity}
        </Link>
        
    )
}


export default CartWidget