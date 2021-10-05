import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, AsyncStorage} from 'react-native';
import {icon} from '../../assets';
import styles from './styles';
import {connect} from 'react-redux';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPage: 'OnBoarding',
    };
  }
  componentDidMount = () => {
    this.splashDone();
  };
  splashDone = () => {
    setTimeout(() => {
      this.props.navigation.navigate(this.props.isLoggedIn ? 'Root' : 'Signin');
    }, 2000);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden={true} />
        <ImageBackground
          source={icon}
          style={styles.splashStyle}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const {status, message, interest, isLoading, errMsg, isSuccess, isLoggedIn} =
    state.auth;
  return {status, message, isLoading, errMsg, isSuccess, interest, isLoggedIn};
};

export default connect(mapStateToProps)(Splash);
