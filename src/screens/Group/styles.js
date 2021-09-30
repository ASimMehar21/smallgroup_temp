import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme';
const {width, height} = Dimensions.get('window');
import {Fonts} from '../../utils/Fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
  },
  nameField: {
    borderWidth: 1,
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: theme.colors.borderColor,
    borderRadius: 8,
    alignItems: 'center',
  },
  maincontainer: {
    borderWidth: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: theme.colors.borderColor,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagestyle: {height: 24, width: 24, marginRight: 10},
  textInputStyle: {
    color: 'black',
    width: '90%',
  },
  nametext: {
    color: 'black',
    width: '80%',
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: Fonts.DMRegular,
  },
  nextButtonStyle: {
    // backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  dividertxt: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Fonts.DMBold,
    color: theme.colors.dividerColor,
  },
  dividercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '99%',
    marginTop: 10,
  },
  divider: {
    width: '40%',
    borderWidth: 1,
    borderColor: theme.colors.dividerColor,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: Fonts.DMBold,
    color: theme.colors.textHeader,
  },
  smallheaderText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.DMRegular,
    color: theme.colors.textHeader,
    textAlign: 'center',
    marginTop: 10,
  },
  mediumheaderText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: Fonts.DMBold,
    color: theme.colors.textHeader,
  },
  namestyle: {
    fontFamily: Fonts.DMRegular,
    fontWeight: '500',
    fontSize: 18,
    color: theme.colors.gray,
  },
});
export default styles;
