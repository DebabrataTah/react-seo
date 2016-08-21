/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { selectHomeHead , selectHomeBody } from './selectors';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { fetchPage } from './actions'

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const throttle = this.props.location.query.seconds || 1;
    this.props.dispatch(fetchPage(throttle));
  }
  
  render() {
    return (
      <div className={styles.home} dir="rtl">
      <Helmet
        title={this.props.head.title}
        meta={[
          { name: 'description', content: this.props.head.description },
          { name: 'keywords', content: this.props.head.keywords },
          { name: 'robots', content: this.props.head.robots }
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
  body : selectHomeBody(),
  head : selectHomeHead()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
