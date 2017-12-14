import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import {Chart} from 'primereact/components/chart/Chart';
import {Button} from 'primereact/components/button/Button';
import buttonConfig from './config/buttonConfig.js'


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
            data :{
               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
               datasets: [
                   {
                       label: 'First Dataset',
                       data: [65, 59, 80, 81, 56, 55, 40],
                       fill: false,
                       borderColor: '#4bc0c0'
                   },
                   {
                       label: 'Second Dataset',
                       data: [28, 48, 40, 19, 86, 27, 90],
                       fill: false,
                       borderColor: '#565656'
                   }
               ]
           },
          type : 'line'
      };
      this.setRandomData = this.setRandomData.bind(this);
      this.setChart = this.setChart.bind(this);
      }

   setRandomData = () =>{
       const randomArr = Array.from({length: 7}, () => Math.floor(Math.random() * 100));
       const randomArr2 = Array.from({length: 7}, () => Math.floor(Math.random() * 100));
       let data = Object.assign({}, this.state.data);
       data.datasets[0].data = randomArr;
        data.datasets[1].data = randomArr2;
       console.log(data)
       this.setState({
         data
       })
   }


   setChart(id) {
     let [currentChart] = buttonConfig.filter((element) => element.id === id)
     console.log(currentChart)
      let data = Object.assign({}, this.state.data);
      this.setState({
        data,
        type : currentChart.type
      })
    }

    render() {

      return (
        <div className="App">
            <Button label="Random Data" className="ui-button" onClick={this.setRandomData}/>
            {buttonConfig.map((button)=>{
              return(
                <Button
                  label={button.label}
                  key={button.id}
                  className="ui-button"
                  onClick={() => this.setChart(button.id)
                }/>
              )
            })}
            <div className="chartContain">
            <Chart  type={this.state.type} data={this.state.data}  />
            </div>
        </div>
      );
    }
}

export default App;
