import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as pageActions from '../actions/page'

class Home extends Component {
  render() {
    return(
      <div>Home page</div>
    )
  }

  componentWillMount() {
    this.props.pageActions.setPageTitle('POPSER');
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
