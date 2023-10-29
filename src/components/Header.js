import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AppColor } from "../asserts/colors";
import DeviceProp from "../asserts/deviceData";
import Images from "../asserts/Img";

// header component
const Header = ({ title, subTitle, signOut }) => {
  return (
    <View style={styles.BgHead}>
      <Text style={styles.title}>👋 {title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {signOut && (
        <TouchableOpacity style={styles.signOut} onPress={signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      )}
      <Image source={Images.avatar} style={styles.avatar} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  BgHead: {
    backgroundColor: AppColor.BgColor,
    height: DeviceProp.deviceHeight / 5,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  avatar: {
    height: DeviceProp.deviceHeight / 6,
    width: DeviceProp.deviceHeight / 6,
    objectFit: "cover",
    position: "absolute",
    right: 10,
    bottom: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: AppColor.white,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: AppColor.white,
    left: 40,
  },
  signOutText: {
    color: AppColor.BgColor,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  signOut: {
    left: 40,
    top: 20,
    backgroundColor: AppColor.DrkYellow,
    width: 70,
    borderRadius: 10,
    padding: 5,
  },
});
