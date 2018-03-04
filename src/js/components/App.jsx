import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addOneToCounter, subtractOneToCounter } from '../actions/index';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      x: 0
    }
  }

  incHandler() {
    console.log('inc clicked');
    this.setState({
      x: 1
    })
    this.props.store.dispatch(addOneToCounter());
  }

  decHandler() {
    console.log('dec clicked');
    this.setState({
      x: 1
    })
    this.props.store.dispatch(subtractOneToCounter());
  }

  render() {
    return(
      <div className="app container">
        <h2>Counter Example</h2>
        <button
          className="btn btn-primary"
          style={{marginRight: '20px'}}
          onClick={this.incHandler.bind(this)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          style={{marginRight: '20px'}}
          onClick={this.decHandler.bind(this)}
        >
          Decrement
        </button>
        <h2>Value : {this.props.store && this.props.store.getState().counter}</h2>
      </div>
    );
  }
}

App.propsTypes = {
  //getVideos: PropTypes.func.isRequired,
}