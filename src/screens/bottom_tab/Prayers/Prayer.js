/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import { View,
    Text,
    TextInput,
    Modal,
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
    share,
    done,
    seeMore,
    option,
    doc,
    create,
    userm} from '../../../assets';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import styles from '../../Signin/styles';
  import stylesp from './styles';
  import LinearGradient from 'react-native-linear-gradient';
  import HeaderCenterComponent from '../../../components/HeaderCenterComponent';
  import HeaderLeftComponent from '../../../components/HeaderLeftComponent';
  import HeaderRight from '../../../components/HeaderRight';
  import {Header} from 'react-native-elements';
  import DropdownHead from '../../../components/DropdownHeader';
  import { Calendar } from 'react-native-calendars'

  const prayers = [
    {
        img:require('../../../assets/images/Userpic.png'),
        name:'Rachel Richards ❤️',
        time:'23:25 PM',
        prayerTitle:'My Grandpa',
        prayerDes:'Please pray for my grandpa Richard. He’s been going through a hard time with recently losing his wife this pas...',
        reponses:7,
        prayerDate:'August 31, 2021 • 6:43 am',
        postertype:''
    },
    {
        img:require('../../../assets/images/Userpic.png'),
        name:'You',
        time:'23:25 PM',
        prayerTitle:'My Work Project',
        prayerDes:'I really need prayer for this specific project that has been really challenging for me. I ask that God wi...',
        reponses:'',
        prayerDate:'August 31, 2021 • 6:43 am',
        postertype:'You'
    },
    {
        img:require('../../../assets/images/Userpicg.png'),
        name:'Brianna B',
        time:'23:25 PM',
        prayerTitle:'My Grandpa',
        prayerDes:'Please pray for my grandpa Richard. He’s been going through a hard time with recently losing his wife this pas...',
        reponses:7,
        prayerDate:'August 31, 2021 • 6:43 am',
        postertype:''
    },
    
]


