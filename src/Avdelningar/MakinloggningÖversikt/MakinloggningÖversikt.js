import React from 'react';
import './MakinloggningÖversikt.css';
import ParticlesBg from 'particles-bg'
import Linechart from '../../Components/Linechart/Linechart';

class MakinloggningÖversikt extends React.Component {
  constructor() {
    super();
    this.state = {
      pageChart: '',
      bgColor: '',
      limit: '82'
    }
  }

  openChart = (x) => {
    this.setState({ pageChart: x.target.innerText })
  }

  goBack = (x) => {
    this.setState({ pageChart: '' })
  }

  larm = (x) => {
    if (x === 'true') {
      this.setState({ bgColor: 'red' })
    } else {
      this.setState({ bgColor: '' })
    }
  }


  render() {
    const { onPageChange } = this.props;
    const { pageChart } = this.state;
    return (
      <div className='hela'>
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        {pageChart === '' && <div className='rubrik'>Maskinloggning</div>}
        {pageChart === '' &&
          <div className='avdelningsbox'>
            <p className='avdelning' onClick={this.openChart}>Alfa Nova</p>
            <p className='avdelning' onClick={() => onPageChange('ANX')}>ANX</p>
            <p className='avdelning' onClick={() => onPageChange('högvolym')}>Högvolym</p>
            <p className='avdelning' onClick={() => onPageChange('lågvolym')}>Lågvolym</p>
            <p className='avdelning' onClick={() => onPageChange('press')}>Press</p>
            <p className='avdelning'
              onClick={this.openChart}
              style={{ backgroundColor: this.state.bgColor }}
            >Small Medium</p>
            <p className='avdelning' onClick={() => onPageChange('underhåll')}>Underhåll</p>
            <p className='avdelning' onClick={() => onPageChange('volym80')}>Volym 80</p>
            <p className='avdelning' onClick={() => onPageChange('xl')}>XL</p>
          </div>}
        {pageChart === 'Small Medium' &&
          <Linechart rubrik="BHE-3"
            mätning="flödesmätning"
            goBack={this.goBack}
            larm={this.larm} />}
      </div>
    );
  }
}

export default MakinloggningÖversikt;