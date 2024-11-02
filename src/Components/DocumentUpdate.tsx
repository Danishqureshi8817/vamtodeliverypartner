import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Statusbar from '../common/component/Statusbar';
import Button from '../common/component/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../common/consts/color';

export default function DocumentUpdate() {
  // Handler for photo or PDF upload
  const handleUpload = (type: string) => {
    console.log(`Upload ${type}`);
    // Add your file picker logic here for photos and PDFs
  };

  return (
    <View style={styles.container}>
      <Statusbar backgroundColor={color.white} />

      <Text style={styles.headerText}>Aadhar card details</Text>
      <Text style={styles.subText}>
        Upload focused photo of your Aadhar Card for faster verification
      </Text>

      <TouchableOpacity style={styles.uploadContainer} onPress={() => handleUpload('photo')}>
        <Icon name="camera" size={24} color={color.black} style={styles.icon} />
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadContainer} onPress={() => handleUpload('photo')}>
        <Icon name="camera" size={24} color={color.black} style={styles.icon} />
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>

      {/* PDF Upload Option */}
      <TouchableOpacity style={styles.uploadContainer} onPress={() => handleUpload('pdf')}>
        <Icon name="file-pdf-box" size={24} color={color.primary} style={styles.icon} />
        <Text style={styles.uploadText}>Upload PDF</Text>
      </TouchableOpacity>

      <Button title="Submit" style={styles.submitButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  uploadContainer: {
    width: '100%',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // for Android shadow
  },
  icon: {
    marginRight: 10,
  },
  uploadText: {
    fontSize: 16,
    color: color.primary,
    fontWeight: '500',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: color.primary,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
});
