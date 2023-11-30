//create a type / interface => can extend / cannot extend
type Props = {
  person: {
    name: string,
    imageId: string
  },
  size?: number//加問號變optional
}
//Approach 1 
// export default function Avatar2(props: Props) { //收一個props ，type係Props
//   return (
//     <>
//       <img
//         className="avatar"
//         src={`https://i.imgur.com/${props.person.imageId}.jpg`}
//         alt={props.person.name}
//         width={props.size}
//         height={props.size}
//       />
//     </>
//   );
// }

//Approach 2 
export default function Avatar2({ person, size =100}: Props) { //Destructuring -> 拆開object用 ，final type係Props,can make default value
  return (
    <>
      <img
        className="avatar"
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}