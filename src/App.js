import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {tog : false}
    
     
   }

   onclick = ()=> {

  this.setState({tog:!this.state.tog})
}

  render() {
    return (
      <div className="App">
<div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display: this.state.tog? "block":"none"}} id="mySidebar" style ={{width :this.state.tog? "25%": "0%"}}>
  <button className="w3-bar-item w3-button w3-large"
  onClick={this.onclick}>Close &times;</button>
  <a href="#" className="w3-bar-item w3-button">Link 1</a>
  <a href="#" className="w3-bar-item w3-button">Link 2</a>
  <a href="#" className="w3-bar-item w3-button">Link 3</a>
</div>

<div id="main" style ={{marginLeft :this.state.tog? "25%": "0%"}}>

<div className="w3-teal">
  <button id="openNav" className="w3-button w3-teal w3-xlarge" style={{display: this.state.tog? "none":"inline-block"}} onClick={this.onclick}>&#9776;</button>
  <div className="w3-container">
    <h1>My Page</h1>
  </div>
</div>

<img src="https://images.salaun-holidays.com/(Image)-image-Norvege-Geiranger-fjord-58-fo_120403400-09032017.jpg" alt="Car" style={{width:"100%"}}/>

<div className="w3-container">
<p>In this example, the sidebar is hidden (style="display:none")</p>
<p>It is shown when you click on the menu icon in the top left corner.</p>
<p>When it is opened, it shifts the page content to the right.</p>
<p>We use JavaScript to add a 25% left margin to the div element with id="main" when this happens. The value "25%" matches the width of the sidebar.</p>
</div>

</div>
     </div>
    );
  }
}

export default App;

