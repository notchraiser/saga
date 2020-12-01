import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import Btn from '../Btn';
import { loadImages } from "../../actions";
import Stats from '../Stats';
// const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

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
  const imagestats = useSelector((state) => state.imagestats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div>
        <div className="content">
          <section className="grid">
            {images.images.map((image) => (
              <div
                key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <Stats stats={imagestats[image.id]} />
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            ))}
          </section>
          {images.error && <div className="error">{JSON.stringify(images.error)}</div>}
          <Btn onClick={() => !images.load && dispatch(loadImages())} loading={images.load}>
            Load Images
          </Btn>{" "}
        </div>
    </div>
  );
}

export default ImageGrid;
