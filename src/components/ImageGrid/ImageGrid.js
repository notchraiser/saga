import React, { useState, useEffect } from "react";
import { useSelector, useDispach } from 'react-redux';
import "./styles.css";
const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

function ImageGrid() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // const data = useSelector(state => state.imagesReducer);
  // const dispatch = useDispach();
  // useEffect(()=>{
  //   // dispatch();
  // },[dispatch])

  return (
    <div className="content">
      <section className="grid">
        {data.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ImageGrid;
