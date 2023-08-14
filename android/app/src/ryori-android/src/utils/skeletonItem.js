import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

const SkeletonItem = () => {
  return (
    <View>
      <View align="center" spacing={4} style={{ flexDirection:'row', margin: 10, gap: 10, justifyContent:'space-between'}}>
        <View style={{gap: 10, flexDirection:'row',}}>
          <Skeleton
            LinearGradientComponent={LinearGradient}
            animation="wave"
            width={100}
            height={100}
          />
          <View style={{flexDirection:'column', gap: 10}}>
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
          </View>
        </View>
        <View style={{gap: 10, flexDirection:'row',}}>
          <Skeleton
            LinearGradientComponent={LinearGradient}
            animation="wave"
            width={100}
            height={100}
          />
          <View style={{flexDirection:'column', gap: 10}}>
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
          </View>
        </View>
        <View style={{gap: 10, flexDirection:'row'}}>
          <Skeleton
            LinearGradientComponent={LinearGradient}
            animation="wave"
            width={100}
            height={100}
          />
          <View style={{flexDirection:'column', gap: 10}}>
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={100}
              height={20}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  placeholder: {
    width: '100%',
    height: 15,
    marginBottom: 8,
  },
});

export default SkeletonItem;
