import React, {PropTypes} from 'react';
import Vimeo from 'react-vimeo';

class VideoPlayer extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        var currentLocation = this.props.location.pathname
        
        var videoId = currentLocation.substring(12,currentLocation.length);

        return (
            <div>

                <Vimeo videoId={ videoId } />
            </div>

        );
    };
}

VideoPlayer.propTypes = {
    actions: PropTypes.object.isRequired
};

export default VideoPlayer;

