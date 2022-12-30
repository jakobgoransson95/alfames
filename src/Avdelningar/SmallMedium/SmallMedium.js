import React from 'react';
import './SmallMedium.css';
import PieChart from '../../Components/Piechart/PieChart';
import Infoboard from '../../Components/Infoboard/Infoboard';

class SmallMedium extends React.Component {
  constructor() {
    super();
    this.state = {
      pageName: '/infoboardSmallMedium',
    }
  }



  render() {

    return (
      <div className='hela'>
        <div className='rubrik'>Small Medium</div>
        <PieChart />
        <Infoboard avdelning="smallmedium" />
      </div>
    );
  }
}

export default SmallMedium;