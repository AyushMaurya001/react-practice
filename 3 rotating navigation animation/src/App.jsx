import { useState } from "react"
import Article from "./components/Article"
import Nav from "./components/Nav"

function App() {

  const [articleAxis, setArticleAxis] = useState("");

  return (
    <div>
      <Nav setArticleAxis={setArticleAxis} />
      <Article articleAxis={articleAxis} />
    </div>
  )
}

export default App
