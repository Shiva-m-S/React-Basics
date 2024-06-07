import React from 'react'
class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          brand:'Bugati',
          color:'blue',
          favoritecolor: "red"
        }
    }
    // componentDidMount() {
    //   setTimeout(() => {
    //     this.setState({favoritecolor: "yellow"})
    //   }, 1000)
    // }
    //  static getDerivedStateFromProps(props, state){
    //   return {
    //     brand:'Range Rover'
    //   }
    // }
    changeBrand = () => {
      this.setState({brand: "Mustang"});
    }
    // shouldComponentUpdate() {
    //   return false;
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    }
    componentDidUpdate() {
      document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
      return (
        <>
          <h2>Hi, I am a {this.props.color}, {this.state.brand} Car!</h2>
          <button
            type="button"
            onClick={this.changeBrand}
          >Change Brand</button>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <div id="div1"></div>
          <div id="div2"></div>
          <button type="button" onClick={this.delHeader}>Delete Component</button>
        </>
      )
    }
  }
  export default Car;