/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectHome from './selectors';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { fetchPage } from './actions'

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(fetchPage());
  }
  
  render() {
    return (
      <div className={styles.home} dir="rtl">
      <Helmet
        title="tomp"
        meta={[
          { name: 'description', content: this.props.description },
          { name: 'keywords', content: this.props.keywords },
          { name: 'robots', content: this.props.robots }
        ]}
      />
        <h1>{this.props.body.h1}</h1>
        <h2>{this.props.body.h2}</h2>
        <h3>{this.props.body.h3}</h3>
        <div className={styles.text}>
          <p>{this.props.body.p1}</p>
          <p>{this.props.body.p2}</p>
          <p>{this.props.body.p3}</p>
          <p>{this.props.body.p4}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  body : selectHome()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
