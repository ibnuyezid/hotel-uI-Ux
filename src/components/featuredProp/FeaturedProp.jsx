import "./featuredprop.css";
import React from "react";
import useFetch from "../../hooks/useFetch";

const FeaturedProp = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-api-production-630c.up.railway.app/api/hotels?featured=true&city=Addis Ababa"
  );
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.address}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProp;