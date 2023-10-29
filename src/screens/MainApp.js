import { useDispatch, useSelector } from "react-redux";
import Authantication from "./Authantiaction";
import TodoList from "./TodoList";
import * as LocalAuthantication from "expo-local-authentication";
import { appAuthanticateAction } from "../actions/Action";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const MainApp = () => {

    const dispatch = useDispatch();

    const [isBiometricSpport, setIsBiometricSupport] = useState(false);

    const { isAuthanticate } = useSelector(state => state.todos);

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthantication.hasHardwareAsync();
            setIsBiometricSupport(compatible)
        })();
    }, [])

    const onAuthanticate = () => {
        if(isBiometricSpport){
            const auth = LocalAuthantication.authenticateAsync({
                promptMessage: 'Authanticate for todo app',
            })
    
            auth.then(result => {
                if (result.success) {
                    dispatch(appAuthanticateAction(true))
                }
            })
        }else {
            Alert.alert("Do not have any biometric support");
        }
        

    }
    return (
        // authantication flow validation
        isAuthanticate ? <TodoList /> : <Authantication onHandleAuth={onAuthanticate} />
    )
}

export default MainApp