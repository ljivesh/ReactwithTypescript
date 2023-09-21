import { FC, FormEvent, useContext, useRef } from "react";
import styles from './NewTodo.module.css';
import { ItemContext } from "../store/item-context";



const NewTodo: FC = ()=> {
    
    const todoRef = useRef<HTMLInputElement> (null);

    const {onNewTodo} = useContext(ItemContext)

    const submitHandler = (e: FormEvent)=> {
        e.preventDefault();
        console.log(todoRef.current?.value);
        todoRef.current?.value && onNewTodo(todoRef.current?.value);
    
    }   


    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label>Enter your task</label>
            <input type="text" ref={todoRef}/>
            <button type="submit">Add</button>
        </form>
    )
};

export default NewTodo;