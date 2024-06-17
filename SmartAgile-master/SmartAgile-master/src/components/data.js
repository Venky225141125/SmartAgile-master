import React, { useState, useEffect } from "react";
import axios from "axios";

function DataCheck() {
  const [dataExists, setDataExists] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get("http://127.0.0.1:8000/api/check_data/")
      .then((response) => {
        // Update state based on the response
        setDataExists(response.data.data_exists);
        setData(response.data.data); // Assuming the API response contains data
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Data exists: {dataExists ? "Yes" : "No"}</p>
          {dataExists && data && (
            <div>
              <h2>Data:</h2>
              <ul>
                {data.map((item) => (
                  <li key={item.id}>
                    {item.first_name} {item.last_name} - {item.email}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DataCheck;
