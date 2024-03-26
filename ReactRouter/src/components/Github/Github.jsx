import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Divyakumar0711")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  console.log(data);
  return (
    <div className="bg-gray-600 text-center text-white text-3xl p-4 m-4">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github pic" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Divyakumar0711");
  return response.json();
};
