import { useState } from "react"
import Card from "./components/Card"

function App() {

  const [focusId, setFocusId] = useState("1");

  const [large, setLarge] = useState("w-full");
  const [small, setSmall] = useState("w-20");

  return (
    <div>
      <div className=" p-10 w-full h-screen flex justify-center items-center">
        <Card
        small={small}
        large={large}
        focusId={focusId}
        setFocusId={setFocusId}
        setSmall={setSmall}
        id="1"
        name="Beach"
        url="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card
        small={small}
        large={large}
        focusId={focusId}
        setFocusId={setFocusId} 
        setSmall={setSmall}
        id="2" 
        name="Forest" 
        url="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card 
        small={small}
        large={large}
        focusId={focusId}
        setFocusId={setFocusId} 
        setSmall={setSmall}
        id="3" 
        name="Desert" 
        url="https://images.unsplash.com/photo-1617374128851-c84e37dc9f37?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card 
        small={small}
        large={large}
        focusId={focusId}
        setFocusId={setFocusId}
        setSmall={setSmall}
        id="4" 
        name="Mountain" 
        url="https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card 
        small={small}
        large={large}
        focusId={focusId}
        setFocusId={setFocusId}
        setSmall={setSmall}
        id="5" 
        name="Waterfall" 
        url="https://images.unsplash.com/photo-1575580280904-905f466584e0?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  )
}

export default App
