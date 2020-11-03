import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-onsenui';
import Grandchild from 'Grandchild.jsx';

export default class Child extends React.Component {


  render() {
    return (
      <Card>
        <div>Child</div>
        <div>カウント:{this.props.count}</div>
        <Button modifier="large" onClick={this.props.decrementCount}>Down</Button>
        <Grandchild count={this.props.count} clearupdate={this.clearupdate} clearCount={this.props.clearCount} />
      </Card>
    );
  }
}
