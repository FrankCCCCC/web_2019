import React from 'react';

import './WeatherDisplayFore.css';
//import './sowfont-master/css/owfont-regular.css';

export default class WeatherDisplayFore extends React.Component {
  static propTypes = {
    masking: React.PropTypes.bool,
    unit: React.PropTypes.string,
    group: React.PropTypes.string,
    description: React.PropTypes.string,
    temp: React.PropTypes.number,
    group1: React.PropTypes.string,
    description1: React.PropTypes.string,
    temp1: React.PropTypes.number,
    group2: React.PropTypes.string,
    description2: React.PropTypes.string,
    temp2: React.PropTypes.number,
    group3: React.PropTypes.string,
    description3: React.PropTypes.string,
    temp4: React.PropTypes.number,
    group4: React.PropTypes.string,
    description4: React.PropTypes.string,

  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.code);
    console.log(this.props.group);
    console.log(this.props.description);
    console.log(this.props.temp);
    console.log(this.props.day);
    console.log(this.props.code1);
    console.log(this.props.group1);
    console.log(this.props.description1);
    console.log(this.props.temp1);
    console.log(this.props.day1);
    console.log(this.props.code2);
    console.log(this.props.group2);
    console.log(this.props.description2);
    console.log(this.props.temp2);
    console.log(this.props.day2);

    return (
      // <link href="owfont-master/css/owfont-regular.css" rel="stylesheet" type="text/css">
      <div>
        <div className={`weather-display ${this.props.masking ? 'masking' : ''}`}>
          <img src={`images/w-${this.props.group2}.png`}/>
          <i class = {`owf owf-${this.props.code}`}></i>
          <i class='owf owf-800 owf-5x'></i>
          <i class='owf owf-321'></i>
          <p className='description'>{this.props.description}</p>&nbsp;
            <h1 className='temp'>
              <span className='display-3'>{parseFloat(this.props.temp).toFixed(0)}&ordm;</span>
              &nbsp;{(this.props.unit === 'metric') ? 'C' : 'F'}
            </h1>
            <h3>{this.props.day}</h3>
          </div>

          <div class='row p3'>
            <div class='col' className={`weather-display ${this.props.masking ? 'masking' : ''}`}>
              <img src={`images/w-${this.props.group2}.png`}/>
              <i class = {`owf owf-${this.props.code1}`}></i>
              <p className='description'>{this.props.description1}</p>&nbsp;
                <h1 className='temp'>
                  <span className='display-3'>{parseFloat(this.props.temp1).toFixed(0)}&ordm;</span>
                  &nbsp;{(this.props.unit === 'metric') ? 'C' : 'F'}
                </h1>
                <h3>{this.props.day1}</h3>
              </div>

              <div class='col' className={`weather-display ${this.props.masking ? 'masking' : ''}`}>
                <img src={`images/w-${this.props.group2}.png`}/>
                <p className='description'>{this.props.description2}</p>&nbsp;
                  <h1 className='temp'>
                    <span className='display-3'>{parseFloat(this.props.temp2).toFixed(0)}&ordm;</span>
                    &nbsp;{(this.props.unit === 'metric') ? 'C' : 'F'}
                  </h1>
                  <h3>{this.props.day2}</h3>
                </div>

                <div class='col' className={`weather-display ${this.props.masking ? 'masking' : ''}`}>
                  <img src={`images/w-${this.props.group3}.png`}/>
                  <p className='description'>{this.props.description3}</p>&nbsp;
                    <h1 className='temp'>
                      <span className='display-3'>{parseFloat(this.props.temp3).toFixed(0)}&ordm;</span>
                      &nbsp;{(this.props.unit === 'metric') ? 'C' : 'F'}
                    </h1>
                    <h3>{this.props.day3}</h3>
                  </div>

                  <div class='col' className={`weather-display ${this.props.masking ? 'masking' : ''}`}>
                    <img src={`images/w-${this.props.group4}.png`}/>
                    <p className='description'>{this.props.description4}</p>&nbsp;
                      <h1 className='temp'>
                        <span className='display-3'>{parseFloat(this.props.temp4).toFixed(0)}&ordm;</span>
                        &nbsp;{(this.props.unit === 'metric') ? 'C' : 'F'}
                      </h1>
                      <h3>{this.props.day4}</h3>
                    </div>
          </div>
      </div>
    );
  }
}
