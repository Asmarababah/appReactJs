import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('select an Option');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:8000/blogs/' + id).then((response) => {
            console.log("success");
            return response.json();
        }).then((response) => {
            console.log(response);
            setTitle(response.title);
            setContent(response.content);
            setAuthor(response.author);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, author };
        console.log(blog);
        setLoading(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/' + id, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("the blog details are updated");
                setLoading(false);
                navigate('/');
            })
        }, 3000);
    }
    return (<div className="create">
        <h2> Edit Blog Details</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}> required
            </textarea>
            <label>Author Name</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option disabled>select an Option</option>
                <option> x </option>
                <option> y </option>
                <option> z </option>
            </select>
            {!loading && <button>Edit Blog</button>}
            {loading && <button disabled>Editing Blog... </button>}
        </form>
    </div>);
}
export default EditBlog;