/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {overviewStyle} from '../../component/overview/overview-style';
import spagh from './../../images/headerImg/pasta.png';
import drinks from './../../images/headerImg/drinks.png';
import chicken from './../../images/headerImg/chicken.png';

const Header = () => {
  return (
    <View style={overviewStyle.header}>
      <View style={overviewStyle.searchbar}>
        <TextInput
          style={overviewStyle.searchInput}
          placeholder="What do you like?"
          placeholderTextColor="#6b6b6d"
          numberOfLines={1}
        />
        <AntDesign name="search1" size={20} style={overviewStyle.SearchIcon} />
      </View>
      <View style={overviewStyle.headerContainerImg}>
        <View style={overviewStyle.headerImgArrow}>
          <Image source={spagh} style={overviewStyle.headerImg} />
          <AntDesign
            name="arrowright"
            size={18}
            color={'#37343d'}
            style={{marginLeft: 15}}
          />
        </View>
        <View style={overviewStyle.headerImgArrow}>
          <Image source={drinks} style={overviewStyle.headerImg} />
          <AntDesign
            name="arrowright"
            size={18}
            color={'#37343d'}
            style={{marginLeft: 15}}
          />
        </View>
        <View style={overviewStyle.headerImgArrow}>
          <Image source={spagh} style={overviewStyle.headerImg} />
          <AntDesign
            name="arrowright"
            size={18}
            color={'#37343d'}
            style={{marginLeft: 15}}
          />
        </View>
        <View style={overviewStyle.headerImgArrow}>
          <Image source={chicken} style={overviewStyle.headerImg} />
        </View>
      </View>
    </View>
  );
};

export default Header;
