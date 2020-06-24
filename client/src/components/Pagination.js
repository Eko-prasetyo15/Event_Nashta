import React, { Component } from "react";
// import ReactDOM from "react-dom";


export default class Pgination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 15
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    let pageNum = []
    for (let i = 0; i < Math.ceil(this.props.total / this.props.limit); i++) {
      pageNum.push(<li key={i} onClick={() => this.props.updatePage(i + 1)} className="page-item">
        <a className="page-link" href="#">{i + 1}</a>
      </li>)
    }

    return (
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            {pageNum}
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

