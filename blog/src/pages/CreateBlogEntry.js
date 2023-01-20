import { useState } from "react";
import { useHref } from "react-router-dom";

function CreateBlogEntryPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const backToBlogEntryList = useHref("/blogEntries/");

  const createBlogEntry = () => {
    if (title === "") {
      window.alert("Pavadinimas negali būti tuščias");
    } else {
      fetch("/api/v1/blogEntries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          text,
        }),
      }).then((result) => {
        if (result.ok) {
          setTitle("");
          setText("");
          window.alert("Įrašas sėkmingai sukurtas");
          window.location = { backToBlogEntryList };
        } else {
          window.alert("Įrašo nepavyko sukurti");
        }
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <h4 className="m-2">Sukurti įrašą</h4>
          <form>
            <label htmlFor="title" className="form-label m-2">
              Pavadinimas
            </label>
            <input
              type="text"
              id="author"
              className="form-control m-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="text" className="form-label m-2">
              Įrašas
            </label>
            <input
              type="text"
              className="form-control m-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={createBlogEntry} className="btn btn-secondary m-2">
              Sukurti įrašą
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogEntryPage;
