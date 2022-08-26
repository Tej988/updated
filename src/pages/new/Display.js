import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
export default function Display() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch(`https://xenon-blog.herokuapp.com/api/blog`)
//    .then((response) => response.json()).then((json)=>{setData()=>})
 }, []);

 return (
    <>
      <div>
      {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          ))}
      </div>
    </>
 )

}