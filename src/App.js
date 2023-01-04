import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Startsida from './Avdelningar/Startsida/Startsida';
import Lågvolym from './Avdelningar/Lågvolym/Lågvolym';
import Högvolym from './Avdelningar/Högvolym/Högvolym';
import SmallMedium from './Avdelningar/SmallMedium/SmallMedium';
import AlfaNova from './Avdelningar/AlfaNova/AlfaNova';
import Underhåll from './Avdelningar/Underhåll/Underhåll';
import ParticlesBg from 'particles-bg'
import Planering from './Components/Planering/Planering';
import LoggaIn from './Components/LoggaIn/LoggaIn';
import Registrera from './Components/Registrera/Registrera';
import XL from './Avdelningar/XL/XL';
import MakinloggningÖversikt from './Avdelningar/MakinloggningÖversikt/MakinloggningÖversikt';



fetch('http://localhost:4000')
  .then(res => {
    if (res.ok) {
      console.log('API server works')
    }
  })
  .then(data => console.log(data))
  .catch(error => alert('API server is down'))


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      page: 'startsida',
      id: '',
      name: '',
      email: '',
      inloggad: 'falskt',
    }
  }

  loadUser = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      email: data.email,
    }
    )
  }

  onPageChange = (x) => {
    this.setState({ page: x })
  }

  loggaIn = (x) => {
    this.setState({ inloggad: x })
    if (x === 'falskt') {
      this.setState({ email: '' })
      this.setState({ page: 'startsida' })
    }
  }



  render() {
    const { page } = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
        <Navbar onPageChange={this.onPageChange}
          inloggad={this.state.inloggad}
          loggaIn={this.loggaIn}
          email={this.state.email} />
        {page === 'startsida' && <Startsida onPageChange={this.onPageChange} />}
        {page === 'lågvolym' && <Lågvolym />}
        {page === 'högvolym' && <Högvolym />}
        {page === 'smallMedium' && <SmallMedium />}
        {page === 'alfaNova' && <AlfaNova />}
        {page === 'underhåll' && <Underhåll />}
        {page === 'xl' && <XL />}
        {page === 'MakinloggningÖversikt' && <MakinloggningÖversikt
          onPageChange={this.onPageChange} />}
        {page === 'planering' && <Planering namn="jakobgoransson"
          email={this.state.email} />}
        {page === 'loggaIn' && <LoggaIn
          loggaIn={this.loggaIn}
          loadUser={this.loadUser}
          onPageChange={this.onPageChange} />}
        {page === 'registrera' && <Registrera
          loggaIn={this.loggaIn}
          loadUser={this.loadUser}
          onPageChange={this.onPageChange} />}
      </div>
    );
  }
}

export default App;
