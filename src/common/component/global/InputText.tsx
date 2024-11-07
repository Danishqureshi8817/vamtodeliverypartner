// import { ControllerRenderProps, FieldValues } from "react-hook-form";

import { TextInput, TextInputProps, View } from 'react-native'
import color from "../../consts/color";
import { moderateScale, textScale } from "../../../utils/responsiveSize";
import { Fonts } from '../../../utils/constant';

export interface InputTextProps {
  label?: string;
  // field: ControllerRenderProps<FieldValues, string>;
  textInputProps?: TextInputProps;
  left?: any;
  right?: any;
  handleKeyPress?: () => void;
  secureTextEntry?: boolean;
  height?: number;
}

function InputText(props: InputTextProps) {
  const { right, left, handleKeyPress, textInputProps, label, secureTextEntry = false, height = moderateScale(46) } = props;
  // const { onChange, value, onBlur } = field;

  return (
    <View style={{gap:10}}>
      {/* <Text fontFamily='$poppinsMedium' fontSize={14} lineHeight={16} color={color.black}>
        {label}
      </Text> */}
      <View style={{height,borderRadius:9,borderWidth:0.5,borderColor:'#000',flexDirection:'row',alignItems:'center'}} >
        {left}
        <TextInput
          placeholder={textInputProps?.placeholder ?? ""}
          // value={value}
          // onChangeText={textInputProps?.keyboardType === "numeric" ? (val) => onChange(Number(val)) : onChange}
          // onBlur={onBlur}
          onSubmitEditing={handleKeyPress}
          returnKeyType="done"
          placeholderTextColor={color.grey}
          secureTextEntry={secureTextEntry}
          style={[{ fontSize: textScale(14), color: color.black, fontFamily: Fonts.Regular, paddingLeft: moderateScale(15), flex: 1,}]}
          {...textInputProps}
        />
        {right}
      </View>
    </View>
  );
}

export default InputText;