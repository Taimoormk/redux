import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { plusOneToCounter, negativeOneToCounter } from '../actions/index';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      workAroundReactState: 0
    }
  }

  incrementHandler() {
    let { store } = this.props;
    this.setState({
      workAroundReactState: 1
    })
    store.dispatch(plusOneToCounter());
  }

  decrementHandler() {
    let { store } = this.props;
    this.setState({
      workAroundReactState: 1
    })
    store.dispatch(negativeOneToCounter());
  }

  render() {
    let { store } = this.props;
    return (
      <div className="app">
        <div className="verticle-align container col-md-2 col-md-offset-5">
          <h2>Counter Example</h2>
          <div className="text-center">
            <button
              className="btn btn-primary"
              style={{ margin: '5px' }}
              onClick={this.incrementHandler.bind(this)}
            >
              Increment
          </button>
            <button
              className="btn btn-danger"
              style={{ margin: '5px' }}
              onClick={this.decrementHandler.bind(this)}
            >
              Decrement
          </button>
          </div>
          <h2 className="text-center">Value : {store && store.getState().counter}</h2>
        </div>
      </div>
    );
  }
}

App.propsTypes = {
  //getVideos: PropTypes.func.isRequired,
}