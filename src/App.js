import './App.css';
import React,{Component} from 'react';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import Reset from './components/Resest';
import SizeSetting from './components/SizeSetting';


class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      color:'red',
      fontSize:15
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetFont = this.onSetFont.bind(this);
  }
  
  onSetColor(params){
    this.setState({
      color:params
    })
  }

  onSetFont(params){
    var n = this.state.fontSize + params;
    this.setState({
      fontSize:n
    })
    console.log(this.state.fontSize);
  }

  render(){           
    return (
      <div className="container mt-50">
        <div className="row">
            <ColorPicker color = { this.state.color }   onReceiveColor={this.onSetColor} ></ColorPicker>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-5">
              <SizeSetting font = {this.state.fontSize} onReceiveFont = { this.onSetFont }   ></SizeSetting>
              <Reset></Reset>              
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Result color = { this.state.color } font ={ this.state.fontSize }></Result>
                
            </div>

        </div>    
      </div>
    );
  }
}








export default App;

