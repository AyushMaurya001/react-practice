import ProgressBar from "./components/ProgressBar";

function App() {

  const stages = [1, 2, 3, 4];

  return (
    <div>
      <ProgressBar stages={stages} />
    </div>
  )
}

export default App
