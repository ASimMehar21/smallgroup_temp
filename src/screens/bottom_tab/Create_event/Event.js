/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
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
    right,
    left,
    add,
    option,
    seeMore
} from '../../../assets';
import {Fonts} from '../../../utils/Fonts';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
import HeaderRight from '../../../components/HeaderRight';
import {Header} from 'react-native-elements';

import { Calendar } from 'react-native-calendars'
import moment from 'moment'

const _today = moment().format(_format)
const _format1 = 'YYYY-MM-DD'
const _format = 'LL'


const initialState = {
    [_today]: { disabled: false }
}

const events = [
    {
        start:'7:00 PM',
        ends:'9:00 PM ',
        Title:'Weekly Community Group',
        address:'1234 Street Name, City, ST 12345'
    },
    {
        start:'7:00 PM',
        ends:'9:00 PM ',
        Title:'Weekly Community Group',
        address:'1234 Street Name, City, ST 12345'
   },
]

export default function Events(props) {

    

    const [modalVisible, setmodalVisible] = useState(false);
    const [markedDays, setmarkedDays] = useState([]);
    const [_markedDates, set_markedDates] = useState(initialState);
    const dot = {key: 'dot', color: '#4E73F8', selectedDotColor: '#4E73F8'};
    
    

    async function onDaySelect  (day)  {

        // console.log(day);
        // const _selectedDay2 = moment(day.dateString).format(_format);
        // if (markedDays.indexOf(_selectedDay2) === -1) markedDays.push(_selectedDay2);
        // this.state.markedDays.push(_selectedDay2)

        const _selectedDay1 = moment(day.dateString).format(_format1);
       
        let selected = true;
        let marked = true;
        let dots = [dot];

        if (_markedDates[_selectedDay1]) {
            // Already in marked dates, so reverse current marked state
            selected = !_markedDates[_selectedDay1].selected;
            marked = !_markedDates[_selectedDay1].marked;
        }

        // Create a new object using object property spread since it should be immutable
        // Reading: https://davidwalsh.name/merge-objects
        const updatedMarkedDates = { ..._markedDates, ...{ [_selectedDay1]: 
            {dots , selected} } }

        // Triggers component to render again, picking up the new state
        set_markedDates(updatedMarkedDates)
        

    }


    return (
        <View style={{flex:1,backgroundColor:'white',marginTop:20}}>
            <View style={{ paddingTop: 16 }}>
                <Calendar
                    horizontal={true}
                    onDayPress={day => onDaySelect(day)}
                    // markedDates={{ [this.state.markedDay]: { selected: true } }}
                    markedDates={_markedDates}
                    // markedDates={markedDate}
                    markingType={'multi-dot'}
                    // pastScrollRange={24}
                    // futureScrollRange={24}
                    enableSwipeMonths={true}
                    // hideExtraDays={true}
                    scrollEnabled={true}
                    renderArrow={(direction) => (<Image source = {direction === "left" ?left:right} style={{width:7,height:14}}/>)}
                    headerStyle={{
                        height:52,
                        backgroundColor:'#F8F8F8'
                    }}
                    todayButtonStyle={{
                        width:40,
                        height:40,
                        backgroundColor:theme.colors.txtblue
                    }}
                    // markingType={'multi-dot'}
                    style={{
                        // borderWidth: 1,
                        // borderColor: 'gray',
                        margin: 10,
                        // elevation: 5,
                        height: 330
                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: theme.colors.labelColor,
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: 'rgba(78, 115, 248, 0.24)',
                        selectedDayTextColor: '#6989FE',
                        todayTextColor: '#6989FE',
                        dayTextColor: theme.colors.gray,
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: 'red',
                        arrowColor:theme.colors.labelColor,
                        arrowStyle:{
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:8,
                            backgroundColor:'white',
                            // borderWidth:1,
                            width:24,
                            height:24,
                            elevation:5
                        },
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: theme.colors.textHeader,
                        indicatorColor: 'green',
                        textDayFontFamily: Fonts.DMBold,
                        textMonthFontFamily: Fonts.DMBold,
                        textDayHeaderFontFamily: Fonts.DMRegular,
                        textDayFontWeight: '700',
                        textMonthFontWeight: '700',
                        textDayHeaderFontWeight: '400',
                        textDayFontSize: 14,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 15,
                        // textDayHeaderc: 16
                    }}
                
                />
            </View>
            <View style={{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'center'}}>
                <Text style={[styles.inputStyles,{width:'90%'}]}>Events</Text>
                <TouchableOpacity>
                    <Image 
                        source={add} 
                        style={{width:16,height:16}}
                    />
                </TouchableOpacity>

                <FlatList
                style={[styles.container,{marginBottom:60}]}
                showsVerticalScrollIndicator={false}
                data={events}
                renderItem={({ item, index }) =>
    
                <View style={{
                    maxWidth:'95%',
                    borderRadius:8,
                    margin:8,
                    padding:24,
                    borderWidth:1,
                    borderColor:theme.colors.borderColor
                }}>
                    <View style={{flexDirection:'row'}}>     
                        <Text style={{
                            width:'95%',
                            fontFamily:Fonts.DMBold,
                            color:theme.colors.gray,
                            fontSize:16,
                            fontWeight:'700'
                        }}
                        >{item.start} - {item.ends}</Text>
                        <TouchableOpacity onPress={()=>setmodalVisible(true)}>
                            <Image
                                source={option}
                                style={{width:24,height:24}}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{
                            marginTop:4,
                            fontFamily:Fonts.DMRegular,
                            color:theme.colors.gray,
                            fontSize:16,
                            fontWeight:'400'
                        }}
                    >{item.Title}</Text>
                    
                    <View style={{
                        marginTop:22,
                        flexDirection:'row',
                        alignItems:'flex-end'
                    }}>
                        <Text style={{  
                            // alignSelf:'center',
                            width:'70%',
                            fontFamily:Fonts.DMMedium,
                            color:theme.colors.labelColor,
                            fontSize:14,
                            fontWeight:'normal'
                        }}>{item.address}</Text>
                        
                    </View>
                    
                </View>
            
                }/>

            </View>
        </View>
    )
}
