import { CartIcon} from '../../icons'
import { useSelector } from 'react-redux'


const Navbar = () => {
    /// useSelector allows this component to access entire store(state) for this application
    /// Destructure amount from the cart object located in the store
    const {amount} = useSelector((store) => store.cart)
  return (
      <nav>
        <div className='nav-center'>
            <h3>Redux Toolkit</h3>
            <div className='nav-container'>
                <CartIcon />
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>

            </div>
        </div>
      </nav>
  )
}

export default Navbar