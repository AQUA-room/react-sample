import { Button, Text } from "@yamada-ui/react"
import { FC, useState } from "react"

const DisplayName:FC<{name:string}> = ({name}) => {
  return <div>Hello {name}</div>
}
const CountPreview:FC<{count:number}> = ({count}) => {
  return <Text color={"red"}>count:{count}</Text>
}
function App() {
  // let count = 0
  const [count,setCount] = useState(0)
  console.log(count)
  const handleplus = () => {
    // count++
    setCount(count + 1)
    console.log(count)    
  }
  const handleminus = () => {
    // count++
    if (count == 0) {
      return
    }
    setCount(count - 1)
    console.log(count)    
  }
  return (
    <div className="App">
      <DisplayName name="ako"/>
      <DisplayName name="dfgh"/>
      <CountPreview count={count}/>
      <Button onClick={handleplus}>+</Button>
      <Button onClick={handleminus}>-</Button>
    </div>
  );
}

export default App;
