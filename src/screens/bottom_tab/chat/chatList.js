/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ScrollView} from 'react-native'
import theme from '../../../theme';
import Fonts from '../../../utils/Fonts';
import {lilg} from '../../../assets';
import {
    responsiveHeight,
    responsiveScreenHeight,
    responsiveScreenWidth,
  } from 'react-native-responsive-dimensions';
  import styles from '../../Signin/styles';

 function ChatList() {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
             <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
            
            <View>
                
            </View>
                    
            </ScrollView>
        </View>
    )
}

export default ChatList;