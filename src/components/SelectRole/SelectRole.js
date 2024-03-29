import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import g_styles from '../../ui/common/styles';
import {ScrollView} from 'react-native-gesture-handler';
import {primaryMain} from '../../ui/common/colors';
import RoleItem from './RoleItem';
import MainActionButton from '../MainActionButton';
import {useNavigation} from '@react-navigation/native';

const SelectRole = () => {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState();

  const roles = [
    'Tile Agent',
    'Seller',
    "Seller's Agent",
    'Buyer',
    "Buyer's Agent",
    'Loan Officer',
  ];

  const [isDisable, setDisable] = useState(true);

  useEffect(() => {
    if (selectedRole) {
      setDisable(false);
    }
  }, [selectedRole]);

  const onContinue = async () => {
    navigation.navigate('ContactInfo');
  };

  return (
    <View style={g_styles.container}>
      <ScrollView style={g_styles.box}>
        <Text style={styles.titleText}>
          What’s your role in the transaction?
        </Text>
        <View>
          {roles.map((row, key) => {
            return (
              <RoleItem
                key={key}
                row={row}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            );
          })}
        </View>
      </ScrollView>
      <MainActionButton
        text={'Continue'}
        isDisable={isDisable}
        onPress={onContinue}
      />
    </View>
  );
};

export default SelectRole;

const styles = StyleSheet.create({
  titleText: {
    color: primaryMain,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '600',
  },
});
