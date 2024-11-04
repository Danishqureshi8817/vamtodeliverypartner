
import { ActivityIndicator, Modal, Text } from "react-native"
import { View } from "react-native"
import { moderateScale, textScale } from "../../../utils/responsiveSize"
import color from "../../consts/color"


const CenterModalLoader = ({ loading }: { loading: boolean }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={loading}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#fff', borderRadius: moderateScale(10), alignItems: 'center', justifyContent: 'center', elevation: 5, width: '55%', height: '15%', gap: moderateScale(15) }}  >

            <Text style={{ fontSize: textScale(16), lineHeight: textScale(18), color: color.black, fontWeight: '600' }} numberOfLines={1} >Please wait ...</Text>

            <ActivityIndicator size={'large'} color={color.primary} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CenterModalLoader