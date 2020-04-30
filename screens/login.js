import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Button
} from 'react-native';
import {globalStyles} from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({navigation}) {
  const [email, password] = useState(null)
    return (
    <View style={globalStyles.screen}>
      <View style={styles.brandlogo}></View>
      <View style={styles.headertext}></View>
      <View style={styles.inputform}>
        <MaterialIcons icon={} /><TextInput style={styles.input} placeholder='Email Address' />
        <MaterialIcons icon={} /><TextInput style={styles.input} placeholder='Password' />
        <Button style={styles.loginbtn} title="Login Now"/>
        <Text>Don't have an account?
          <Text style={globalStyles.boldtext}>Register Now!</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff'
  },
  brandlogo: {
    marginTop: 15,
    marginLeft: 15
  },
  headertext: {},
  inputform: {},
  input: {},
  loginbtn: {}
});