import React from 'react';
import './index.scss';

const Header = ({searchChangeHandler}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <header className="header">
      <div className="icon"></div>
      <div className="input-box">
        <input
          type="search"
          placeholder="search"
          onChange={(e)=> {searchChangeHandler(e)}}
        />
      </div>
    </header>
  )
}

export default Header
