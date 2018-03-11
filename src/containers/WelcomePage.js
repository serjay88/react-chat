import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { signup, login, recieveAuth } from '../actions'
import WelcomePage from '../components/WelcomePage';
=======
import { signup, login } from '../actions';
import WelcomePage from "../components/WelcomePage";
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

<<<<<<< HEAD
const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
  recieveAuth,
=======
const mapDispatchToState = dispatch => bindActionCreators({
  signup,
  login,
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
}, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps
=======
  mapDispatchToState
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
)(WelcomePage);
