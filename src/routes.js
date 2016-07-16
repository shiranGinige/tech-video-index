import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import VideoList from './containers/VideoList';
import VideoPlayer from './components/VideoPlayer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={VideoList}/>
    <Route path="video-list" component={VideoList}/>
    <Route path="play-video/*" component={VideoPlayer}/>
  </Route>
);
