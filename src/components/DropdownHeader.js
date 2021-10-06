import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {drawer} from '../assets';
import theme from '../theme';
import {Fonts} from '../utils/Fonts';
import SelectDropdown from 'react-native-select-dropdown';
const HeaderCenterComponent = ({data}) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <SelectDropdown
      data={countries}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
};
export default HeaderCenterComponent;
export const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    // backgroundColor:'red',
    // alignSelf:'center',
    fontFamily: Fonts.DMBold,
    color: theme.colors.textHeader,
  },
});
