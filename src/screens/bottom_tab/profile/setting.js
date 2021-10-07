/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React , {useState} from 'react';
import { View,
    Text,
    Switch,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    KeyboardAvoidingView} from 'react-native';
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import styles from './syles';
import {
    message,
    logout,
    arrow
} from '../../../assets';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Chat({props}) {

    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView>
        <View style={styles.tabcontainer}>
            <Text style={[styles.tabtext,{color:theme.colors.textHeader}]} >Notifications</Text>
            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'90%'}]}>New Messages</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4E73F8" }}
                    thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
                    ios_backgroundColor="#4E73F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'90%'}]}>New Events</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4E73F8" }}
                    thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
                    ios_backgroundColor="#4E73F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'90%'}]}>Event Reminders</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4E73F8" }}
                    thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
                    ios_backgroundColor="#4E73F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'90%'}]}>New Prayers</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4E73F8" }}
                    thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
                    ios_backgroundColor="#4E73F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'90%'}]}>Comments on Prayers</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4E73F8" }}
                    thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
                    ios_backgroundColor="#4E73F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            
            <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:36}]} >Calenders</Text>
            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'90%'}]}>Sync Calender Events</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4E73F8" }}
                    thumbColor={isEnabled ? "#ffff" : "#f4f3f4"}
                    ios_backgroundColor="#4E73F8"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:36}]} >Legal Stuff</Text>
            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'93%'}]}>Terms of Service</Text>
                <Image 
                    source={arrow}
                    style={{width:16,height:14}}
                />
            </View>
            <View style={{flexDirection:'row',marginTop:16}}>
                <Text style={[styles.inputStyles,{fontSize:18,width:'93%'}]}>Privacy Policy</Text>
                <Image 
                    source={arrow}
                    style={{width:16,height:14}}
                />
            </View>
            <View style={{flexDirection:'row',marginTop:48}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Image 
                        source={message}
                        style={{width:22,height:22}}
                    />
                    <Text style={[styles.inputStyles,{fontSize:18,width:'90%',marginLeft:18}]}>Need Help?</Text>
                </TouchableOpacity>    
            </View>
            <View style={{flexDirection:'row',marginTop:28,marginBottom:30}}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Auth',{screen:'Signin'})} style={{flexDirection:'row'}}>
                    <Image 
                        source={logout}
                        style={{width:22,height:22}}
                    />
                    <Text style={[styles.inputStyles,{fontSize:18,width:'90%',marginLeft:18}]}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}
