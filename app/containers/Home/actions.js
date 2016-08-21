/*
 *
 * Home actions
 *
 */

import {
  FETCH_PAGE,
} from './constants';

export function fetchPage(throttleSec) {
  return {
    type: FETCH_PAGE,
    throttleSec
  };
}
