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
    save_change,
    ownership,
} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const edit_details = (props) => {
    const [gname, setgname] = useState('')
    const [gcode, setgcode] = useState('')
    const [owner, setowner] = useState('')
    const [contact, setcontact] = useState('')
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={styles.container}>
            <View style={[styles.textInputStyle,{width:'100%',marginTop:24}]}>
                <FloatingLabelInput
                    label={'Group Name'}
                    value={gname}
                    onChangeText={value => setgname(value)}
                    containerStyles={{padding: 5}}
                    // labelStyles={styles.labelStyle}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                />
            </View>

            <View style={[styles.textInputStyle,{width:'100%',marginTop:16}]}>
                <FloatingLabelInput
                    label={'Group Code'}
                    value={gcode}
                    onChangeText={value => setgcode(value)}
                    containerStyles={{padding: 5}}
                    // labelStyles={styles.labelStyle}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                />
            </View>

            <View style={[styles.textInputStyle,{width:'100%',marginTop:16}]}>
                <FloatingLabelInput
                    label={'Owner'}
                    value={owner}
                    onChangeText={value => setowner(value)}
                    containerStyles={{padding: 5}}
                    // labelStyles={styles.labelStyle}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                />
            </View>

            <View style={[styles.textInputStyle,{width:'100%',marginTop:16}]}>
                <FloatingLabelInput
                    label={'Owner Contact'}
                    value={contact}
                    onChangeText={value => setcontact(value)}
                    containerStyles={{padding: 5}}
                    // labelStyles={styles.labelStyle}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                />
            </View>
            <TouchableOpacity style={{marginTop:40}}>
                <Image
                    source={save_change}
                    style={{width:'100%',height:48}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,{marginTop:16}]} >
                <Text style={styles.email,{fontSize:18,color:theme.colors.labelColor}}>Transfer Ownership</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

    

export default edit_details;
