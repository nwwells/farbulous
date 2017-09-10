// @flow

import React, { Component } from 'react';
import { Slider } from '@blueprintjs/core/dist/components/slider/slider';
import '@blueprintjs/core/dist/blueprint.css';

import './App.css';

const rgb = (r, g, b) => `rgb(${r},${g},${b})`;

type ChangeHandler = number => void;

type RgbRowProps = {
  color: string,
  value: number,
  onChange: ChangeHandler
};

const RgbRow = (props: RgbRowProps) => (
  <tr>
    <td style={{ textTransform: 'capitalize' }}>{props.color}</td>
    <td>
      <Slider
        min={0}
        max={255}
        stepSize={1}
        labelStepSize={32}
        showTrackFill={false}
        onChange={props.onChange}
        value={props.value}
      />
    </td>
  </tr>
);

class App extends Component {
  state = {
    red: 0,
    green: 0,
    blue: 0
  };

  render() {
    const { red, green, blue } = this.state;
    return (
      <div className="App" style={{ backgroundColor: rgb(red, green, blue) }}>
        <div className="App-selectorPanel">
          <table>
            <tbody>
              <RgbRow
                color={'red'}
                value={this.state.red}
                onChange={this.getChangeHandler('red')}
              />
              <RgbRow
                color={'green'}
                value={this.state.green}
                onChange={this.getChangeHandler('green')}
              />
              <RgbRow
                color={'blue'}
                value={this.state.blue}
                onChange={this.getChangeHandler('blue')}
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getChangeHandler(primaryColorName: string): ChangeHandler {
    return (value: number) => this.setState({ [primaryColorName]: value });
  }
}

export default App;
