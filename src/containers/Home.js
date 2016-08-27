import LoginForm from '../components/home/LoginForm'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import RegisterForm from '../components/home/RegisterForm'
import * as pageActions from '../actions/page'
import * as userActions from '../actions/user'
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

class Home extends Component {
  getStyles() {
    return {
      colsStyle: {
        marginTop: 24,
        textAlign: 'left',
      },
      imgBlockStyle: {
        textAlign: 'center',
      },
      imgStyle: {
        width: '80%',
      },
      forgotBlockStyle: {
        textAlign: 'center',
        marginTop: 16,
      },
    }
  }

  render() {
    const {
      colsStyle, imgBlockStyle, imgStyle, forgotBlockStyle,
    } = this.getStyles()
    const { sendRegisterUser } = this.props.userActions
    const forgotButton = <FlatButton label="Забыли пароль?"/>


    return(<div>
      <div className="row center-xs middle-md middle-xs">

        <div style={colsStyle} className="col-xs-8 col-md-3">
            <LoginForm />
        </div>

        <div
          style={{...colsStyle, ...imgBlockStyle}}
          className="col-xs-8 col-md-3 last-xs"
        >
          {
            /* eslint-disable */
            (APP_MODE === 'SITE')
              ? <img src="./images/cat_popcorn.png" style={imgStyle} />
              : null
              /* eslint-enable */
          }
        </div>

        <div style={colsStyle} className="col-xs-8 col-md-3 last-md">
              <RegisterForm sendRegisterUser={sendRegisterUser} />
        </div>

      {/* ./ ROW */}
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-12" style={forgotBlockStyle}>
          {forgotButton}
        </div>
      </div>

    </div>)
  }

  componentWillMount() {
    // Устанавилваем зоголовок на сайте
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
    userActions: bindActionCreators(userActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
