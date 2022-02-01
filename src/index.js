import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Article from "./Article";
import "./index.css";

const App = () =>{
  const [articles, setArticles] = useState([
    {title: "Bezdek 1.2 HTP", body: "Lorem lorem", author: "Ablaham", id: 0},
    {title: "Tilus Nautilus 1.4 HTP", body: "Sus mus amongus", author: "Fila", id: 1},
    {title: "50 odstinu sodomy 1.6 HTP", body: "matiknt", author: "BoHaTiS", id: 2}
  ]);

  return(
    <div className="container">
      <Article articles={articles}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));