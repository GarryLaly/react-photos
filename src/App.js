import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { fetchData, nextPage, prevPage } from './reducers/actions';

// Components
import ThumbnailItem from './components/ThumbnailItem.js';
import Modal from './components/Modal.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      modalData: {},
    }

    this.openModalDetail = this.openModalDetail.bind(this);
    this.closeModalDetail = this.closeModalDetail.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  prevPage() {
    this.props.prevPage();
    return false;
  }

  nextPage() {
    this.props.nextPage();
    return false;
  }

  openModalDetail(id) {
    const dataID = _.findIndex(this.props.appData.data, ['id', id]);
    const modalData = this.props.appData.data[dataID];
    console.log(modalData);
    this.setState({ modalShow: true, modalData });
  }

  closeModalDetail() {
    this.setState({ modalShow: false });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <a className="navbar-brand" href="/">React Photos</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        <div className="container">
          <div className="ThumbnailList">
            <div className="row">
              {
                this.props.appData.dataShow.map((photo, i) => {
                  return <div key={i} className="col-md-3">
                    <ThumbnailItem
                      id={photo.id}
                      image={photo.thumbnailUrl}
                      title={photo.title}
                      openModal={() => this.openModalDetail(photo.id)}
                      />
                  </div>
                })
              }
            </div>

            <nav aria-label="Page navigation example" className="mt-5">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#" onClick={() => this.prevPage()}>Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" onClick={() => this.nextPage()}>Next</a>
                </li>
              </ul>
              <p className="text-center">Page {this.props.appData.page} of {this.props.appData.pageCount}</p>
            </nav>
          </div>
        </div>

        <Modal
          showModal={this.state.modalShow}
          closeModal={this.closeModalDetail}
          data={this.state.modalData}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
    nextPage: () => dispatch(nextPage()),
    prevPage: () => dispatch(prevPage()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
