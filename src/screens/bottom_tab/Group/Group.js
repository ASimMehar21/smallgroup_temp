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
export default function Group(props) {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:responsiveScreenHeight(5)}]} >People</Text>
                <View style={{flexDirection:'row',marginTop:12}}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Member')} style={{flexDirection:'row'}}>
                    <Image 
                        source={userg2}
                        style={{width:40,height:40}}
                    />
                    <Text style={[styles.tabtext,{color:theme.colors.gray,marginLeft:16,width:'82%',alignSelf:'center'}]}>Brianna Louise</Text>
                    <Image 
                    source={arrow}
                    style={{width:16,height:14,alignSelf:'center'}}
                />
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Image 
                        source={userm}
                        style={{width:40,height:40}}
                    />
                    <Text style={[styles.tabtext,{color:theme.colors.gray,marginLeft:16,width:'82%',alignSelf:'center'}]}>David C.</Text>
                    <Image 
                    source={arrow}
                    style={{width:16,height:14,alignSelf:'center'}}
                />
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Image 
                        source={userg}
                        style={{width:40,height:40}}
                    />
                    <Text style={[styles.tabtext,{color:theme.colors.gray,marginLeft:16,width:'82%',alignSelf:'center'}]}>Allison Davidson</Text>
                    <Image 
                    source={arrow}
                    style={{width:16,height:14,alignSelf:'center'}}
                />
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Image 
                        source={userg}
                        style={{width:40,height:40}}
                    />
                    <Text style={[styles.tabtext,{color:theme.colors.gray,marginLeft:16,width:'82%',alignSelf:'center'}]}>Brianna Louise</Text>
                    <Image 
                    source={arrow}
                    style={{width:16,height:14,alignSelf:'center'}}
                />
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Image 
                        source={userg}
                        style={{width:40,height:40}}
                    />
                    <Text style={[styles.tabtext,{color:theme.colors.gray,marginLeft:16,width:'82%',alignSelf:'center'}]}>Brianna Louise</Text>
                    <Image 
                    source={arrow}
                    style={{width:16,height:14,alignSelf:'center'}}
                />
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <View style={{flexDirection:'row',marginTop:8}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Image 
                        source={userg}
                        style={{width:40,height:40}}
                    />
                    <Text style={[styles.tabtext,{color:theme.colors.gray,marginLeft:16,width:'82%',alignSelf:'center'}]}>Brianna Louise</Text>
                    <Image 
                    source={arrow}
                    style={{width:16,height:14,alignSelf:'center'}}
                />
                </TouchableOpacity>
            
            </View>
                <View style={styles.divider} />
                <Text style={[styles.tabtext,{color:theme.colors.textHeader,marginTop:40}]} >Settings</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Details')}  style={{flexDirection:'row',marginTop:16}}>
                    <Text style={[styles.inputStyles,{fontSize:18,width:'95%'}]}>Group Details</Text>
                    <Image 
                        source={arrow}
                        style={{width:16,height:14}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',marginTop:28}}>
                    <Text style={[styles.inputStyles,{fontSize:18,width:'95%'}]}>Privacy Policy</Text>
                    <Image 
                        source={add}
                        style={{width:16,height:16,alignSelf:'center'}}
                    />
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    )
}
