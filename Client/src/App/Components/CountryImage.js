import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "kfcL_rVhcX3cXPOzI6W8uHeB8vT9Ouk3sA-OVvLzYIY",
});

const PhotoComp = ({ photo }) => {
  const { urls } = photo;

  return (
    <Fragment>
      <img alt="country" className="img" src={urls.regular} />
    </Fragment>
  );
};

const CountryImage = (props) => {
  const [data, setPhotosResponse] = useState(null);
  useEffect(() => {
    api.search
      .getPhotos({ query: props.querry, orientation: "landscape" })
      .then(async (result) => {
        setPhotosResponse(result);
        console.log(data.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
    // eslint-disable-next-line
  }, [props.querry]);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    if (props.querry === "") return <PhotoComp photo={{ url: "https://i.pinimg.com/originals/77/f1/a2/77f1a2a7f6c55db52c0ccf7181d7aeb2.png" }} />;
    return <PhotoComp photo={data.response.results[0]} />;
  }
};

export default CountryImage;
