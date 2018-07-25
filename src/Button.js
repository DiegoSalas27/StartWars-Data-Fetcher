import React, {Component} from 'react';

class Button extends Component {

  render() {
    return(
      <div>
      <button className='mt2 mr1 f6 link dim ph3 pv2 mb2 dib white bg-dark-blue br3 grow' onClick={this.props.onClick}>
        Get Response
      </button>
      </div>
    );
  }
}

export default Button;