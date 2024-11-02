import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../common/component/Button';
import color from '../common/consts/color';
import { spacingSizes } from '../common/consts/size';

export default function AskLeave() {
  const [days, setDays] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);

  // Format date to dd/mm/yyyy
  const formatDate = (date: any) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#333" />
        <Text style={styles.headerTitle}>Ask for leave</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>
            New Application
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>My Application</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Request your leave details down below</Text>
        {/* <View style={{flexDirection:"row"}}>
          <Text style={styles.title}>How many days?</Text>
          <View style={styles.box}></View>
        </View> */}
        <TextInput
          style={styles.commentsInput}
          placeholder="Explain reason for leave in detail."
          multiline
          maxLength={200}
          value={comments}
          onChangeText={text => setComments(text)}
        />
        <Text style={styles.characterCount}>{comments.length}/200</Text>

        {/* Submit Button */}
        <Button containerStyles={styles.buttonBox} title="Submit" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomColor: '#FF5252',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    color: '#FF5252',
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#FF5252',
    borderRadius: 5,
    marginBottom: 15,
    height: 50,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5252',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  commentsInput: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    height: 200,
    textAlignVertical: 'top',
    marginBottom: 10,
    borderStyle: 'dashed',
  },
  characterCount: {
    textAlign: 'right',
    color: '#888',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#FF5252',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonBox: {
    alignSelf: 'center',
  },
  box: {
    width: 200,
    borderColor: color.red,
    padding:spacingSizes.small
  },
  title:{
    color:color.slateBlack,
  }
});
