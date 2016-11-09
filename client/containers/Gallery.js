import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchGallery } from '../Actions';

class Gallery extends Component {

  componentDidMount() {
      this.props.FetchGallery('hot');
  }

  renderGallery(img, i) {
    const imgLink = img.link;
    const imgDescription = img.description;
    return (
      <div className="gallery-img" key={i}>
        <div className="gallery-img--thumb">
          <img src={imgLink} />
        </div>
        <div className="gallery-img--desc">
          <p>{imgDescription}</p>
        </div>
      </div>
    );
  }

  sectionEvent(e) {
    this.props.FetchGallery(e.target.value);
  }

  render() {
    if(!this.props.gallery) {
      return (
          <div>
            Loading ...
          </div>
      );
    } else {
      return (
        <div>
          <div>Gallery </div>
          <div><button onClick={this.sectionEvent.bind(this)} value='hot'>Hot</button> <button onClick={this.sectionEvent.bind(this)} value='top'>Top</button> <button onClick={this.sectionEvent.bind(this)} value='user'>User</button></div>
          <div className="gallery-container">
            { this.props.gallery.map(this.renderGallery) }
          </div>
        </div>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { FetchGallery }, dispatch);
}

function mapStateToProps({ gallery }) {
    return { gallery };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
