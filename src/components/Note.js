const Note = ({ title, img, mood }) => {
    return (
      <article className="card">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{mood}</p>
      </article>
    );
  };
  
  export default Note;
  