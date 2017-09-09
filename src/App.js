import React, { Component } from 'react';
import {Slider} from "@blueprintjs/core/dist/components/slider/slider";
import '@blueprintjs/core/dist/blueprint.css';

import './App.css';

const rgb = (r,g,b) => `rgb(${r},${g},${b})`

const RgbSlider = (props) => (
  <Slider
    min={0}
    max={255}
    stepSize={1}
    labelStepSize={32}
    showTrackFill={false}
    {...props}
  />
)

class App extends Component {

  constructor () {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    }
  }

  render() {
    const {red, green, blue} = this.state;
    return (
      <div className="App" style={{ backgroundColor: rgb(red, green, blue)}}>
        <div className="App-selectorPanel">
          <table>
            <tbody>
              <tr>
                <td>
                  Red
                </td>
                <td>
                  <RgbSlider
                      onChange={this.getChangeHandler("red")}
                      value={this.state.red}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Green
                </td>
                <td>
                  <RgbSlider
                      onChange={this.getChangeHandler("green")}
                      value={this.state.green}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Blue
                </td>
                <td>
                  <RgbSlider
                      onChange={this.getChangeHandler("blue")}
                      value={this.state.blue}
                  />
                </td>
              </tr>
            </tbody>
          </table>          
        </div>
      </div>
    );
  }

  getChangeHandler(key) {
      return (value) => this.setState({ [key]: value });
  }

}

export default App;
