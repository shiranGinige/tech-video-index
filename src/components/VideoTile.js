import React, {PropTypes} from 'react';
import Vimeo from 'react-vimeo';

class VideoTile extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {

        const {video} = this.props;
        var videoLink = '/play-video/' + video.videoId;
        return (
            <div>

                <div key={video.videoId}>
                    <div className="col-lg-4 col-md-4 col-xs-6 thumb">
                        <a className="thumbnail" href={videoLink}>
                            <img className="img-responsive" src={video.thumbnail} onClick={props.actions.selectVideo} alt={video.description}/>
                        </a>

                    </div>
                </div>

            </div>

        );
    };
}

VideoTile.propTypes = {
    actions: PropTypes.object.isRequired
};

export default VideoTile;

