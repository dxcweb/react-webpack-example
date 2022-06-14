import React from "react";
import { connect } from "react-redux";

@connect(({ test }) => {
  return test;
})
class App extends React.PureComponent {
  onClickAdd = () => {
    this.props.dispatch({ type: "test/add" });
  };
  render() {
    const { num } = this.props;
    console.log(this.props);
    return (
      <div>
        <div>text212313:{num}</div>
        <div onClick={this.onClickAdd}>加1</div>
      </div>
    );
  }
}
export default App;
