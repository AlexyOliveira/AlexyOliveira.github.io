import "./Blog.css";

function Blog() {
  return (
    <div className="blog-container" id="blog">
      <div className="blog-box">
        <h1>Um blog que gosto de acompanhar!</h1>
        <br></br>
        <iframe
          title="ravel"
          src="https://ravel.com.br/blog/"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Blog;
