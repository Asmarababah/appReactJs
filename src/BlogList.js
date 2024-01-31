import { Link } from "react-router-dom";
function BlogList({ blogs, title }) {
  
    return (
        <div className="blog-list">
            <h1> {title} </h1>
            {blogs.map((blog) => (
                <div className="blog-info" key={blog.id}>
                    <h2> {blog.title} </h2>

                    <Link to={`/blogs/${blog.id}`}>
                        <h4> View Blog details</h4>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;