import './NavBar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
      <div className="navBar">
        <Link to ="/">
        <img className="navBar_logo" src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/864ec289838c6edcb7bd7a12acbbfa9389cc5a23/public/imgs/logo%20-%20The%20Everything%20Store.svg" alt="The Everything Store logo"/>
        </Link>
        
        <div className="navBar_search">
            <input className="navBar_searchInput" type="text" placeholder="Search for ..."></input>
        </div>
        <div className="navBar_Btns">
          <div className="navBar_cartBtn">
            <Link to="/checkout">
              <button className="cartBtn" type="submit"><img src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/864ec289838c6edcb7bd7a12acbbfa9389cc5a23/public/imgs/basket-icon.svg" alt="basket-icon"/>0</button>
            </Link>
          </div>
          <div className="navBar_SigninBtn">
            <Link to="/login">
              <button className="SigninBtn" type="submit"><img src="https://raw.githubusercontent.com/mohitsinghal07/The-everything-store/864ec289838c6edcb7bd7a12acbbfa9389cc5a23/public/imgs/user-icon.svg" alt="user-icon"></img>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default NavBar;