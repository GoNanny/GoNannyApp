import React from 'react';
import '../CSS/dropDownAcademy.css'

class DropdownAcademy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
      <div className="custom-dropdown">
        <select value={this.state.selectedOption} onChange={this.handleChange}>
          <option value="">Select Academy</option>
          <option value="MTA">The academic college of Tel-Aviv Yaffo</option>
          <option value="TAU">Tel-Aviv University</option>
          <option value="RUNI">Reichman University</option>
        </select>
        {/* <p>Selected option: {this.state.selectedOption}</p> */}
      </div>
    );
  }
}

export default DropdownAcademy;