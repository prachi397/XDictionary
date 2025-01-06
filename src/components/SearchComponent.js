import React, { useState } from "react";

const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]

const SearchComponent = () =>{
    const [searchItem, setSearchItem] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    function handleChange(e){
        setSearchItem(e.target.value);
    }
    function handleSearch(searchedVal){
        setIsBtnClicked(true);
       let result =  dictionary.filter((ele)=>ele.word.toLowerCase() === searchedVal.toLowerCase());
       if(result.length>0){
        setSearchResult(result[0].meaning);
       }else{
        const errMsg = "Word not found in the dictionary.";
        setSearchResult(errMsg);
       }
    }
    return(
        <div>
            <h1>Dictionary App</h1>
            <input type="text" placeholder="Search for a word..." onChange={handleChange} value={searchItem}/>
            <button onClick={()=>handleSearch(searchItem)}>Search</button>
            <h3>Definition:</h3>
            {isBtnClicked &&
            <p>{searchResult}</p>
            }
        </div>
    )
}
export default SearchComponent;