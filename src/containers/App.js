import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import ActionSearch from 'material-ui/svg-icons/action/search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

class App extends Component {
  componentWillMount() {
    injectTapEventPlugin()
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Popser"
            iconElementLeft={
              <IconButton><NavigationMenu></NavigationMenu></IconButton>
            }
            iconElementRight={
              <IconButton><ActionSearch></ActionSearch></IconButton>
            }
          />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