export default function Prayers(props) {
    const [modalVisible, setmodalVisible] = useState(false)
    const [modalVisibleAuthor, setmodalVisibleAuthor] = useState(false)

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Header 
                backgroundColor="white"
                containerStyle={{borderBottomWidth: 0,alignSelf:'center',height:48,borderBottomWidth:0.3,borderBottomColor:'#E1E3E6'}}
                centerComponent={<DropdownHead />}
                rightComponent={<HeaderRight  image={create} style={{width:32,height:32,margib:12}} />}
            />
            <View style={{marginTop: responsiveScreenHeight(1.5)}}></View>

             <FlatList
                style={styles.container}
                showsVerticalScrollIndicator={false}
                data={prayers}
                renderItem={({ item, index }) =>
    
                <View>
                {item.postertype != 'You'?
                <View style={{width:"100%",marginTop:16}}>
                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
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
                            
                        </View>
                    </View>
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
                            >{item.prayerTitle}</Text>
                            <TouchableOpacity onPress={()=>setmodalVisible(true)}>
                                <Image
                                    source={option}
                                    style={{width:24,height:24}}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                                marginTop:12,
                                fontFamily:Fonts.DMRegular,
                                color:theme.colors.gray,
                                fontSize:16,
                                fontWeight:'400'
                            }}
                        >{item.prayerDes}</Text>
                        <View style={{
                            width:98,
                            height:24,
                            borderRadius:4,
                            backgroundColor:'rgba(7, 162, 135, 0.08)',
                            marginTop:6,
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Text style={{
                                fontFamily:Fonts.DMRegular,
                                color:theme.colors.gren,
                                fontSize:14,
                                fontWeight:'400'
                            }}
                        >{item.reponses} Responses</Text>
                        </View>
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
                            }}>{item.prayerDate}</Text>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('PrayerDetails')}>
                                <Image
                                    source={seeMore}
                                    style={{width:95,height:32}}
                                />
                            </TouchableOpacity> 
                        </View>
                        
                    </View>
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
                            style={{width:16,height:16,tintColor:'#0892d0',alignSelf:'center',marginRight:12}}
                        />
                    </View>
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
                            >{item.prayerTitle}</Text>
                            <TouchableOpacity onPress={()=>setmodalVisibleAuthor(true)}>
                                <Image
                                    source={option}
                                    style={{width:24,height:24}}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                                marginTop:12,
                                fontFamily:Fonts.DMRegular,
                                color:theme.colors.gray,
                                fontSize:16,
                                fontWeight:'400'
                            }}
                        >{item.prayerDes}</Text>
                        {item.reponses === ''
                            ?
                            <></>
                            :
                        <View style={{
                            width:98,
                            height:24,
                            borderRadius:4,
                            backgroundColor:'rgba(7, 162, 135, 0.08)',
                            marginTop:6,
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Text style={{
                                fontFamily:Fonts.DMRegular,
                                color:theme.colors.gren,
                                fontSize:14,
                                fontWeight:'400'
                            }}
                            >{item.reponses} Responses</Text>
                        </View>
                            }

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
                            }}>{item.prayerDate}</Text>
                            <TouchableOpacity onPress={()=>props.navigation.navigate('PrayerDetails')}>
                                <Image
                                    source={seeMore}
                                    style={{width:95,height:32}}
                                />
                            </TouchableOpacity> 
                        </View>
                        
                    </View>
                
                </View>
                </View>
                }
                </View>
            }/>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                    setmodalVisible(!modalVisible)
                }}
                >
                <View style={stylesp.centeredView}>
                    <View style={[stylesp.modalView,{height:184}]}>
                        <View style={{width:'100%',height:48,flexDirection:'row',backgroundColor:'white',borderTopLeftRadius:15,borderTopRightRadius:5}}>
                            <TouchableOpacity style={{flex:0.2,alignItems:'center',alignSelf:'center'}} onPress={()=> setmodalVisible(!modalVisible)}>
                                <Text style={[styles.tabtext,{height:'auto',fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.6,alignItems:'center',alignSelf:'center'}}>
                                <Text style={[styles.tabtext,{height:'auto',fontSize:18,fontFamily:Fonts.DMBold,color:theme.colors.textHeader}]}>Options</Text>
                            </View>
                            <TouchableOpacity style={{flex:0.2}} onPress={()=> setmodalVisible(!modalVisible)}>
                                {/* <Text style={[styles.tabtext,{margin:12,fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',marginTop:24}}>
                            <TouchableOpacity style={{width:'90%',alignItems:'center'}}>
                                <Image
                                    source={share}
                                    style={{width:'100%',height:48}}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleAuthor}
                // style={{ backgroundColor:'rgba(64, 77, 97, 1)' }}
                onRequestClose={() => {
                    setmodalVisibleAuthor(!modalVisibleAuthor)
                }}
                >
                <View style={stylesp.centeredView}>
                    <View style={[stylesp.modalView,{height:248}]}>
                        <View style={{width:'100%',height:48,flexDirection:'row',backgroundColor:'white',borderTopLeftRadius:15,borderTopRightRadius:5}}>
                            <TouchableOpacity style={{flex:0.2,alignItems:'center',alignSelf:'center'}} onPress={()=> setmodalVisibleAuthor(!modalVisibleAuthor)}>
                                <Text style={[styles.tabtext,{height:'auto',fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.6,alignItems:'center',alignSelf:'center'}}>
                                <Text style={[styles.tabtext,{height:'auto',fontSize:18,fontFamily:Fonts.DMBold,color:theme.colors.textHeader}]}>Options</Text>
                            </View>
                            <TouchableOpacity style={{flex:0.2}} onPress={()=> setmodalVisible(!modalVisible)}>
                                {/* <Text style={[styles.tabtext,{margin:12,fontFamily:Fonts.DMRegular,fontWeight:'400',color:theme.colors.txtblue}]}>Cancel</Text> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',marginTop:24}}>
                            <TouchableOpacity style={{width:'90%',alignItems:'center'}}>
                                <Image
                                    source={share}
                                    style={{width:'100%',height:48}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[stylesp.btn,{width:'90%'}]} >
                                <Text style={stylesp.email,{fontSize:18,color:theme.colors.labelColor}}>Edit My Prayer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    
    )
}
