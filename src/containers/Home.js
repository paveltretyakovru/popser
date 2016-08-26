import LoginForm from '../components/home/LoginForm'
import {connect} from 'react-redux'
import * as pageActions from '../actions/page'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Home extends Component {
  getStyles() {
    return {
      colsStyle: {
        marginTop: 16,
        textAlign: 'left',
      },
      imgBlockStyle: {
        textAlign: 'center',
      },
      imgStyle: {
        width: '80%',
      },
    }
  }

  render() {
    let {colsStyle, imgBlockStyle, imgStyle} = this.getStyles()

    return(<div className="row center-xs middle-md">
      <div style={colsStyle} className="col-xs-11 col-md-4">
          <LoginForm />
      </div>
      <div
        style={{...colsStyle, ...imgBlockStyle}}
        className="col-xs-11 col-md-4 last-xs"
      >
        <img src="./images/cat_popcorn.png" style={imgStyle} />
      </div>
      <div style={colsStyle} className="col-xs-11 col-md-4 last-md">
        <Card>
          <CardHeader title="Регистрация" />
          <CardText>
            REG
          </CardText>
        </Card>
      </div>
    </div>)
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
