import { useState } from 'react'
import MessageList from './components/chatWindowComponent/messageList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MessageList />
    </div>
  )
}

export default App