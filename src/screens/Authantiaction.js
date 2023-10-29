import { SafeAreaView, StyleSheet } from "react-native";
import { AppColor } from "../asserts/colors";
import Header from "../components/Header";
import Content from "../components/Content";
import Login from "../components/Login";

const Authantication = ({ onHandleAuth }) => {
    return (
        <SafeAreaView style={styles.bgWrapper}>
            <Header title="Todo List" subTitle="Welcome back todo list app" />
            <Content>
                <Login onPressLogin={onHandleAuth} />
            </Content>
        </SafeAreaView>
    )
};

export default Authantication;

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1,
        backgroundColor: AppColor.BgColor,
        justifyContent: 'center',
        padding: 30,
    },
    bgInner: {
        backgroundColor: AppColor.white,
    }
})