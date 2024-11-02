import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Container } from '../common/component/global/Container'
import { BackIcon } from '../common/component/Icons'
import { height, moderateScale, moderateScaleVertical, textScale } from '../utils/responsiveSize'
import color from '../common/consts/color'
import { spacingSizes } from '../common/consts/size'
import { WIDTH } from '../common/consts/config'
import { Fonts } from '../utils/constant'
import { useNavigation } from '@react-navigation/native'
import { imagePath } from '../assets/img'

const ReferEran = () => {
  const Navigation = useNavigation<any>();
  return (
    <Container statusBarBackgroundColor='#ffffff' statusBarStyle='dark-content' backgroundColor={color.grey} >
      {/* <Statusbar backgroundColor={color.white} /> */}
      <View style={styles.registrationHeader}>
        <TouchableOpacity
          onPress={() => {
            Navigation.goBack();
          }}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.registration}>Refer & Earn</Text>
        <View>
        </View>
      </View>

      <ImageBackground source={imagePath.referBg} resizeMode='cover' style={{width:'100%',height:height*0.4,marginTop:moderateScaleVertical(15)}} >

        <View style={{marginTop:moderateScaleVertical(30)}}>
          <Text style={{fontSize:textScale(20),fontFamily:Fonts.Bold,color:color.white}}>Refer & Earn</Text>
          <Text style={{fontSize:textScale(16),fontFamily:Fonts.Medium,color:color.white}}>Upto ₹100</Text>
       
        </View>

      </ImageBackground>



    </Container>
  )
}

export default ReferEran

const styles = StyleSheet.create({

  registrationHeader: {
    backgroundColor: '#fff',
    height: moderateScale(45),
    borderBottomLeftRadius: spacingSizes.large,
    borderBottomRightRadius: spacingSizes.large,
    // marginTop: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingSizes.larger,
    width: WIDTH / 1,
    paddingHorizontal: moderateScale(15),
    justifyContent: 'space-between',
    paddingBottom: moderateScaleVertical(5),
    position:'absolute',
    top:0,
    zIndex:99
  },
  registration: {
    color: color.black,
    fontSize: textScale(18),
    fontFamily: Fonts.Medium,
    textAlign: 'center',
  },
  buttonBox: {
    alignSelf: 'center',
    marginTop: moderateScaleVertical(25)
  },
});
