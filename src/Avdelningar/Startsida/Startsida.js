import React from 'react';
import './Startsida.css';
import ParticlesBg from 'particles-bg'

class Startsida extends React.Component {
  constructor() {
    super();
    this.state = {
      test: 'Startsida',
    }
  }

  render() {
    const { onPageChange } = this.props;
    return (
      <div className='hela'>
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        <div className='rubrik'>Alfa Laval Ronneby</div>
        <div className='avdelningsbox'>
          <p className='avdelning' onClick={() => onPageChange('alfaNova')}>Alfa Nova</p>
          <p className='avdelning' onClick={() => onPageChange('xl')}>ANX</p>
          <p className='avdelning' onClick={() => onPageChange('högvolym')}>Högvolym</p>
          <p className='avdelning' onClick={() => onPageChange('lågvolym')}>Lågvolym</p>
          <p className='avdelning' onClick={() => onPageChange('press')}>Press</p>
          <p className='avdelning' onClick={() => onPageChange('smallMedium')}>Small Medium</p>
          <p className='avdelning' onClick={() => onPageChange('underhåll')}>Underhåll</p>
          <p className='avdelning' onClick={() => onPageChange('volym80')}>Volym 80</p>
          <p className='avdelning' onClick={() => onPageChange('xl')}>XL</p>
        </div>

      </div>
    );
  }
}

export default Startsida;