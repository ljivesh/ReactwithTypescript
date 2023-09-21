import { FC, useContext } from "react"
import TodoItem from "./TodoItem";
import styles from './Todos.module.css';
import { ItemContext } from "../store/item-context";



const Todos: FC = () => {


  const {items} = useContext(ItemContext);


  return (
    <ul className={styles.todos}>
        {items.map((item)=> (
           <TodoItem key={item.id} item={item}  />
        ))}
    </ul>
  )
};

export default Todos;