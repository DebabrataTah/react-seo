import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = () => state => state.get('browser');

/**
 * Default selector used by Home
 */
const selectHomeBody = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('body').toJS()
);

const selectHomeHead = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.get('head').toJS()
);

export {
  selectHomeBody,
  selectHomeHead
};
