export default function Avatar(){
  const imgUrl:string = "https://i.imgur.com/7vQD0fPs.jpg";
  const description:string = "Gregorio Y. Zara";
  return (
    <div>
    <img
    className="avatar"
    src={imgUrl}
    alt={description}
  />
  </div>
  );
}