import React, {useState} from 'react'
import './Navbar.css'
import Bnbn from '../../Assets/Bnbn.png'
import {Link} from 'react-router-dom';

export default function Navbar() {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const handleMenuOpen = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

  return (
    <div className='navbar__all'>
        <div>
        <Link to='/'><img className='Bnbn'src={Bnbn}  alt ="bnbn" id="bnbn" /></Link>
        </div>
        <div className='navbar__options'>
            <ul>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}} to="/">Home</Link>
                </li>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}}  to="/place-to-stay">Place to stay</Link>
                </li>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}} to="/#nfts">NFTs</Link>
                </li>
                <li>
                <Link style={{textDecoration: 'none', color: '#434343'}}  to="/#community">Community</Link>
                </li>
            </ul>
        </div>

        <div className='connect'>
           <h4>Connect Wallet</h4>
        </div>
      
    </div>
  )
}
