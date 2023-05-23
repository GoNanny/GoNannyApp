import React from 'react';
//import '../CSS/dropDownAcademy.css'

class DropdownMajor extends React.Component {
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
          <option value="">Select Major</option>
          <option value="CS">Computer Science</option>
          <option value="PSY">Psychology</option>
          <option value="IE">Industrial Engineering</option>
        </select>
      </div>
    );
  }
}

export default DropdownMajor;