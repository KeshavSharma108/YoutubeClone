import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { UILoader } from '../reduxState';


/**
 * This component is for custom loader. Whenever loading state changed in redux
 * it will show/hide loader
 */
const AppLoader = () => {
  const isLoading = useSelector(UILoader.selectLoader);

  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.mainBackViewStyle}>
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color={'black'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBackViewStyle: {
    backgroundColor: '#00000066',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle: {
    backgroundColor: '#00000059',
    maxWidth: '80%',
    zIndex: 5,
    borderRadius: 16,
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default AppLoader;
