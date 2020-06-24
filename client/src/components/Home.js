import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import List from "../containers/List";


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <section className="mainBG">
            <div className="jumbotron mainBG-txt mr0">
                <div className="container">
                    <div className="row text-center jum-bg">
                        <h1 className="mr0"><strong>  Welcome to NashTa Event List</strong></h1>
                        <p> creating solustion for your succes  </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
          <div className="col-sm-12">
          <List/>
          <br></br>
          </div>
        </div>
      </Fragment>
    )
  }
}