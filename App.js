import React, {useState} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { NavBar } from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState('2');
    const [todos, setTodos] = useState([
        {id: '1', title:'Learn react native'},
        {id: '2', title:'Write app'}
    ]);
    
    const addTodo = (title) => {
        // const newTodo={
        //     id: Date.now().toString(),
        //     title: title
        // }
        
        // setTodos(todos.concat([newTodo]))
        // setTodos((prevTodos)=>{
        //     return [
        //         ...prevTodos,
        //         newTodo
        //     ]
        // })
        
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }
    
    const removeTodo = id => {
        const removedTodo = todos.find(t => t.id === id);
        Alert.alert(
            'Delete todo',
            `Are you sure to delete ${removedTodo.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete', 
                    onPress: () => {
                        setTodos(prev => prev.filter(item=> item.id !== id))
                    }
                }
            ]
        )
        
    }
    
    let content = (
        <MainScreen 
            todos={todos} 
            addTodo={addTodo} 
            removeTodo={removeTodo} 
            openTodo={setTodoId} />
    )
    if(todoId) {
        const selectedTodo = todos.find(t => t.id === todoId);
        content = <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)} /> 
    }
    
  return (
    <View>
      <NavBar title='Todo App!' />
      <View style={styles.container}>
          {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30, 
      paddingVertical: 20
  }
});
