import  { FC, ReactNode, createContext, useState } from "react";
import Todo from "../models/Todo";

type itemContextType = {
  items: Todo[];
  onDelete: (id: string) => void;
  onNewTodo: (text: string) => void;
};

export const ItemContext = createContext<itemContextType>({
  items: [],
  onDelete: () => {},
  onNewTodo: () => {},
});

const ItemContextProvider: FC<{children: ReactNode}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const newTodoHandler = (todoText: string) => {
    const newTodo = new Todo(Date.now().toLocaleString(), todoText);
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteHandler = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const context: itemContextType = {
    items: todos,
    onDelete: deleteHandler,
    onNewTodo: newTodoHandler,
  };

  return (
    <ItemContext.Provider value={context}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;