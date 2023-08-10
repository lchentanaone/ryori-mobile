import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonItem = () => {
  return (
    <View>
      <SkeletonPlaceholder>
        
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <View style={{ width: 350, height: 200 }} />
          <View style={{ marginTop: 6, width: 260, height: 20, borderRadius: 5 }} />
          <View style={{ marginTop: 6, width: 350, height: 70, borderRadius: 10 }} />
        </View>
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <View style={{ width: 350, height: 200 }} />
          <View style={{ marginTop: 6, width: 260, height: 20, borderRadius: 5 }} />
          <View style={{ marginTop: 6, width: 350, height: 70, borderRadius: 10 }} />
        </View>
      </SkeletonPlaceholder>
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
