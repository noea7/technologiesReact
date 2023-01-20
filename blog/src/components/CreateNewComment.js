import { useState } from "react";
import { useHref } from "react-router-dom";
import { useParams } from "react-router-dom";

function CreateNewComment(props) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  // const params = useParams();

  const backToBlogEntry = useHref("/blogEntries/view/:id");

  const createComment = () => {
    fetch(`/api/v1/blogEntries/comments/` + props.blogEntryId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        message,
      }),
    }).then((result) => {
      if (result.ok) {
        setAuthor("");
        setMessage("");
        window.alert("Komentaras sėkmingai pridėtas");
        window.location = { backToBlogEntry };
      } else {
        window.alert("Komentaro nepavyko sukurti");
      }
    });
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-6">
          <h4 className="m-2">Palikti komentarą</h4>
          <form>
            <label htmlFor="author" className="form-label m-2">
              Autorius
            </label>
            <input
              type="text"
              id="author"
              className="form-control m-2"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="message" className="form-label m-2">
              Komentaras
            </label>
            <input
              type="text"
              className="form-control m-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={createComment} className="btn btn-secondary m-2">
              Komentuoti
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewComment;
