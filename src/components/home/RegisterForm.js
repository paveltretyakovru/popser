import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const initialState = {
  email: '',
  password: '',
}

class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
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

  handleSendRegisterUser() {
    const data = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.sendRegisterUser(data)
      .then(
        (res) => {
          console.log('After request function, response success:', res)
        },
        (res) => {
          console.log('After request function, response failed', res)
        }
      )
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
        type: 'text',
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
            <FlatButton
              label="Зарегистрироваться"
              primary={true}
              onTouchTap={::this.handleSendRegisterUser}
            />
          </div>
    </div>)
  }
}

export default RegisterForm
