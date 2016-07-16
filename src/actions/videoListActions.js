import * as types from '../constants/actionTypes';

export function selectVideo(settings) {
   
  return {type: types.VIDEO_SELECTED, settings};
}

