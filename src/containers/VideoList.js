import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/videoListActions';
import Vimeo from 'react-vimeo';
import Gallery from 'react-photo-gallery';
import videoIndex from '../data/videos';
import {Link} from 'react-router';

export const VideoList = (props) => {

  function renderVideoCard() {

  }
  return (

    <div className="container">

      <div className="row">

        {videoIndex.map(function (video) {

          var videoLink = '/play-video/' + video.videoId;
          return (
            <div key={video.videoId}>
              <div className="col-lg-4 col-md-4 col-xs-6 thumb">
                <a className="thumbnail" href={videoLink}>
                  <img className="img-responsive" src={video.thumbnail} onClick={props.actions.selectVideo} alt={video.description}/>
                </a>



              </div>

            </div>
          );
        })
        }

      </div>

      <hr/>


      <footer>
        <div className="row">
          <div className="col-lg-12">
            <p>Footer</p>
          </div>
        </div>
      </footer>


    </div>



  );
};


VideoList.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    videoLost: state.videoList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);




