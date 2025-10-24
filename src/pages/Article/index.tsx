
export default function Article(props: {heading:string; content:string}) {
  return (
    <>
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
    </>
  )
}
