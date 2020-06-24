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
    this.state = {
      search: '',
      page: 1,
      limit: 2,
    }
  }
  componentDidMount() {
    this.props.loadEvent();
  }
  render() {
    const { page, limit } = this.state
    const search = this.state.search.trim().toLowerCase()
    const dataNew = (this.props.events || []).filter(
      (item) =>
        item.datas.title.toLowerCase().includes(search) ||
        item.datas.location.toLowerCase().includes(search) ||
        item.datas.date.toLowerCase().includes(search) ||
        item.datas.members.join().toLowerCase().includes(search)
    )

    const total = dataNew.length

    const dataNewSplice = dataNew.slice(((page - 1) * limit), ((page - 1) * limit) + limit)
    console.log(dataNew, dataNew.slice(1, 2), dataNewSplice, ((page - 1) * limit), limit);

    const nodes = dataNewSplice.map((item, index) => {
      return (
        <Event
          key={`${index}_`}
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
                  <EventSearch updateSearch={(val) => this.setState({ search: val, page: 1 })} search={search} />
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
                <Pagination updatePage={(page) => this.setState({ page })} limit={limit} currentPage={page} total={total} />

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
