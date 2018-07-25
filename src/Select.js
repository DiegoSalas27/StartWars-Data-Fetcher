import React, {Component} from 'react';

class Select extends Component {

  render() {
    return(
    <div className='mt6 '>
    <select className='pa1 ba bg-lightest-blue' onChange={this.props.selectChange}>
      <option selected="default" value="default" disabled>--select option--</option>
      <option value="people">People</option>
      <option value="planets">Planets</option>
      <option value="species">Species</option>
    </select>
    </div>
    );
  }
}

export default Select;