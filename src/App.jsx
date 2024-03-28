import { useState } from "react";
import "./App.css";
import ActionSection from "./components/ActionSection/ActionSection";
import CatList from "./components/Cats/CatList";

function App() {
  const [catList, setCatList] = useState([]);
  // const idRef = useRef(0);

  function onHandlerCatBtnClick() {
    const URL = "https://cat-caller.netlify.app/cat-api/1";
    // const URL = "https://api.thecatapi.com/v1/images/search?size=thumb";
    const options = {
      method: "GET",
      // headers: {
      //   "x-api-key":
      //     "live_xCjILOtDRA3u1dbsHvmkobPgD0dHBhYhfyLcUdBOL31C2zawERzhotDZUTuGXosl",
      // },
    };
    fetch(URL, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatList([
          { id: data[0].id, url: data[0].url, pictureHeight: data[0].height },
          ...catList,
        ]);
        // idRef.current += 1;
      })
      .catch((error) => {
        console.log("the error: " + error);
      });
  }

  // function onHandlerCatsBtnClickVarianta1(nrOfCats) {
  //   // const URL = `https://cat-caller.netlify.app/cat-api/${nrOfCats}`;
  //   const URL = `https://api.thecatapi.com/v1/images/search?size=thumb&limit=${nrOfCats}`;
  //   const options = {
  //     method: "GET",
  //   };

  //     fetch(URL, options)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const newCats = data.map((aCat, i) => (
  //         {id: data[i].id, url: data[i].url, pictureHeight: data[i].height}
  //       ));
  //       setCatList([
  //         ...newCats,
  //         ...catList
  //       ])
  //       // idRef.current += 4;
  //     })
  //     .catch((error) => {
  //       console.log("the error: " + error);
  //     })

  // }

  function onHandlerCatsBtnClickVarianta2(event) {
    console.log(event);

    const action = event.target.closest("[data-cats]")?.dataset.cats;

    if (!action) {
      return;
    }

    // let howManyCats = event.target.attributes.getNamedItem("data-cats").value;
    let howManyCats = event.target.dataset.cats;

    // const URL = `https://api.thecatapi.com/v1/images/search?size=thumb&limit=${howManyCats}`;
    const URL = `https://cat-caller.netlify.app/cat-api/${howManyCats}`;
    const options = {
      method: "GET",
      // headers: {
      //   "x-api-key":
      //     "live_xCjILOtDRA3u1dbsHvmkobPgD0dHBhYhfyLcUdBOL31C2zawERzhotDZUTuGXosl",
      // },
    };

    fetch(URL, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const newCats = data.map((aCat, i) => ({
          id: data[i].id,
          url: data[i].url,
          pictureHeight: data[i].height,
        }));
        setCatList([...newCats, ...catList]);
        // idRef.current += 4;
      })
      .catch((error) => {
        console.log("the error: " + error);
      });
  }

  function clearAllCats() {
    catList.splice(0, catList.length);

    setCatList([...catList]);
  }

  return (
    <div
      className="container-fluid"
      style={{
        width: "80vw",
      }}
    >
      <div>
        <h1 className="text-center">Welcome to the Cat Business</h1>
      </div>
      <ActionSection
        myOneCatHandler={onHandlerCatBtnClick}
        callCats={onHandlerCatsBtnClickVarianta2}
        clearCats={clearAllCats}
      />
      <CatList myCatList={catList} />
    </div>
  );
}

export default App;
