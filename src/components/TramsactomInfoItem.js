import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import DropShadow from "react-native-drop-shadow";
import {
  color13,
  color25,
  grayBlack,
  primaryMain,
  softGray,
} from '../ui/common/colors';
import {useNavigation} from '@react-navigation/native';

const link = require('./../../assets/images/link.png');

const TransactionInfoItem = ({
  icon,
  title,
  content,
  subContent,
  active = false,
  linkPath,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={[styles.iconView, active && styles.activeIconView]}>
        <Image source={icon} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        {subContent && <Text style={styles.subContent}>{subContent}</Text>}
      </View>
      {linkPath && (
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate(linkPath)}>
          <View>
            <Image source={link} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TransactionInfoItem;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 20,
    marginTop: 10,
    marginBottom: 5,
    position: 'relative',
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
    borderRightColor: 'rgba(0,0,0,.1)',
    borderLeftColor: 'rgba(0,0,0,.1)',
  },
  activeIconView: {
    backgroundColor: primaryMain,
  },
  iconView: {
    backgroundColor: color13,
    borderRadius: 100,
    height: 50,
    width: 50,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    paddingRight: 50,
    flex: 1,
  },
  title: {
    color: primaryMain,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  content: {
    color: grayBlack,
    fontSize: 14,
    fontWeight: '400',
    maxWidth: 300,
  },
  subContent: {
    color: color25,
    fontSize: 12,
    fontWeight: '500',
    maxWidth: 300,
  },
  link: {
    position: 'absolute',
    right: 20,
  },
});
