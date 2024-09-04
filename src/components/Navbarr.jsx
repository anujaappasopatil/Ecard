import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown  } from 'react-icons/fa';


const Navbarr = ({ setData,cart  }) => {
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const fillterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element)
  }
  const fillterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element)
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    <>
      <header className='sticky-top'>
        <div className="nav-bar">
          <Link to={'/'} className="brand">
            E-Commerce

          </Link>
          < form onSubmit={handlesubmit} className="search-bar">
            <input value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder='Seach Products' />
          </form>
          <Link to={'/card'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown style={{fontSize:'1.5rem'}} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button></Link>
        </div>
        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className="iems">Fillter by {"->"} </div>
            <div className="iems">No Fillter</div>
            <div
              onClick={() => fillterByCategory('mobiles')} className="iems">Moblies</div>
            <div onClick={() => fillterByCategory('laptops')} className="iems">Laptops</div>
            <div onClick={() => fillterByCategory('tablets')} className="iems">Tablets</div>
            <div onClick={() => fillterByPrice(29999)} className="iems">{">="} 29999</div>
            <div onClick={() => fillterByPrice(49999)} className="iems">{">="}49999</div>
            <div onClick={() => fillterByPrice(69999)} className="iems">{">="}69999</div>
            <div onClick={() => fillterByPrice(89999)} className="iems">{">="}89999</div>
            <div className="iems"></div>
          </div>

          )
        }

   
      </header>
    </>
  )
}

export default Navbarr
