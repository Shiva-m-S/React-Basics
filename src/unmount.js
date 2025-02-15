
 
import React from 'react'
class Unmount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
  
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Header />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
      delHeader = () => {
      this.setState({show: false});
    }
}
  
  class Header extends React.Component {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
  

  export default Unmount;