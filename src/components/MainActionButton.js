import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {color19, primaryMain, white} from '../ui/common/colors';

const MainActionButton = ({text, onPress, isDisable = false, bgColor}) => {
  const styles = StyleSheet.create({
    submitView: {
      padding: 15,
      paddingBottom: Platform.OS === 'ios' ? 0 : 15,
      backgroundColor: 'green',
    },
    submitText: {
      textAlign: 'center',
      color: white,
      fontWeight: '700',
      fontSize: 18,
    },
    submitBtn: {
      backgroundColor: bgColor ? bgColor : primaryMain,
      padding: 20,
      borderRadius: 32,
    },
    disableButton: {
      backgroundColor: color19,
    },
  });

  return (
    <SafeAreaView edges={['bottom']} style={styles.submitView}>
      <TouchableOpacity
        style={[styles.submitBtn, isDisable && styles.disableButton]}
        onPress={() => {
          if (!isDisable) {
            onPress();
          }
        }}>
        <Text style={styles.submitText}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainActionButton;
