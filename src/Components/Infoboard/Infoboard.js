import React, { Component, } from 'react';
import './Infoboard.css';
import { BiMessageAdd } from "react-icons/bi";
import moment from 'moment/moment';
import { TiDeleteOutline } from "react-icons/ti";


class Infoboard extends Component {
  constructor() {
    super();
    this.state = {
      add: 0,
      namn: '',
      message: '',
      timer: 0,
      messageAll: []
    }
  }




  componentDidMount() {
    fetch('http://localhost:4000/infoboard' + this.props.avdelning)
      .then(response => response.json())
      .then(x => {
        this.setState({ messageAll: x });
        this.myTimer();
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timer !== this.state.timer) {
      this.componentDidMount()
      this.setState({ timer: 0 })
    }
  }

  myTimer = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1
      }));
    }, 30000);

  }




  showBox = (x) => {
    this.setState({ add: 1 })
  }

  hideBox = (x) => {
    this.setState({ add: 0 })
  }



  send = () => {
    fetch('http://localhost:4000/infoboard' + this.props.avdelning, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.namn,
        message: this.state.message,
      })
    })
      .then(this.setState({ add: 0 }))
      .catch(error => alert('API server is down'))
      .then(d => this.componentDidMount())
  }


  messageDelete = (x) => {
    fetch('http://localhost:4000/infoboard' + this.props.avdelning
      + '/'
      + x.target.id, {
      method: 'DELETE',
    })
      .then(res => res.json()) // or res.json()
      .then(d => this.componentDidMount())
  }


  render() {
    const { add, messageAll } = this.state;


    return (
      <div className='helaInfo'>
        <div className='mainflex'>
          <button className='buttonInfoAdd' onClick={this.showBox}> Lägg till    <BiMessageAdd /></button>
          <div className='infoRubrik'>Information</div>

        </div>
        <div className='backroundboxInfo'>  {messageAll.map(messageAll => (
          <div className=' meddelanderuta'
            key={messageAll.id} >
            <TiDeleteOutline
              id={messageAll.id}
              onClick={this.messageDelete}
              className='removeMess' />
            <div id='pasteNamn' >  {messageAll.name} </div>
            <textarea id='pasteMessage'
              readOnly={true}
              value={messageAll.message} />
            <div id='pasteJoined'>
              {moment(messageAll.joined).format("DD MMMM YYYY")}{" "}
            </div>
          </div>
        ))}</div>

        {add === 1 && <div className='meddelanderuta pos'>
          <input
            className='inputName'
            placeholder='Namn/avdelning'
            id='21'
            onChange={(x) => this.setState({ namn: x.target.value })}
          />
          <textarea className='inputNote'
            placeholder="Beskriv information"
            id='22'
            onChange={(y) => this.setState({ message: y.target.value })}
          />
          <button className='buttonInfoSend' onClick={this.send}> Send </button>
          <button className='buttonInfoExit' onClick={this.hideBox}> exit</button>
        </div>}
      </div>

    );
  }
}

export default Infoboard;