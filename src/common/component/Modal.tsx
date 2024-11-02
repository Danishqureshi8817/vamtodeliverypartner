import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import React from 'react';
import {fontSizes} from '../consts/size';
import colors from '../consts/color';
type PlanModalMenuItem = {
  title?: string;
  onPress?: () => void;
};
export default function ModalComponent(props: {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  title?: string;
  discription?: string;
  menuItems?: PlanModalMenuItem[];
}) {
  const {modalVisible, setModalVisible, title, menuItems, discription} = props;
  return (
    <View style={styles.container}>
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalCenteredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{title}</Text>
              <Text>{discription}</Text>
              {menuItems?.map((menuItem, index) => {
                return (
                  <TouchableOpacity
                    key={`${menuItem.title}${index}`}
                    style={styles.selectModalItem}
                    onPress={() => {
                      if (menuItem.onPress) {
                        menuItem.onPress();
                      }
                    }}>
                    <Text style={styles.textStyle}>{menuItem.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${colors.black}00055`,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    paddingBottom: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  selectModalItem: {
    paddingHorizontal: 24,
    borderRadius: 5,
    paddingVertical: 10,
  },

  textStyle: {
    color: 'black',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 14,
    fontWeight: 'bold',
    fontSize: fontSizes.large,
  },
});
