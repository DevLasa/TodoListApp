import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Keyboard } from "react-native";
import { AppColor } from "../asserts/colors";

// bottom panel with textinput
const TextEnter = ({ inputRef, onChagne, onHandlePress, btnText }) => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <View style={{...styles.BgTextEnter, bottom: keyboardStatus ? 280 : 10}}>
            <TextInput ref={inputRef} style={styles.TextWrapper} placeholder="Enter your data" onChangeText={(e) => onChagne(e)} />
            <TouchableOpacity style={styles.BtnWrapper} onPress={onHandlePress}>
                <Text style={styles.BtnWrapperText}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TextEnter;

const styles = StyleSheet.create({
    BgTextEnter: {
        position: 'absolute',
        backgroundColor: AppColor.BgColor,
        height: 70,
        left: 10,
        right: 0,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextWrapper: {
        backgroundColor: AppColor.white,
        height: 40,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: '400',
        color: AppColor.BgColor,
        paddingHorizontal: 10,
        width: '77%'
    },
    BtnWrapper: {
        backgroundColor: AppColor.DrkYellow,
        height: 40,
        width: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BtnWrapperText: {
        fontSize: 15,
        fontWeight: '500',
        color: AppColor.BgColor,
    }
})