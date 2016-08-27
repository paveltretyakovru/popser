import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

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

  handeChangeInput(event) {
    console.log('Change input');
    this.state = this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const {buttonsBlockStyle} = this.getStyles()
    const TextFields = [
      {
        type: 'text',
        name: 'email',
        hintText: 'myemail@mail.com',
        floatingLabelText: 'e-mail',
      },
      {
        type: 'password',
        name: 'password',
        hintText: null,
        floatingLabelText: 'пароль',
      },
    ]

    return(<div>
          {
            TextFields.map((el, index) => {
              return(<TextField
                key={index}
                type={el.type}
                name={el.name}
                value={this.state[el.name]}
                hintText={el.hintText}
                fullWidth={true}
                onChange={::this.handeChangeInput}
                floatingLabelText={el.floatingLabelText}
              />)
            })
          }
          <div style={buttonsBlockStyle}>
            <FlatButton primary={true} label="Войти" />
          </div>
    </div>)
  }
}

export default LoginForm
