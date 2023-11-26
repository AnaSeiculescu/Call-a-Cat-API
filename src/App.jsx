import { useState, useRef } from 'react'
import './App.css'
import ActionSection from './components/ActionSection/ActionSection';
import CatList from './components/Cats/CatList';

function App() {
  const [catList, setCatList] = useState([]);
  const idRef = useRef(0);

  function onHandlerCatBtnClick() {
    const URL = "https://api.thecatapi.com/v1/images/search?size=thumb";
    const options = {
      method: 'GET',
    };
    fetch(URL, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCatList([
        {id: idRef.current, url: data[0].url, pictureId: data[0].id, pictureHeight: data[0].height},
        ...catList
      ]);
      idRef.current += 1;
    })
    .catch((error) => {
      console.log('the error: ' + error);
    })
  }

  function onHandlerFourCatsBtnClick() {
    const URL = "https://api.thecatapi.com/v1/images/search?size=thumb&limit=4";
    const options = {
      method: "GET",
    };

      fetch(URL, options) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const newCats = data.map((aCat, i) => (
          {id: data[i].id, url: data[i].url, pictureHeight: data[i].height}
        ));
        setCatList([
          ...newCats,
          ...catList
        ])
        idRef.current += 4;
      })
      .catch((error) => {
        console.log("the error: " + error);
      })

  }


  function onHandlerCatsBtnClickVarianta1(nrOfCats) {
    const URL = `https://api.thecatapi.com/v1/images/search?size=thumb&limit=${nrOfCats}`;
    const options = {
      method: "GET",
    };

      fetch(URL, options) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const newCats = data.map((aCat, i) => (
          {id: data[i].id, url: data[i].url, pictureHeight: data[i].height}
        ));
        setCatList([
          ...newCats,
          ...catList
        ])
        idRef.current += 4;
      })
      .catch((error) => {
        console.log("the error: " + error);
      })

  }

  function onHandlerCatsBtnClickVarianta2(event) {
    console.log(event);

    console.log('data-id: ', event.target.getAttribute('data-caca'))
    console.log('data set: ', event.target.dataset.caca)

    const URL = `https://api.thecatapi.com/v1/images/search?size=thumb&limit=${1}`;
    const options = {
      method: "GET",
    };

      fetch(URL, options) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const newCats = data.map((aCat, i) => (
          {id: data[i].id, url: data[i].url, pictureHeight: data[i].height}
        ));
        setCatList([
          ...newCats,
          ...catList
        ])
        idRef.current += 4;
      })
      .catch((error) => {
        console.log("the error: " + error);
      })

  }


  function clearAllCats() {
    catList.splice(0, catList.length)
 
    setCatList([...catList]);
  }

  return (
    <>
      <div>
        <h1>Welcome to the Cat Business</h1>
      </div>
      <ActionSection myOneCatHandler={onHandlerCatBtnClick} myFourCatsHandler={onHandlerFourCatsBtnClick} callCats={onHandlerCatsBtnClickVarianta2} clearCats={clearAllCats}/>
      <CatList myCatList={catList}/>
    </>
  )
}

export default App
