/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_PAGE_SUCCESS,
} from './constants';

const initialState = fromJS({
  head : {
    "canonical" : "n/a",
    "description" : "n/a",
    "keywords" : "n/a",
    "robots" : "n/a",
    "title" : "n/a"
  },
  body : {
    "h1" : "לורם איפסום",
    "h2" : "לורם איפסום דולור סיט אמט",
    "h3" : "קונסקטורר אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש",
    "p1" : "p1",
    "p2" : "p2",
    "p3" : "p3",
    "p4" : "p4"
  }
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGE_SUCCESS:
      return state.set('body', fromJS(action.payload.body))
        .set('head', fromJS(action.payload.head));
    default:
      return state;
  }
}

export default homeReducer;
