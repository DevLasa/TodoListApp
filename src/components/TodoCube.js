import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Images from "../asserts/Img";

// todo cube component
const TodoCube = ({ data, onHandleUpdate, onHandleDelete }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: data.color, ...styles.BgCube }} onPress={onHandleUpdate}>
            <Text style={styles.CubeText}>{data.value}</Text>
            <TouchableOpacity onPress={onHandleDelete}>
                <Image source={Images.delete} style={styles.deleteBtn} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default TodoCube;

const styles = StyleSheet.create({
    BgCube: {
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    CubeText: {
        fontSize: 15,
        fontWeight: '200'
    },
    deleteBtn: {
        width: 25,
        height: 25,
    }
})