function Post({ title, body, id }) {
  return (
    <div>
      <p>Id: {id}</p>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
      <hr />
    </div>
  );
}

export default Post;
