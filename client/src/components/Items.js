import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import events from "../reducers/events";

export default function Item(props) {
  return (
    <div className="card-deck" >
      <div className="col-md-3">
        <div className="card" style={{ width: " 15rem" }}>
          <Link to="/dashboard">
            <img src={props.events && props.events.datas && props.events.datas.image || "https://badoystudio.com/wp-content/uploads/2018/11/apa-itu-programmer-750x410.jpeg"} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <small>
              <i className="fa fa-map-marker text-danger mr-1" aria-hidden="true"></i>
              {props.events && props.events.datas && props.events.datas.location}
            </small>
            <h5 className="card-title">{props.events && props.events.datas && props.events.datas.title}</h5>

            <small>
              <Moment format="D MMMM YYYY" withTitle>
                {props.event && props.events.datas && props.events.datas.date}
              </Moment>
            </small>
          </div>
          <ul className="list-group list-group-flush">
            <div className="list-group list-group-flush">
              <div className="list-group-item">
                <div className="row">
                  {props.events && props.events.datas && props.events.datas.members.map((item, index) => (
                    <div key={index} className="col-md-auto">
                      <div className="media">
                        <div className="media-body">
                          <small>{item}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ul>
          <li className="list-group-item">"{props.events && props.events.datas && props.events.datas.note}"</li>
        </div>
      </div>
    </div>
  );
}
