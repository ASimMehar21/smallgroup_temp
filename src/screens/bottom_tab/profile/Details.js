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
import {Fonts} from '../../../utils/Fonts';
import styles from './syles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Chat() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');

    return (
        <KeyboardAwareScrollView>
            <View style={styles.tabcontainer}>
                <Text style={[styles.tabtext,{color:theme.colors.textHeader}]} >Full name</Text>
                <View style={{marginTop:12,flexDirection:'row'}}>
                    <View style={styles.textInputStyle}>
                        <FloatingLabelInput
                            label={'First Name'}
                            value={fname}
                            onChangeText={value => setFname(value)}
                            containerStyles={{padding: 5}}
                            // labelStyles={styles.labelStyle}
                            labelStyles={styles.labelStyles}
                            inputStyles={styles.inputStyles}
                        />
                    </View>
                    <View style={[styles.textInputStyle,{marginLeft:22}]}>
                        <FloatingLabelInput
                        label={'Last name'}
                        value={lname}
                        onChangeText={value => setLname(value)}
                        containerStyles={{padding: 5}}
                        labelStyles={styles.labelStyles}
                        inputStyles={styles.inputStyles}
                        />
                    </View>
            </View>
            <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:12}]} >Email address</Text>
                <View style={[styles.textInputStyle,{width:'100%',marginTop:12}]}>
                    <FloatingLabelInput
                        label={'Email Address'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        containerStyles={{padding: 5}}
                        // labelStyles={styles.labelStyle}
                        labelStyles={styles.labelStyles}
                        inputStyles={styles.inputStyles}
                    />
                </View>
            <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:24}]} >Password</Text>
            <View style={[styles.textInputStyle,{width:'100%',marginTop:12}]}>
                <FloatingLabelInput
                    label={'Password'}
                    value={password}
                    onChangeText={value => setPassword(value)}
                    containerStyles={{padding: 5}}
                    // labelStyles={styles.labelStyle}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                />
            </View>
            <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:24}]} >Phone Number</Text>
            <View style={[styles.textInputStyle,{width:'100%',marginTop:12}]}>
                <FloatingLabelInput
                    label={'Phone Number'}
                    value={number}
                    onChangeText={value => setNumber(value)}
                    containerStyles={{padding: 5}}
                    // labelStyles={styles.labelStyle}
                    labelStyles={styles.labelStyles}
                    inputStyles={styles.inputStyles}
                />
            </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
