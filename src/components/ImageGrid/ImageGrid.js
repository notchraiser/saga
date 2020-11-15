import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { Button } from "react-bootstrap";
import { loadImages } from "../../actions";
const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

function ImageGrid() {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setImages(response);
  //     });
  // }, []);

  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div>
      {images.load ? (
        <h2>Loading...</h2>
      ) : images.error ? (
        <h2>{images.error}</h2>
      ) : (
        <div className="content">
          <section className="grid">
            {images.images.map((image) => (
              <div
                key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            ))}
          </section>
          <Button variant="primary" onClick={() => dispatch(loadImages())}>
            Load Images
          </Button>{" "}
        </div>
      )}
    </div>
  );
}

export default ImageGrid;
