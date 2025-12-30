import { useState } from 'react'
import ProductList from './components/ProductList'

function App() {
    const[showProducts,setShowProducts] = useState(true);
    const[name,setName]= useState("");
    
    return(
      <div>
        <h1>React Product Dashboard</h1>

        <button onClick={() => setShowProducts(!showProducts)}
          style= {{
            backgroundColor: "#2563eb", 
            color: "white",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "1rem"
          }}
          >
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
