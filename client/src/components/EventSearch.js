import React from 'react'
import { connect } from 'react-redux';
import { loadEvent, searchEventReset } from '../actions'
import Event from "../components/Event"

class EventSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          offset: 0,
          data: [],
          perPage: 5,
          currentPage: 0
        };
      }
    
      handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
      }
    
      componentDidMount() {
        this.props.loadEvent();
      }
    
      render() {
        let search = this.state.search.trim().toLowerCase();
        let filteredData = this.props.events;
    
        if (search !== "") {
          filteredData = filteredData.filter(
            (item) =>
              item.datas.title.toLowerCase().includes(search) ||
              item.datas.location.toLowerCase().includes(search) ||
              item.datas.date.toLowerCase().includes(search) ||
              item.datas.members.toString().toLowerCase().includes(search)
          );
        }
    
        const listItems = filteredData.map((item, index) => (
          <Event key={index} id={index + 1} events={{ ...item }} />
        ));

        return (

            <form onSubmit={this.handleSubmit} className="row">
            <div className="col-lg-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={this.handleSearchChange}
                  value={this.state.search}
                />
              </div>
            </div>
          </form>
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    loadEvent: () => dispatch(loadEvent()),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventSearch)