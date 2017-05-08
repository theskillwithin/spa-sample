import React, { Component } from 'react';

export default class Counter extends Component {
    static CLASS_NAME = 'Counter';

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }

    onClickUpButton() {
        this.setState({ count : this.state.count + 1 });
    }

    onClickDownButton() {
        this.setState({ count : this.state.count - 1 });
    }

    render() {
        const { count } = this.state;

        return (
          <div className={Counter.CLASS_NAME}>
              <p>
                  <button type="button" className={`${Counter.CLASS_NAME}__up Button`}   onClick={this.onClickUpButton.bind(this)}>+</button>
                  <button type="button" className={`${Counter.CLASS_NAME}__down Button`} onClick={this.onClickDownButton.bind(this)}>-</button>
              </p>
              <p>
                  <span className={`${Counter.CLASS_NAME}__count`}>{count}</span>
              </p>
          </div>
        );
    }
}
