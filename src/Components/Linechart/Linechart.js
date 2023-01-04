import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as Chartjs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
import './Linechart.css';
import { CiCircleRemove } from "react-icons/ci";


Chartjs.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)



class Linechart extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: '',
      larm: false,
      limit: '',
      data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
        datasets: [
          {
            label: "Value",
            data: [50, 50, 51, 52, 53, 55, 57, 59, 61, 73, 71, 74, 74, 74, 74, 75, 75, 77, 77, 78, 78, 78, 78, 79],
            backgroundColor: 'rgb(75, 192, 192, 0.5)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4,
            fill: true,
            pointStyle: 'rect',
            pointBorderColor: 'blue',
            pointBackgroundColor: '#fff',
            showLine: true
          },
          {
            label: "Limit",
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            data: [82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82, 82,],
            borderColor: 'red',
            tension: 0.4,
            fill: true,
            pointStyle: 'rect',
            pointBorderColor: 'blue',
            pointBackgroundColor: '#fff',
            showLine: true
          }
        ]
      }
    }
  }






  setLimit = (x) => {
    this.setState({
      limit: x.target.value,
      data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
        datasets: [
          {
            label: "Value",
            data: [50, 50, 51, 52, 53, 55, 57, 59, 61, 73, 71, 74, 74, 74, 74, 75, 75, 77, 77, 78, 78, 78, 78, 79],
            backgroundColor: 'rgb(75, 192, 192, 0.5)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4,
            fill: true,
            pointStyle: 'rect',
            pointBorderColor: 'blue',
            pointBackgroundColor: '#fff',
            showLine: true
          },
          {
            label: "Limit",
            data: [x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value, x.target.value],
          }
        ]
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.limit !== this.state.limit) {
      this.state.data.datasets[0].data.map(data => {
        if (data > this.state.limit) {
          return (
            this.setState({ larm: true }),
            this.setState({ bgColor: 'red' }))
        } else {
          return (
            this.setState({ larm: false }),
            this.setState({ bgColor: '' }))
        }
      })
      if (this.state.larm === true) {
        this.props.larm('true')
      } else {
        this.props.larm('false')
      }
    }
  }

  render() {
    const { data } = this.state;
    const { rubrik, mätning, goBack } = this.props;
    return (
      <div>
        <div className='helaInfo'>
          <input
            onChange={this.setLimit}
            id='limitChart' />
          <CiCircleRemove id='goBackLinechart'
            onClick={() => goBack()} />
          <p style={{ backgroundColor: this.state.bgColor }} id='rubrikChart'>{rubrik} {mätning}</p>
          <div id='chartBox' >
            <Line data={data}></Line>
          </div>

        </div>
      </div >
    );
  }
}

export default Linechart;