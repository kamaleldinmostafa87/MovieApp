import React,{useState,useEffect} from 'react';
import './App2.css';
import Header from './Components/Ui/Header';
import axios from 'axios';
import CharactersGrid from './Components/Characters/CharactersGrid';
import Search from './Components/Ui/Search';

function App() {

  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [query,setQuery] = useState('');
  // const BASE_URL = `https://www.breakingbadapi.com/api/characters`;

  useEffect(()=>{ 
  //   const data = {
  //     char_id: 3,
  //     name: "Skyler White",
  //     birthday: "08-11-1970",
  //     occupation: ["House wife", "Book Keeper", "Car Wash Manager", "Taxi Dispatcher"],
  //     img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
  //     status: "Alive",
  //     appearance: [1, 2, 3, 4, 5],
  //     nickname: "Sky",
  //     portrayed:"Anna Gunn"
  // }
   
      const fetchItems = async ()=>{
      setIsLoading(true);
     const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);  
     setItems(result.data);
     console.table(result.data)
     setIsLoading(false);
    } 
    fetchItems();
  },[query])

 const Delete =(id)=>{
  items.filter(item=>item.char_id!==id)
}
 
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharactersGrid Delete={Delete} isLoading={isLoading} items={items}/>
     
    </div>
  );
}

export default App;
