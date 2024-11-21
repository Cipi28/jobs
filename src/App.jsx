import { useState } from 'react'
import { Button } from '@chakra-ui/react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    return (
      <div className="p-4">
        {/* Daisy UI Button */}
        <button className="btn btn-primary">Daisy UI Button</button>
  
        {/* Chakra UI Button */}
        <Button colorScheme="teal" className="mt-4">
          Chakra UI Button
        </Button>
      </div>
    );
}

export default App;
