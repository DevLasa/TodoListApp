import { Image, View, Text, StyleSheet } from "react-native";
import Images from "../asserts/Img";

// empty component
const EmptyMsg = () => {
    return (
        <View style={styles.BgEmpty}>
            <Image source={Images.empty} />
            <Text style={styles.BgEmptyText}>Your todo list is empty</Text>
        </View>
    )
}

export default EmptyMsg;

const styles = StyleSheet.create({
    BgEmpty: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    BgEmptyText: {
        fontSize: 20,
        fontWeight: '200',
        top: 5,
    }
});