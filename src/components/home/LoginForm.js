import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class LoginForm extends Component {
  render() {
    return(<div>
      <Card>
        <CardHeader title="Вход" />
        <CardText>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    </div>)
  }
}

export default LoginForm
