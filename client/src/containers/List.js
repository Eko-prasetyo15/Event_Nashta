import React, { Component } from "react";
import Items from "../components/Items";
import { loadEvent } from "../actions";
import { connect } from "react-redux";

class List extends Component {
  componentDidMount() {
    this.props.loadEvent();
  }

  render() {
    const listItems = this.props.events.map((item, index) => (
      <Items
        key={index}
        events={{...item}}
      />
    ));

    return (
      <div className="row">
        { listItems }
      </div>
    );
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
)(List)
