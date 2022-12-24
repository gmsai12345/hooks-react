import React, { useState, useEffect } from "react";

function Example() {
  const [data, setData] = useState(null); // data state to store the fetched data
  const [loading, setLoading] = useState(true); // loading state to indicate whether data is being fetched
  const [error, setError] = useState(null); // error state to store any errors that occur

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // set loading to true while data is being fetched
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data); // store the fetched data in the data state
      } catch (error) {
        setError(error); // store any errors that occur in the error state
      }
      setLoading(false); // set loading to false when the data has been fetched
    };
    fetchData();
  }, [apiUrl]); // only run the effect if apiUrl changes

  // Render the data, loading indicator, or error message based on the current state
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  if (data) {
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  return null;
}
