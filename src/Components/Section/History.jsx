// import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
// import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
export const History = () => {
  // you will receive History name from URL here.
  // Get books for only this History and show
  //   Everything else is same as Home page
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  function getData() {
    axios.get(`http://localhost:3000/history`).then((data) => {
      setData(data.data)
    })
  }
  const Main = styled.div`
    /* Same as Homepage */
  `;
  console.log('data', data);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show History name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />
      <Main className="HistoryContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this History */}
       {
         data.map((element)=>{
          return (
            <>
             <div><img src={element.Book_Image} alt="" /></div>

             <div>{element.Title}</div>
             <div>{element.Author}</div>
             <div>{element.Description}</div>
             <div>{element.Price}</div>

             <div>{element.Random_Reviews }</div>
            
            </>
          )
         })
       }
      </Main>
    </>
  );
};
