import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button } from 'react-onsenui';
import Child from 'Child.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, data: ""};
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.clearCount = this.clearCount.bind(this);
  }
  // this.state.countの値を１増やす
  incrementCount() {
    var state = this.state;
    state.count += 1;
    this.setState(state); // this.stateを更新
  }
  // this.state.countの値を１減らす
  decrementCount() {
    var state = this.state;
    state.count -= 1;
    this.setState(state); // this.stateを更新
  }
  // this.state.countの値を0にする
  clearCount(){
    var state = this.state;
    state.count = 0;
    this.setState(state); // this.stateを更新 
  }

  render() {
    return (
      <Page>
        <div>App</div>
        <div>カウント:{this.state.count}</div>
        <Button modifier="large" onClick={this.incrementCount}>Up</Button>
        {/* AppのcountとupdateFromChildを渡して、propsで参照できるようにする */}
        <Child count={this.state.count} decrementCount={this.decrementCount} clearCount={this.clearCount} />
        
      </Page>
    );
  }
}