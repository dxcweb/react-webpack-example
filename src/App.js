import React from "react";
import { connect } from "react-redux";
@connect(({ test }) => {
  return { test };
})
class App extends React.PureComponent {
  render() {
    return <div>111</div>;
  }
}
export default App;