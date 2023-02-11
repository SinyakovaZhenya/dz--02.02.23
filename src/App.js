import "./styles/main.css";

import Book from "./tascs/Book";
import Music from "./tascs/Music";
import Recipe from "./tascs/Recipe";

function App() {
  return (
    <div className="App">
      {<Book/>}
		{<Music/>}
		{<Recipe/>}
    </div>
  );
}

export default App;
