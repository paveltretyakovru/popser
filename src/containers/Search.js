import {connect} from 'react-redux'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import * as pageActions from '../actions/page'

class Search extends Component {
  render() {
    return(
      <div>Search page</div>
    )
  }

  componentWillMount() {
    this.props.pageActions.setPageTitle('Поиск...');
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
