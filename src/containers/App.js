import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import ActionSearch from 'material-ui/svg-icons/action/search'
import * as pageActions from '../actions/page'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  constructor(props) {
    super(props)
    injectTapEventPlugin()
  }

  render() {
    let { routeToSearch } = this.props.pageActions

    // Параметры для верхней панели сайта
    const AppBarOptions = {
      title: this.props.page.title,
      iconElementLeft: <IconButton><NavigationMenu></NavigationMenu></IconButton>,
      iconElementRight: <IconButton onTouchTap={routeToSearch}><ActionSearch></ActionSearch></IconButton>,
    }

    return(
      <MuiThemeProvider>
        <div>

          {/* APP_BAR */}
          <AppBar { ...AppBarOptions } />

          {/* PAGE CONTAINER */}
          <div className="container">{ this.props.children }</div>

        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
