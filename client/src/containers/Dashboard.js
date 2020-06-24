import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { loadEvent } from "../actions";
import { connect } from "react-redux";
import Event from "../components/Event"
import EventSearch from "../components/EventSearch"
import Pagination from "../components/Pagination"


class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadEvent();
  }
  render() {
    const nodes = this.props.events.map((item, index) => {
      console.log(item, 'ini item');

      return (
        <Event
          id={item.datas && item.datas.id} index={index + 1}
          title={item.datas && item.datas.title}
          location={item.datas && item.datas.location}
          date={item.datas && item.datas.date}
          members={item.datas && item.datas.members}
          note={item.datas && item.datas.note}
        />
      )
    })

    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <EventSearch />
                </div>
              </form>
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Participant</th>
                      <th scope="col">Note</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {nodes}
                  </tbody>
                </table>
                <Pagination />

              </div>
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  loadEvent: () => dispatch(loadEvent())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
