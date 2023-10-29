import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const amount = useSelector(state => state.amount);
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-fixed-top bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Redux</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === "/about" ? 'active' : ''}`} to="/about">About</Link>
              </li>
            </ul>
            <form>
              <button className='btn btn-default'>your bal: {amount}</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
