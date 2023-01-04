import React, { Component } from 'react';
import { BiMessageAdd } from "react-icons/bi";
import { CiCircleRemove } from "react-icons/ci";
import './Underhåll.css';


class Underhåll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: 0,
      namn: '',
      dag1: '',
      dag2: '',
      dag3: '',
      dag4: '',
      dag5: '',
      dag6: '',
      dag7: '',
      dag8: '',
      dag9: '',
      dag10: '',
      dag11: '',
      dag12: '',
      dag13: '',
      dag14: '',
      id: '',
      search: '',
      messageAll: [],
    }
  }




  componentDidMount() {
    fetch('http://localhost:4000/planeringuh')
      .then(response => response.json())
      .then(x => {
        this.setState({ messageAll: x })
      })
  }


  showBox = (x) => {
    this.setState({ add: 1 })
  }

  hideBox = (x) => {
    this.setState({ add: 0 })
  }


  send = () => {
    fetch('http://localhost:4000/planeringuh', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        namn: this.state.namn,
      })
    })
      .then(this.setState({ add: 0, dag: '' }))
      .catch(error => alert('API server is down'))
      .then(d => this.componentDidMount())
  }


  messageDelete = (x) => {
    fetch('http://localhost:4000/planeringuh'
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

  updateState = (x) => {
    fetch('http://localhost:4000/planeringuh/' + x.target.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          namn: data.namn,
          dag1: data.dag1,
          dag2: data.dag2,
          dag3: data.dag3,
          dag4: data.dag4,
          dag5: data.dag5,
          dag6: data.dag6,
          dag7: data.dag7,
          dag8: data.dag8,
          dag9: data.dag9,
          dag10: data.dag10,
          dag11: data.dag11,
          dag12: data.dag12,
          dag13: data.dag13,
          dag14: data.dag14,
          id: x.target.id,
          [x.target.className]: x.target.value,
        })

      })
      .then(d => this.componentDidMount())
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevState.namn !== this.state.namn ||
      prevState.dag1 !== this.state.dag1 ||
      prevState.dag2 !== this.state.dag2 ||
      prevState.dag3 !== this.state.dag3 ||
      prevState.dag4 !== this.state.dag4 ||
      prevState.dag5 !== this.state.dag5 ||
      prevState.dag6 !== this.state.dag6 ||
      prevState.dag7 !== this.state.dag7 ||
      prevState.dag8 !== this.state.dag8 ||
      prevState.dag9 !== this.state.dag9 ||
      prevState.dag10 !== this.state.dag10 ||
      prevState.dag11 !== this.state.dag11 ||
      prevState.dag12 !== this.state.dag12 ||
      prevState.dag13 !== this.state.dag13 ||
      prevState.dag14 !== this.state.dag14
    ) &&
      (this.state.add === 0)) {
      fetch('http://localhost:4000/planeringuh'
        + '/'
        + this.state.id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          namn: this.state.namn,
          dag1: this.state.dag1,
          dag2: this.state.dag2,
          dag3: this.state.dag3,
          dag4: this.state.dag4,
          dag5: this.state.dag5,
          dag6: this.state.dag6,
          dag7: this.state.dag7,
          dag8: this.state.dag8,
          dag9: this.state.dag9,
          dag10: this.state.dag10,
          dag11: this.state.dag11,
          dag12: this.state.dag12,
          dag13: this.state.dag13,
          dag14: this.state.dag14,
        })
      })
        .then(this.setState({ send: false }))
        .catch(error => alert('API server is down'))
        .then(d => this.componentDidMount())
    }
  }



  render() {
    const { add, showExtraInfo } = this.state;
    const filteredMessage = this.state.messageAll.filter(message => {
      return message.namn.toLowerCase().includes(this.state.search.toLowerCase());
    })
    return (
      <div className='helaInfo'>
        <div className='mainflex'>
          <button className='buttonInfoAdd' onClick={this.showBox}> Lägg till    <BiMessageAdd /></button>
          <div className='infoRubrik'>Planering
            <input id='serchPlanering'
              placeholder='Sök'
              onChange={(x) => this.setState({ search: x.target.value })} />
          </div>


        </div>
        <div >  {filteredMessage.map(messageAll => (
          < div id='planeringsrutaUH'
            key={messageAll.id} >
            <input
              id={messageAll.id}
              className='namn'
              defaultValue={messageAll.namn}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag1'
              defaultValue={messageAll.dag1}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag2'
              defaultValue={messageAll.dag2}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag3'
              defaultValue={messageAll.dag3}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag4'
              defaultValue={messageAll.dag4}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag5'
              defaultValue={messageAll.dag5}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag6'
              defaultValue={messageAll.dag6}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag7'
              defaultValue={messageAll.dag7}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag8'
              defaultValue={messageAll.dag8}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag9'
              defaultValue={messageAll.dag9}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag10'
              defaultValue={messageAll.dag10}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag11'
              defaultValue={messageAll.dag11}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag12'
              defaultValue={messageAll.dag12}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag13'
              defaultValue={messageAll.dag13}
              onChange={this.updateState} />
            <input
              id={messageAll.id}
              className='dag14'
              defaultValue={messageAll.dag14}
              onChange={this.updateState} />
            <div id='planeringRemoveEdit'>
              <CiCircleRemove
                id={messageAll.id}
                onClick={this.messageDelete}
                className='removePlanering' />
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
              placeholder='Namn'
              id='21'
              onChange={(x) => this.setState({ namn: x.target.value })}
            />
            <button className='buttonInfoSend' onClick={this.send}> Send </button>
            <button className='buttonInfoExit' onClick={this.hideBox}> Exit</button>
          </div>
        }
      </div >

    );
  }
}

export default Underhåll;