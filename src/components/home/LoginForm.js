import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class LoginForm extends Component {

  getStyles() {
    return {
      buttonsBlockStyle: {
        display: 'flex',
        textAlign: 'left',
        justifyContent: 'center',
        marginTop: 16,
      },
    }
  }

  render() {
    let {buttonsBlockStyle} = this.getStyles()

    return(<div>
          <TextField
            fullWidth={true}
            hintText="myemail@mail.com"
            floatingLabelText="e-mail"
          />
          <TextField
            fullWidth={true}
            type="password"
            floatingLabelText="пароль"
          />
          <div style={buttonsBlockStyle}>
            <FlatButton primary={true} label="Войти" />
          </div>
    </div>)
  }
}

export default LoginForm