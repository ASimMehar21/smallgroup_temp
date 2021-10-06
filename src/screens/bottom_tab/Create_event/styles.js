/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../theme';
const {width, height} = Dimensions.get('window');
import {Fonts} from '../../../utils/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center',
    },
    img:{
        width:72,
        height:72,
        alignSelf:'center',
        marginTop:24
    },
    labelStyle: {
        marginTop:16,
        color:theme.colors.textHeader,
        alignSelf:'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Fonts.DMMedium,
      },
      tabview:{
        width:'90%',
        flexDirection:'row',
        height:32,
        borderRadius:8,
        alignSelf:'center',
        backgroundColor:'#F8F8F8',
        marginTop:17
      },
      activeTab:{
        height:24,
        backgroundColor:'white',
        width:175.5,
        borderRadius:8,
        alignItems:'center',
        alignSelf:'center',
        margin:4
      },
    offtab:{
        height:24,
        width:175.5,
        borderRadius:8,
        alignItems:'center',
        alignSelf:'center',
        margin:4
    },
    tabtext:{
        fontSize: 16,
        fontWeight: '700',
        fontFamily:Fonts.DMBold
    },
    tabcontainer:{
        marginTop:28,
        width:'90%',
        alignSelf:'center'
    },
    textInputStyle:{
        borderWidth:1,
        borderColor:'#E1E3E6',
        borderRadius:8,
        color: 'black',
        width:'47%',
        height:48
    },
    labelStyles:{
        fontSize:10,
        fontWeight:'400',
        fontFamily:Fonts.DMRegular,
        color:theme.colors.labelColor
    },
    inputStyles:{
        width: '100%',
        fontSize:14,
        fontWeight:'400',
        fontFamily:Fonts.DMRegular,
        color:theme.colors.gray
    },
    divider: {
        marginTop:8,
        alignSelf:'center',
        width: '100%',
        borderWidth: 0.3,
        borderColor: '#F1F2F3',
      },
    email:{
        fontSize:16,
        fontWeight:'500',
        fontFamily:Fonts.DMMedium,
        color:'#4E73F8',
      },
      btn:{
        width:'100%',
        height:48,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        borderWidth:0.5,
        borderColor:'#E1E3E6',
        borderRadius:8
      },
      centeredView: {
        // flex: 0.2,
        // justifyContent:'flex-end',
        // top:100,
        // bottom:0,
        // position:'absolute',
        height:'100%',
        // alignItems:'flex-end',
        // alignSelf:'flex-end',
        backgroundColor:'rgba(64, 77, 97, 0.5)',
      },
      modalView: {
        height:544,
        marginTop: 'auto',
        // bottom:0,
        width:'100%',
        // margin:10,
        // justifyContent:'center',
        backgroundColor: "#F8F8F8",
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
      },
  
});
export default styles;
