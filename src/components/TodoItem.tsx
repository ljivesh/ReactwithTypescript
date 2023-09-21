import { FC, useContext } from "react";
import Todo from "../models/Todo";
import styles from "./TodoItem.module.css";
import { ItemContext } from "../store/item-context";

type TodoItemType = {
  item: Todo;
};

const TodoItem: FC<TodoItemType> = ({ item }) => {
  const { onDelete } = useContext(ItemContext);

  const clickHandler = () => onDelete(item.id);

  return (
    <li className={styles.item} onClick={clickHandler}>
      {item.text}
    </li>
  );
};

export default TodoItem;
