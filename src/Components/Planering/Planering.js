import React, { Component } from 'react';
import './Planering.css';
import { BiMessageAdd } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";


class Planering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: 0,
      maskin: '',
      beskrivning: '',
      prio: '',
      klart: '',
      när: '',
      id: '',
      search: '',
      showExtraInfo: '',
      extraInfoText: '',
      RutaTaBort: '',
      messageAll: [],
    }
  }


  componentDidMount() {
    fetch('http://localhost:4000/planering' + this.props.namn, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.props.email,
      })
    })
      .then(response => response.json())
      .then(x => {
        this.setState({ messageAll: x })
      })
      .catch(error => alert('API server is down'))
  }


  showBox = (x) => {
    this.setState({ add: 1 })
  }

  hideBox = (x) => {
    this.setState({ add: 0 })
  }


  send = () => {
    if (this.state.prio !== '') {
      fetch('http://localhost:4000/planering' + this.props.namn, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          maskin: this.state.maskin,
          beskrivning: this.state.beskrivning,
          prio: this.state.prio,
          när: this.state.när,
          klart: this.state.klart,
          email: this.props.email
        })
      })
        .then(this.setState({ add: 0, prio: '' }))
        .catch(error => alert('API server is down'))
        .then(d => this.componentDidMount())
    } else (alert('Du måste ha ett prionummer'))
  }


  messageDelete = (x) => {
    fetch('http://localhost:4000/planering' + this.props.namn
      + '/'
      + x.target.id, {
      method: 'DELETE',
    })
      .then(res => res.json()) // or res.json()
      .then(d => this.componentDidMount())
  }

  visaExtraInfo = (x) => {
    this.setState({ showExtraInfo: x.target.id })
  }

  döljExtraInfo = (x) => {
    this.setState({ showExtraInfo: '' })
  }

  visaTaBort = (x) => {
    this.setState({ RutaTaBort: x.target.id })
  }

  döljTaBort = (x) => {
    this.setState({ RutaTaBort: '' })
  }

  updateState = (x) => {
    fetch('http://localhost:4000/planeringjakobgoransson/' + x.target.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          maskin: data.maskin,
          beskrivning: data.beskrivning,
          prio: data.prio,
          när: data.när,
          klart: data.klart,
          extraInfoText: data.extraInfoText,
          id: x.target.id,
          [x.target.className]: x.target.value,
        })

      })
      .then(d => this.componentDidMount())
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.maskin !== this.state.maskin ||
      prevState.beskrivning !== this.state.beskrivning ||
      prevState.prio !== this.state.prio ||
      prevState.när !== this.state.när ||
      prevState.klart !== this.state.klart ||
      prevState.extraInfoText !== this.state.extraInfoText) &&
      (this.state.prio !== '' && this.state.maskin !== '' && this.state.add === 0)) {
      fetch('http://localhost:4000/planering' + this.props.namn
        + '/'
        + this.state.id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          maskin: this.state.maskin,
          beskrivning: this.state.beskrivning,
          prio: this.state.prio,
          när: this.state.när,
          klart: this.state.klart,
          extraInfoText: this.state.extraInfoText
        })
      })
        .then(this.setState({ send: false }))
        .catch(error => alert('API server is down'))
        .then(d => this.componentDidMount())
    }
  }



  render() {
    const { add, showExtraInfo, RutaTaBort } = this.state;
    const filteredMessage = this.state.messageAll.filter(message => {
      return message.maskin.toLowerCase().includes(this.state.search.toLowerCase());
    })
    return (
      <div className='helaInfo'>
        <div id='mainflexPlanering'>
          <button className='buttonInfoAdd' onClick={this.showBox}> Lägg till    <BiMessageAdd /></button>
          <div className='infoRubrik'>Planering
            <input id='serchPlanering'
              placeholder='Sök'
              onChange={(x) => this.setState({ search: x.target.value })} />
          </div>

        </div>
        <div >  {filteredMessage.map(messageAll => (
          <div id='planeringsruta'
            key={messageAll.id} >
            <input
              id={messageAll.id}
              className='prio'
              defaultValue={messageAll.prio}
              onChange={this.updateState}
              type='number' />
            <input
              id={messageAll.id}
              className='maskin'
              defaultValue={messageAll.maskin}
              onChange={this.updateState}
              placeholder='Vart?' />
            <textarea
              id={messageAll.id}
              className='beskrivning'
              defaultValue={messageAll.beskrivning}
              onChange={this.updateState}
              placeholder='Beskrivning utav jobb' />
            <input
              id={messageAll.id}
              className='när'
              defaultValue={messageAll.när}
              onChange={this.updateState}
              placeholder='När?' />

            <input
              id={messageAll.id}
              className='klart'
              defaultValue={messageAll.klart}
              onChange={this.updateState}
              placeholder='Klart%' />
            <div id='planeringRemoveEdit'>
              <CiCircleMore
                id={messageAll.id}
                className='moreInfoPlanering'
                onClick={this.visaExtraInfo} />
              <CiCircleRemove
                id={messageAll.id}
                onClick={this.visaTaBort}
                className='removePlanering' />
              {RutaTaBort === messageAll.id && <div id='rutaTaBortPlanering'>
                <p id='TaBortTextPlanering' >Vill du ta bort?</p>
                <p onClick={this.messageDelete}
                  className='TaBortJaPlanering'
                  id={messageAll.id}>Ja</p>
                <p onClick={this.döljTaBort}
                  className='TaBortJaPlanering'>Nej</p>
              </div>}
            </div>
            {showExtraInfo === messageAll.id &&
              <div className='extraInfoPlanering id={messageAll.id}'>
                <div id='extraInfoRubrik'>
                  <div id='extraInfoMaskin'>{messageAll.maskin}</div>
                  <CiCircleRemove
                    id='extraInfoRemove'
                    onClick={this.döljExtraInfo} />
                </div>
                <textarea
                  id={messageAll.id}
                  defaultValue={messageAll.extraInfoText}
                  onChange={this.updateState}
                  className='extraInfoText'
                />
              </div>}
          </div>
        ))}</div>

        {
          add === 1 && <div className='meddelanderuta pos'>
            <input
              className='inputName'
              placeholder='Vart ska jobbet göras'
              id='21'
              onChange={(x) => this.setState({ maskin: x.target.value })}
            />
            <textarea className='inputNote'
              placeholder="Beskrivning utav jobb"
              id='22'
              onChange={(y) => this.setState({ beskrivning: y.target.value })}
            />
            <input
              className='inputName'
              placeholder='När ska jobbet göras'
              id='23'
              onChange={(x) => this.setState({ när: x.target.value })}
            />
            <input
              className='inputName'
              placeholder='prionummer'
              id='25'
              onChange={(x) => this.setState({ prio: x.target.value })}
              type='number'
            />
            <button className='buttonInfoSend' onClick={this.send}> Send </button>
            <button className='buttonInfoExit' onClick={this.hideBox}> Exit</button>
          </div>
        }
      </div >

    );
  }
}

export default Planering;