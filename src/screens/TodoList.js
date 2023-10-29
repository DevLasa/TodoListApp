import { FlatList, StyleSheet, SafeAreaView, Alert } from "react-native";
import { AppColor, getRandomColor } from "../asserts/colors";
import Header from "../components/Header";
import Content from "../components/Content";
import TextEnter from "../components/TextEnter";
import TodoCube from "../components/TodoCube";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, appAuthanticateAction, deleteTodoAction, updateTodoAction } from "../actions/Action";
import EmptyMsg from "../components/EmptyMsg";

const TodoList = () => {
    // create input ref
    const inputRef = useRef();
    // create state for updating todo id
    const [todoId, setTodoId] = useState(null);
    // get reducerr data
    const { data } = useSelector(state => state.todos);
    // use dispatch
    const dispatch = useDispatch();
    //sign out function
    const singOut = () => {
        dispatch(appAuthanticateAction(false));
    }
    //add & update todo function
    const addTodo = () => {
        if (inputRef.current.text && inputRef.current.text.length !== 0) {
            if (todoId !== null) {
                dispatch(updateTodoAction({
                    id: todoId,
                    data: inputRef.current.text,
                }))
                setTodoId(null);
            } else {
                dispatch(addTodoAction({
                    id: new Date().valueOf(),
                    data: inputRef.current.text,
                    color: getRandomColor(),
                }))
            }
            inputRef.current.text = "";
            inputRef.current.clear();
        } else {
            Alert.alert("Please enter your data");
        }
    }
    // todos delete function
    const deleteTodo = (id) => {
        dispatch(deleteTodoAction({
            id,
        }))
    }
    // update text field with updating todo data
    const updateTodo = (item) => {
        setTodoId(item.id);
        inputRef.current.setNativeProps({ text: item.value });
        inputRef.current.focus();
    }
    // handle text change function
    const handleTextChange = (text) => {
        inputRef.current.text = text;
    }
    // flatlist render component
    const renderItem = ({ item }) => (
        <TodoCube data={item} onHandleUpdate={() => updateTodo(item)} onHandleDelete={() => deleteTodo(item.id)} />
    );
    // todos list ui
    return (
        <SafeAreaView style={styles.bgWrapper}>
            <Header title="Todo List" subTitle="Let's create your todo list" signOut={singOut}/>
            <Content>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyMsg />}
                />
            </Content>
            <TextEnter inputRef={inputRef} onChagne={handleTextChange} onHandlePress={addTodo} btnText={todoId != null ? "EDIT" : "ADD"} />
        </SafeAreaView>
    )
};

export default TodoList;

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1,
        backgroundColor: AppColor.BgColor,
    }
})