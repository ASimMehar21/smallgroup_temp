/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    ScrollView} from 'react-native'
import theme from '../../../theme';
import {Fonts} from '../../../utils/Fonts';
import {
    userg,
    userg2,
    done,
    doc,
    download,
    lilg,
    userm} from '../../../assets';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import styles from '../../Signin/styles';
  import LinearGradient from 'react-native-linear-gradient';



 const chat = [
     {
         img:require('../../../assets/images/Userpic.png'),
         name:'Rachel Richards ❤️',
         time:'23:25 PM',
         textmsg:'Here we go! ☺️',
         msgtype:'sender',
         media:[],
         file:[],

     },
     {
        img:require('../../../assets/images/Userpicg.png'),
        name:'Brianna B',
        time:'23:25 PM',
        textmsg:'Hey! Can you remind me where we’re meeting this week?',
        msgtype:'sender',
        media:[],
        file:[],

    },
    {
        img:'',
        name:'You',
        time:'23:25 PM',
        textmsg:'Here we go! ☺️',
        msgtype:'you',
        media:{},
        file:[],

    },
    {
        img:require('../../../assets/images/Userpic4s.png'),
        name:'Roman Bellic',
        time:'23:25 PM',
        textmsg:'Hey guys check this out!',
        msgtype:'sender',
        file:[],

        media:[
            {
                type:"image.jpg",
                imag:require("../../../assets/images/car.jpg"),
                title:"Guy's Truck",
                size:'2.6 MB'
            },
            {
                type:"image.jpg",
                imag:require("../../../assets/images/car.jpg"),
                title:"Guy's Truck",
                size:'2.6 MB'
            }
        ],
    },
    {
        img:require('../../../assets/images/Userpic.png'),
        name:'Rachel Richards ❤️',
        time:'23:25 PM',
        textmsg:'Here are the teaching notes',
        msgtype:'sender',
        media:[],
        file:[
            {
                img:require('../../../assets/images/doc.png'),
                title:'Notes.doc',
                size:'43 MB',
                time:'19:31 PM',
            },
        ],
    },
    {
        img:require('../../../assets/images/Userpicg.png'),
        name:'Brianna B',
        time:'23:25 PM',
        textmsg:'Hey guys! Here’s the reminder that we’re meeting at our house tonight!',
        msgtype:'sender',
        media:[],
        file:[],

    },
    {
        img:"",
        name:'You',
        time:'23:25 PM',
        textmsg:'Awesome! Thanks!',
        msgtype:'you',
        media:[],
        file:[],
    },
    {
        img:require('../../../assets/images/Userpic4s.png'),
        name:'Taylor Cox',
        time:'23:25 PM',
        textmsg:'Hey, Could you guys please pray for my grandpa? Here’s more details.',
        msgtype:'sender',
        media:[],
        file:[],
    },
    {
        img:require('../../../assets/images/Userpic.png'),
        name:'Rachel Richards ❤️',
        time:'23:25 PM',
        textmsg:'Yes! thanks for asking!',
        msgtype:'sender',
        media:[],
        file:[],
    },
 ]


 function ChatList() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{marginTop: responsiveScreenHeight(1.5)}}></View>

             <FlatList
                style={[styles.container,{marginBottom:60}]}
                showsVerticalScrollIndicator={false}
                data={chat}
                renderItem={({ item, index }) =>
    
                <View>
                {item.msgtype === 'sender'?
                <View style={{width:"100%",marginTop:16}}>
                    <View style={{flexDirection:'row'}}>
                        <Image
                            source = {item.img}
                            style={{width:40,height:40}}
                        />
                        <View >
                            <View style={{flexDirection:'row',marginLeft:8}}>
                                <Text style={{
                                    fontFamily:Fonts.DMMedium,
                                    color:theme.colors.gray,
                                    fontSize:16,
                                    fontWeight:'700'
                                }}>{item.name}</Text>
                                <Text style={{
                                    marginLeft:10,
                                    alignSelf:'center',
                                    fontFamily:Fonts.DMMedium,
                                    color:theme.colors.labelColor,
                                    fontSize:14,
                                    fontWeight:'normal'
                                }}>{item.time}</Text>
                            </View>
                            <View style={{
                                maxWidth:'93%',
                                borderRadius:8,
                                margin:8,
                                borderWidth:1,
                                borderColor:theme.colors.borderColor
                            }}>
                                <Text style={{
                                    marginTop:4,
                                    marginBottom:4,
                                    marginLeft:8,
                                    marginRight:8,
                                    fontFamily:Fonts.DMMedium,
                                    color:theme.colors.gray,
                                    fontSize:16,
                                    fontWeight:'normal'
                                }}
                                >{item.textmsg}</Text>
                            </View>
                        </View>
                    </View>
                    {item.media.length > 0?
                        <FlatList
                            style={{left:50,marginRight:50}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={item.media}
                            renderItem={({ item, index }) =>
                            <View style={{marginTop:8,marginRight:8}}>
                                <ImageBackground
                                    source={item.imag}
                                    borderRadius={8}
                                    style={{width:224,height:128}}
                                >
                                <LinearGradient
                                    colors={['rgba(46, 63, 97, 0.4)', 'rgba(129, 72, 64, 0.4)']}
                                    style={{width:224,height:128,borderRadius:8}}
                                >
                                    <View style={{flex:1}}>
                                    <Text style={{
                                            flex:0.9,
                                            marginTop:10,
                                            marginLeft:14,
                                            fontFamily:Fonts.DMRegular,
                                            color:"#ffff",
                                            fontSize:16,
                                            fontWeight:'normal'
                                    }}
                                    >{item.title}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text
                                            style={{
                                                marginBottom:10,
                                                marginLeft:16,
                                                fontFamily:Fonts.DMRegular,
                                                color:"#ffff",
                                                fontSize:16,
                                                fontWeight:'normal'
                                            }}
                                        >{item.type}</Text>
                                        <Text
                                            style={{
                                                marginBottom:10,
                                                marginLeft:70,
                                                // marginRight:16,
                                                fontFamily:Fonts.DMRegular,
                                                color:"#ffff",
                                                fontSize:16,
                                                fontWeight:'normal'
                                            }}
                                        >{item.size}</Text>
                                    </View>
                                    </View>
                                </LinearGradient>
                                </ImageBackground>
                            </View>
                        }/>
                        :
                        <>
                        {item.file.length > 0?
                            <FlatList
                            style={{left:50,marginRight:50}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={item.file}
                            renderItem={({ item, index }) =>
                                <View style={{marginTop:8,marginRight:8}}>
                                    <View style={{flexDirection:'row',width:209,height:64,borderRadius:8,backgroundColor:'rgba(78, 115, 248, 0.08)'}}>
                                        <View 
                                            style={{
                                                marginLeft:13.63,
                                                marginTop:8.67,
                                                marginBottom:8.67
                                            }}>
                                            <Image 
                                                source = {doc}
                                                style={{width:37.33,height:46.67}}
                                            />
                                        </View>
                                        <View style={{marginLeft:9.33,justifyContent:'center'}}>
                                            <Text style={[styles.dividertxt,{color:theme.colors.primary}]} >{item.title}</Text>
                                            <Text style={[styles.smallheaderText,{color:theme.colors.labelColor,fontSize:14,marginTop:0}]} >{item.time} . {item.size}</Text>
                                        </View>
                                        <TouchableOpacity style={{marginLeft:9.33,justifyContent:'center'}}>
                                            <Image
                                                source={download}
                                                style={{width:24,height:24}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }/>
                            :
                            <></>
                        }
                        </>
                    }
                </View>
                :
                    <View style={{width:'100%',flexDirection:'row',marginTop:16,alignItems:'flex-end',justifyContent:'flex-end'}}>
                <View >
                    <View style={{flexDirection:'row',marginLeft:8,justifyContent:'flex-end'}}>
                        <Text style={{
                            fontFamily:Fonts.DMMedium,
                            color:theme.colors.gray,
                            fontSize:16,
                            fontWeight:'700'
                        }}>{item.name}</Text>
                        <Text style={{
                            marginLeft:10,
                            marginRight:10,
                            alignSelf:'center',
                            fontFamily:Fonts.DMMedium,
                            color:theme.colors.labelColor,
                            fontSize:14,
                            fontWeight:'normal'
                        }}>{item.time}</Text>
                        <Image
                            source={done}
                            style={{width:16,height:16,tintColor:'#0892d0',alignSelf:'center'}}
                        />
                    </View>
                    <View style={{
                        width:'auto',
                        borderRadius:8,
                        margin:8,
                        borderWidth:1,
                        borderColor:theme.colors.borderColor
                    }}>
                        <Text style={{
                            marginTop:4,
                            marginBottom:4,
                            marginLeft:8,
                            marginRight:8,
                            fontFamily:Fonts.DMMedium,
                            color:theme.colors.gray,
                            fontSize:16,
                            fontWeight:'normal'
                        }}
                        >{item.textmsg}</Text>
                    </View>
                </View>
                </View>
                }
                </View>
            }/>
        </View>
    )
}

export default ChatList;