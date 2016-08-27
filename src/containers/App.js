import Menu from 'material-ui/Menu'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {connect} from 'react-redux'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import * as pageActions from '../actions/page'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Icons
import HomeIcon from 'material-ui/svg-icons/action/home'
import SearchIcon from 'material-ui/svg-icons/action/search'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    injectTapEventPlugin()
  }

  render() {
    let { drawerOpen } = this.props.page
    let { routeToSearch, toggleDrawer, routeToHome } = this.props.pageActions

    // Параметры для верхней панели сайта
    const AppBarOptions = {
      title: this.props.page.title,

      iconElementLeft: <IconButton onTouchTap={toggleDrawer}>
        <NavigationMenu></NavigationMenu>
      </IconButton>,

      iconElementRight: <IconButton onTouchTap={routeToSearch}>
        <ActionSearch></ActionSearch>
      </IconButton>,
    }

    // DRAWER TOGGLING MENU
    const MenuItems = [
      {title: 'Главная', leftIcon: <HomeIcon />, onTouchTap: routeToHome},
      {title: 'Поиск', leftIcon: <SearchIcon />, onTouchTap: routeToSearch},
    ]
    const DrawerMenu = <Drawer
      open={drawerOpen}
      width={200}
      docked={false}
      disableSwipeToOpen={true}
    >
      <AppBar onTouchTap={toggleDrawer} title="POPSER" />
      <Menu>
        {
          MenuItems.map((el, index) => {
            return(
              <MenuItem
                key={index}
                leftIcon={el.leftIcon}
                onTouchTap={() => {
                  el.onTouchTap()
                  toggleDrawer()
                }}
              >
                {el.title}
              </MenuItem>
            )
          })
        }
      </Menu>
    </Drawer>

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~~~~~ RENDERING ~~~~~~~~
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    return(
      <MuiThemeProvider>
        <div>

          {/* APP_BAR */}
          <AppBar { ...AppBarOptions } />

          {/* PAGE CONTAINER */}
          <div className="container">{ this.props.children }</div>

          {/* DAWER - TOGGLER MENU */}
          {DrawerMenu}

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
