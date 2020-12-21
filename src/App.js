import Article from './components/Article'
import articles from './articles'
import ArticleList from './components/ArticleList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
function App() {
  const greetings = 'Hello React Accordion!'
  const [reverted, setReverted] = useState(false)
  const [position, setPosition] = useState(false)
  const revert = () => {
    setReverted(!reverted)
  }
  const onCheck = () =>{
    setPosition(!position);
  }
  return (
    <div className='container'>
      {/*{greetings}
        <Article article={articles[0]}/>*/}
      <div className='jumbotron'>
        <h1 className='display-3'>React Accordion Demo</h1>
        <button className="btn btn-secondary" onClick={revert}>Revert</button>
        <div>
          <input class="form-check-input" value={position} onChange={onCheck} type="checkbox" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Change position
        </label>
        </div>
      </div>
      <ArticleList articles={reverted ? articles.slice().reverse() : articles} checkBoxState={position}/>
    </div>
  );
}

export default App;
