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
import {Header} from 'react-native-elements';

function member  (props)  {
    const [admin, setadmin] = useState(false)
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
             <Header
                backgroundColor="white"
                containerStyle={{borderBottomWidth: 0,alignSelf:'center'}}
                centerComponent={<HeaderCenterComponent name = {'Member Details'} />}
                leftComponent={<HeaderLeftComponent navigation={props.navigation} />}
                // rightComponent={<HeaderRight onPress={navigation} />}
            />
            <ScrollView style={{marginBottom:20}}>
                <View style={styles.container}>
                <Image
                    source={userg2}
                    style={styles.img}
                />
                <View>
                    <Text style={styles.labelStyle}>Brianna Louise</Text>
                    <Text style={[styles.labelStyle,{fontSize:16,color:theme.colors.labelColor,marginTop:0,fontFamily:Fonts.DMRegular}]} >Member</Text>
                </View>
                <View style={[styles.divider,{marginTop:32}]} />
                <View>
                    <Text style={[styles.labelStyle,{alignSelf:'flex-start',fontSize:12,color:theme.colors.labelColor,marginTop:6,fontFamily:Fonts.DMRegular}]} >EMAIL</Text>
                    <Text style={styles.email}>briananlouise234@gmil.com</Text>
                <View style={[styles.divider,{marginTop:6}]} />
                    <Text style={[styles.labelStyle,{alignSelf:'flex-start',fontSize:12,color:theme.colors.labelColor,marginTop:12,fontFamily:Fonts.DMRegular}]} >MOBILE</Text>
                    <Text style={[styles.email,{color:theme.colors.gray}]}>(575) 213-5962</Text>
                </View>
                <View style={[styles.divider,{marginTop:6}]} />
                {admin?
                <></>
                :
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.email,{fontSize:18,color:theme.colors.labelColor}}>Remove from this group</Text>
                    </TouchableOpacity>
                }
                </View>
            </ScrollView>
        </View>
    )
}

    

export default member;
