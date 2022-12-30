import { useEffect } from 'react';
import React from 'react';
import './PieChart.css';

document.documentElement.style.setProperty('--p', 78);



function update(event) {
  document.documentElement.style.setProperty('--p', event.currentTarget.value);
}

function Chartfunction({ changeArrow4, }) {
  useEffect(() => {


  }, []);
  return (
    < input className='input' onChange={e => { update(e); changeArrow4() }
    } />
  )
}



export default Chartfunction;