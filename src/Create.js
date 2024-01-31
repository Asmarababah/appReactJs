import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Choose the author");
    const [Loading, setLoading] = useState(false);
    const navigate =useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author };
        console.log(blog);
        setLoading("true");

        setTimeout(() => {
            fetch('http://localhost:8000/blogs/', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("NewBlog");
                setLoading(false);
                navigate ('/')
            });

        }, 1000);

    }


    return (<div className="create">
        <h2> Create Page  </h2>
        <form onSubmit={handleSubmit}>
            <label> Title </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label > Blog Details </label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} cols="30" rows="10"> </textarea>
          
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option defaultValue disabled> Choose the Author</option>
                <option > X </option>
                <option > Y </option>
                <option > Z </option>
            </select>
            {!Loading && <button>  Add blog </button>}
            {Loading && <button disabled>  Adding blog... </button>}


        </form>
        {/* <p> {title}</p>
        <p> {content}</p>
        <p> {author}</p> */}

    </div>

    );
}

export default Create