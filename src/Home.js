import { useEffect, useState } from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Home = () => {
    // const { title, data: emps, isLoading, error } = useFetch(' http://localhost:8000/employess');
    const { title, data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    //List of Objects


    // const deleteBlog = (id) => {
    //     const updatedBlogs = blogs.filter(blog => blog.id !== id);
    //     setData(updatedBlogs);
    // }
    return (
        <div className="Home">
            {error && <div> {error} </div>}
            {isLoading && <div> Loading ... </div>}
            {blogs && <BlogList blogs={blogs} title={title} />}
            {/* {blogs && <BlogList blogs={blogs} title={title} />} */}
            {/* {emps && <EmployeeList emps={emps} title={title} />} */}
            {/* <BlogList blogs={blogs} title={title} deleteBlog={deleteBlog} />
            <button onClick={() => setTitle("Updated Title")}>Update Title</button> */}
            {/* <BlogList blogs={blogs.filter((blog) => (blog.author === "x"))} title={title} /> */}
        </div>
    )
}

export default Home;