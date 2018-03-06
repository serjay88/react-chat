import React from 'react';
import fetch from 'isomorphic-fetch';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  signUpButton: {
    width: '100%',
    marginTop: theme.spacing.unit * 2
  },
});

class SignupForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    },
    repeatedPassword: {
      value: '',
      isValid: true
    },
  }

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid }
    });

    return isValid;
  }

  hangeInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    } 

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value); 
  }

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword  } = this.state;
  
     return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          name="username"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.hangeInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password..."
          type="password"
          name="password"
          margin="normal"
          autoComplete="password"
          value={password.value}
          onChange={this.hangeInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          placeholder="Type your password..."
          type="password"
          name="repeatedPassword"
          margin="normal"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.hangeInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button
          fullWidth
          variant="raised"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Sign Up
        </Button>
    </form>
    );    
  }  
}
  


export default withStyles(styles)(SignupForm);
