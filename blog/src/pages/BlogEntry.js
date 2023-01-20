import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateNewComment from "../components/CreateNewComment";

function BlogEntry() {
  const [entry, setEntry] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("/api/v1/blogEntries/" + params.id)
      .then((response) => response.json())
      .then(setEntry);
  }, [params.id]);

  useEffect(() => {
    fetch("/api/v1/blogEntries/comments/" + params.id)
      .then((response) => response.json())
      .then(setComments);
  }, []);

  return (
    <div>
      <div className="m-4">
        <h3 className="mb-2">{entry.title}</h3>
        <h6 className="mb-4">{entry.createdDate}</h6>
        <p className="mb-5">{entry.text}</p>
      </div>
      <CreateNewComment blogEntryId={params.id}></CreateNewComment>
      <div>
        <h3 className="m-4">Komentarai</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="m-4">
            <h5>{comment.author}</h5>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogEntry;
