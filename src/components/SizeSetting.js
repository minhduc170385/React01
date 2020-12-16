import React,{Component} from 'react';

class SizeSetting extends Component {
  constructor(props){
    super(props);
  };

  onClickValue(value){
    //this.props.fontSize;
    //this.props.font += value;
    this.props.onReceiveFont(value)
    //alert(this.props.font);
  }
  render(){
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                    <h3 className="panel-title">Size: 15 px</h3>                    
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=>this.onClickValue(2) } >Giam</button>
                    <button type="button" className="btn btn-success" onClick={()=>this.onClickValue(-2) }>Tang</button>
                </div>
            </div>
        </div>      
    );
  }
}

export default SizeSetting;

