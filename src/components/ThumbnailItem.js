import React, { Component } from 'react';

export default class ThumbnailItem extends Component {
  render() {
    return (
      <div className="ThumbnailList-item" onClick={this.props.openModal}>
        <img src={this.props.image} alt={this.props.title} className="ThumbnailList-item-image w-100" />
        <p className="ThumbnailList-item-title text-center">{this.props.title}</p>
      </div>
    );
  }
}
