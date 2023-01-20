import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function BlogEntryListPage() {
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    fetch("/api/v1/blogEntries/ordered")
      .then((response) => response.json())
      .then((jsonResponse) => setBlogEntries(jsonResponse));
  }, []);

  return (
    <div>
      <h1 className="m-4">Blog entries</h1>
      {blogEntries.map((entry) => (
        <div key={entry.id} className="my-5">
          <h3 className="m-4">{entry.title}</h3>
          <h6 className="m-4">Published: {entry.createdDate}</h6>
          <p className="m-4">{entry.text}</p>
          <div className="m-4">
            <Link to={"/blogEntries/view/" + entry.id}>View</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogEntryListPage;
