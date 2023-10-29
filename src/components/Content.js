import { StyleSheet, View } from "react-native";
import { AppColor } from "../asserts/colors";
import DeviceProp from "../asserts/deviceData";

// app content component with chidren props
const Content = ({ children }) => {
  return <View style={styles.BgContent}>{children}</View>;
};

export default Content;

const styles = StyleSheet.create({
  BgContent: {
    backgroundColor: AppColor.white,
    height: DeviceProp.deviceHeight - DeviceProp.deviceHeight / 5,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100,
  },
});
