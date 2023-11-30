// Conditional Rendering 4/4寫法

type Props = {
  isPacked: boolean,
  name: string
}

export default function Item({ isPacked, name }: Props) {
  return (
    <>
      {isPacked &&
        <li>{name} V </li>}
      {isPacked ||
        <li>{name} </li>}
    </>
  );

}