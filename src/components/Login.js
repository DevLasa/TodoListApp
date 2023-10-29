import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import Images from "../asserts/Img"
import DeviceProp from "../asserts/deviceData";
import { AppColor } from "../asserts/colors";

const Login = ({onPressLogin}) => {
    return (
        <View style={styles.loginWrapper}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.loginBtn}>
                <TouchableOpacity onPress={onPressLogin}> 
                    <Image source={Images.authentication} />
                </TouchableOpacity>
                <Text style={styles.loginBtnTitle}>Please tap this icon for login</Text>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    loginWrapper: {
        alignItems: 'center',
    },
    loginTitle: {
        fontSize: 30,
        fontWeight: '700',
    },
    loginBtn: {
        alignItems: 'center',
        top: DeviceProp.deviceHeight/7
    },
    loginBtnTitle: {
        fontSize: 8,
        fontWeight: '500',
        top: 5,
        color: AppColor.Red,
    }
})