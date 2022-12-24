import "./feature.css";
import React from "react";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-api.onrender.com/api/hotels/countByCity?cities=berlin,Addis Ababa,amster"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1571946080923-a81668948f52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWRkaXMlMjBhYmFiYSUyMGV0aGlvcGlhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>In Addis Ababa</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="http://nextamazingtrip.com/wp-content/uploads/countrys_img/img-travel/ethiopia/adama/ethiopia-adama-travel.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Adama</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bishoftu</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
