import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import { postEvent } from "../actions";
import { connect } from "react-redux";
import history from "../history";
import ImageUpload from "../components/ImageUpload"

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: "",
      memberInput: "",
      members: [],
      note: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMemberChange = (event) => {
    this.setState({ memberInput: event.target.value })
  }

  addMember = () => {
    this.setState({
      members: [...this.state.members, this.state.memberInput],
    });
    this.setState({
      memberInput: ""
    });
  };

  deleteMembers = (event, id) => {
    event.preventDefault();
    console.log(this.state.members);
    this.setState((state) => ({
      members: state.members.filter((item) => item.id !== id),
    }));
  };

  handleSubmit = (event) => {
    this.props.postEvent(
      this.state.title,
      this.state.location,
      this.state.date,
      this.state.members,
      this.state.note,
      this.state.image
    );
    history.push("/")
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="login-block" method="post">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 login-sec">
                <h2 className="text-center">+Add Event</h2>
                <form className="mt-2" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      className="form-control"
                      id="title"
                      placeholder="input title"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location"
                      value={this.state.location}
                      onChange={this.handleChange}
                      className="form-control"
                      id="location"
                      placeholder="input location"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="participant">Participant</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="members"
                        value={this.state.memberInput}
                        onChange={this.handleMemberChange}
                        className="form-control"
                        id="participant"
                        placeholder="Participant name"
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={this.addMember}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      {this.state.members.map((item, index) => (
                        <div key={index} className="col-md-auto">
                          <div className="card mt-2">
                            <div className="card-body py-1 px-2">
                              {item}
                              <a
                                  href="/add"
                                  onClick={this.deleteMembers}
                                  className="ml-2"
                                >
                                  <i className="fa fa-times-circle text-dark"></i>
                                </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                      className="form-control"
                      id="date"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="note">Note</label>
                    <textarea
                      className="form-control"
                      name="note"
                      value={this.state.note}
                      onChange={this.handleChange}
                      id="note"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <ImageUpload getURL={(image)=> this.setState({image})} />
                  <br></br>
                  <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
              </div>
              <div className="col-md-8 banner-sec">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="https://i0.wp.com/www.beijingstandard.net/wp-content/uploads/2018/04/Program-Header-Mobile.png?w=1080" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        );
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postEvent: (title, location, date, members, note, image) =>
    dispatch(postEvent(title, location, date, members, note, image)),
});

export default connect(null, mapDispatchToProps)(AddEvent);
