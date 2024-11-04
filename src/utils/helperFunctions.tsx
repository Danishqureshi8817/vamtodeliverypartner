import Toast from "react-native-toast-message"

export const successToast = (msg:string) => {

  return (
    Toast.show({
      type: 'success',
      text1: msg
    })
  )
}

export const errorToast = (msg:string) => {

  return (
    Toast.show({
      type: 'error',
      text1: msg
    })
  )
}

export const infoToast = (msg:string) => {

  return (
    Toast.show({
      type: 'info',
      text1: msg
    })
  )
}