import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "@mui/icons-material";
import "./LatestStories.css";


export default function LatestStories() {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=" + process.env.REACT_APP_API_KEY
      );
      setData(data.data.articles);
    };
    getData().then(() => setLoading(false));
  }, []);

  console.log("data:", data.slice(0, 10));

  return (
    <div className="body-wrapper">
      {Loading ? (
        ""
      ) : (
        <>
          {data.slice(0, 12).map((el, i) => {
            return (
              <div key={i} className="News-div">
                <h3>
                  {" "}
                  <span className="n">{i + 1} |</span> {el.title}
                </h3>
                <p>Date Published: {el.publishedAt.slice(0, 10)}</p>
                <p>Source: {el.source.Name}</p>
                <span>
                  {el.author ? <p>Author: {el.author}</p> : <p>Author: N/A</p>}
                </span>
                <div className="border-bottom-width"></div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
