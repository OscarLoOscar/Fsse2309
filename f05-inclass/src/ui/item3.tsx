// Conditional Rendering 3/4寫法

type Props = {
  score: number,
  name: string
}

export default function Item({ name, score }: Props) {
  return (
    <>
      <h1>
        Student : {name}
        {
          score > 90 ? <div style={{ color: "green" }}>A</div> :
            score > 80 ? <div style={{ color: "blue" }}>B</div> :
              <div style={{ color: "red" }}>Fail</div>
        }
      </h1>
    </>
  );
}