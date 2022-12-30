import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'Startsida',
    }
  }






  render() {
    const { onPageChange, email, loggaIn, inloggad } = this.props;
    return (
      <ul className="main-nav">
        <div className='startsida' onClick={() => onPageChange('startsida')}  >Startsida</div>
        <div className="dropdown">
          <li className="dropbtn"> Avdelningar
            <div className="dropdown-content">
              <p onClick={() => onPageChange('alfaNova')}>Alfa Nova</p>
              <p onClick={() => onPageChange('anx')}>ANX</p>
              <p onClick={() => onPageChange('högvolym')}>Högvolym</p>
              <p onClick={() => onPageChange('lågvolym')}>Lågvolym</p>
              <p onClick={() => onPageChange('press')}>Press</p>
              <p onClick={() => onPageChange('smallMedium')}>Small Medium</p>
              <p onClick={() => onPageChange('underhåll')}>Underhåll</p>
              <p onClick={() => onPageChange('volym80')}>Volym 80</p>
              <p onClick={() => onPageChange('xl')}>XL</p>
            </div>
          </li>
        </div>
        {inloggad === 'sant' &&
          <div
            onClick={() => onPageChange('planering')}
            id='planeringNavbar'>
            Planering
          </div>}
        <div id='emailNavbar'>{email}</div>
        {inloggad === 'sant' &&
          <div
            onClick={() => loggaIn('falskt')}
            id='loggaInNavbar'>
            Logga ut
          </div>}
        {inloggad !== 'sant' &&
          <div
            onClick={() => onPageChange('loggaIn')}
            id='loggaInNavbar'>
            Logga in
          </div>}
      </ul >
    );
  }
}

export default Navbar;