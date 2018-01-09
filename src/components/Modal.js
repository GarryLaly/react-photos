import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div>
        <div className={this.props.showModal ? 'modal fade show' : 'modal fade'} id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Detail</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img src={this.props.data.url} alt={this.props.data.title} className="w-100"/>
                <p>{this.props.data.title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={this.props.showModal ? 'modal-backdrop fade show' : 'modal-backdrop fade hide'}></div>
      </div>
    );
  }
}
