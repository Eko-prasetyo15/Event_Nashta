import React from 'react'

export default class EventSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange = (event) => {
    this.props.updateSearch(event.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={this.handleSearchChange}
            value={this.props.search}
          />
        </div>
      </div>
    )
  }
}