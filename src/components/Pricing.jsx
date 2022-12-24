import React from 'react'
import './Pricing.css'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            
        <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 500</p>
                <p>- 2 Days -</p>
                <p>- 4 Pages</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>

            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 6 Days -</p>
                <p>- 9 Pages</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing
