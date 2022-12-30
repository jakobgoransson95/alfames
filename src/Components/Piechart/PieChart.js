
import React from 'react';
import './PieChart.css';
import Chartfunction from './ChartFunction';
import arrow4MesSenaste from '../../Avdelningar/SmallMedium/Mesrapporter/arrow4messenaste.pdf';
import arrow4MesDygn from '../../Avdelningar/SmallMedium/Mesrapporter/arrow4mesdygn.pdf';
import arrow4MesVecka from '../../Avdelningar/SmallMedium/Mesrapporter/arrow4mesvecka.pdf';
import { BiChevronDown } from "react-icons/bi";




class apexchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Arrow4: '78',
      IdNummer: '5'
    };
  }



  changeArrow4 = () => {
    var value1 = getComputedStyle(document.documentElement).getPropertyValue('--p');
    this.setState({ Arrow4: value1 });
  }



  getId = (prop) => {
    const idNr = Number(prop.target.id) + 1;
    const object = document.getElementById(idNr);
    object.classList.remove("hidepdf");
    this.setState({ IdNummer: idNr })
  }


  mouseLeave = () => {
    const object1 = document.getElementById(this.state.IdNummer);
    object1.classList.add("hidepdf");
  }


  render() {

    return (
      <div className='outer-grid' >
        <div className="inner-grid">
          <h3 className="textbox">MES</h3>
          <div className="mesmaskiner rtl1"> Arrow4
            <p className="senastedygn">OEE Senaste dygnet</p>
            <div className="pie animate no-round"> {this.state.Arrow4} % </div>
          </div>
          <div className="mesmaskiner rtl2"> RTL1
            <p className="senastedygn">OEE Senaste dygnet</p>
            <div className="pie animate no-round"> {this.state.Arrow4} %</div>
          </div>
          <div className="mesmaskiner arrow4"> RTL2
            <p className="senastedygn">OEE Senaste dygnet</p>
            <div className="pie animate no-round"> {this.state.Arrow4} %</div>
          </div>
          <div className='mesBox'>
            <div className='MesRapportRubrik'>Mesrapporter</div>

            {/* ARROW4 DROPDOWN */}
            <div className='maskinRubrik' > Arrow4 <BiChevronDown />
              <div className='mesrapportBox'>
                <div id="2" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste rapporten
                  <div id="3" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesSenaste}></iframe>
                  </div>
                </div>

                <div id="4" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste dygnet
                  <div id="5" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesDygn}></iframe>
                  </div>
                </div>

                <div id="6" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste veckan
                  <div id="7" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesVecka}></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* RTL 1 DROPDOWN */}
            <div className='maskinRubrik'>RTL1 <BiChevronDown />
              <div className='mesrapportBox'>
                <div id="8" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste rapporten
                  <div id="9" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesSenaste}></iframe>
                  </div>
                </div>

                <div id="10" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste dygnet
                  <div id="11" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesDygn}></iframe>
                  </div>
                </div>

                <div id="12" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste veckan
                  <div id="13" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesVecka}></iframe>
                  </div>
                </div>
              </div>
            </div>




            {/* RTL 2 DROPDOWN */}
            <div className='maskinRubrik'>RTL2 <BiChevronDown />
              <div className='mesrapportBox'>
                <div id="14" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste rapporten
                  <div id="15" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesSenaste}></iframe>
                  </div>
                </div>

                <div id="16" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste dygnet
                  <div id="17" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesDygn}></iframe>
                  </div>
                </div>

                <div id="18" className="rapport" onClick={this.getId} onMouseLeave={this.mouseLeave}> Senaste veckan
                  <div id="19" className="wrap hidepdf">
                    <iframe id="scaled-frame" title='asd' src={arrow4MesVecka}></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chartfunction changeArrow4={this.changeArrow4} />
      </div >

    );
  }
}



export default apexchart;