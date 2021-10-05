/* eslint-disable prettier/prettier */
import React , {useState} from 'react'
import { View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    KeyboardAvoidingView} from 'react-native'
import theme from '../../../theme';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
  } from 'react-native-responsive-dimensions';
  import {
    add,
    userg,
    userg2,
    userm,
    arrow
} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';

 const group_details = (props) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
             <Header
                backgroundColor="white"
                containerStyle={{borderBottomWidth: 0,alignSelf:'center'}}
                centerComponent={<HeaderCenterComponent name = {'Group Details'} />}
                leftComponent={<HeaderLeftComponent navigation={props.navigation} />}
                rightComponent={<HeaderRight navigation={props.navigation} />}
            />
            <View style={styles.container}>
                <View style={[styles.divider,{marginTop:32}]} />
                    <View>
                        <Text style={[styles.labelStyle,{alignSelf:'flex-start',fontSize:12,color:theme.colors.labelColor,marginTop:6}]} >Group Name</Text>
                        <Text style={[styles.email,{color:theme.colors.gray}]}>Camarillo Group</Text>
                    <View style={[styles.divider,{marginTop:6}]} />
                        <Text style={[styles.labelStyle,{alignSelf:'flex-start',fontSize:12,color:theme.colors.labelColor,marginTop:12}]} >Group Code</Text>
                        <Text style={[styles.email,{color:theme.colors.gray}]}>AB18KH589</Text>
                    <View style={[styles.divider,{marginTop:6}]} />
                        <Text style={[styles.labelStyle,{alignSelf:'flex-start',fontSize:12,color:theme.colors.labelColor,marginTop:12}]} >Owner</Text>
                        <Text style={[styles.email,{color:theme.colors.gray}]}>Brianna Louise</Text>
                    <View style={[styles.divider,{marginTop:6}]} />
                        <Text style={[styles.labelStyle,{alignSelf:'flex-start',fontSize:12,color:theme.colors.labelColor,marginTop:12}]} >Owner Contact</Text>
                        <Text style={[styles.email,{color:theme.colors.gray}]}>briannalouise@email.com</Text>
                    </View>
                <View style={[styles.divider,{marginTop:6}]} />
                <TouchableOpacity onPress={()=>props.navigation.navigate('EditDetails')} style={styles.btn} >
                    <Text style={styles.email,{fontSize:18,color:theme.colors.labelColor}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

    

export default  group_details;
