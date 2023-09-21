
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import ItemContextProvider from "./store/item-context";


function App() {

  
  return (
    <ItemContextProvider>
      <NewTodo />
      <Todos />
    </ItemContextProvider>
  );
}

export default App;