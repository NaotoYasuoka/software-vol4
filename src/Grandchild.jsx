import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-onsenui';

export default class Child extends React.Component {

  render() {
    return (
      <Card>
        <div>Grandchild</div>
        <div>カウント:{this.props.count}</div>
        <Button modifier="large" onClick={this.props.clearCount}>Clear</Button>
      </Card>
    );
  }
}