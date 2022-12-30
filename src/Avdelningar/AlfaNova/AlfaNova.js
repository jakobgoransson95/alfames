import React from 'react';
import PieChart from '../../Components/Piechart/PieChart';
import Infoboard from '../../Components/Infoboard/Infoboard';

class AlfaNova extends React.Component {
  constructor() {
    super();
    this.state = {
      pageName: '/infoboardSmallMedium',
    }
  }



  render() {

    return (
      <div className='hela'>
        <div className='rubrik'>Alfa Nova</div>
        <PieChart />
        <Infoboard avdelning="alfanova" />
      </div>
    );
  }
}

export default AlfaNova;