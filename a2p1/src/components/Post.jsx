function Post({ first_name, last_name, email, avatar }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" />
      <p>Name : {first_name} {last_name}</p>
      <p>Email : {email}</p>
    </div>
  );
}

export default Post;
