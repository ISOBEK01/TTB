import React from 'react'
import w from "../assets/w.jpg";
import { Link } from 'react-router-dom'
import "./Nav.css"
const Nav = () => {
  return (
    <div className='Nav'>
        <img src={w} alt="" />
        <b>
          <div className="links">
            <Link to="/">Bosh sahifa</Link>
            <Link to="sh">Shifokorlar</Link>
            <Link to="b">Bo'limlar</Link>
            <Link to="y">Yangililklar</Link>
            <Link to="bu">Bo'sh ish o'rni</Link>
            <Link to="qvp">QVP</Link>
            <Link to="a">Aloqa</Link>
        </div>
        </b>
        
        <div className="languages">
            <select className='selekt'>
                <option value="UZ">UZ</option>
                <option value="RUS">RUS</option>
            </select>
        </div>
    </div>
  )
}

export default Nav