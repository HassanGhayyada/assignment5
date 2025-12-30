import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
    const[showProducts,setShowProducts] = useState(true);
    const[name,setName]= useState("");
    
    return(
      <div>
        <h1>React Product Dashboard</h1>

        <button onClick={() => setShowProducts(!showProducts)}>
          {showProducts ? "Hide products" : "Show Products"}
        </button>

        <div>
          <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Your Name'
          />
        </div>

        <p>Hello, {name}</p>

        {showProducts && < ProductList />}
      </div>
    );
}
export default App;
