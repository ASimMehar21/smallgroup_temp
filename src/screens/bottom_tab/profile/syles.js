/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../../theme';
const {width, height} = Dimensions.get('window');
import {Fonts} from '../../../utils/Fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // width: '90%',
        // alignSelf: 'center',
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
        width:'48%',
        // width:175.5,
        borderRadius:8,
        alignItems:'center',
        alignSelf:'center',
        margin:4
      },
    offtab:{
        height:24,
        width:'48%',
        // width:175.5,
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
    }
  
});
export default styles;
