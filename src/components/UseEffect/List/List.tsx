import st from "../UseEffect.module.css"

interface IProps {
  data: { id: number; name: string }[]
  onClickHandler: (id: number) => void
}

const List = (props: IProps) => {
  console.log("🚀 ~ file: List.tsx ~ line 9 ~ UseEffect ~ props", props)

  return (
    <>
      {props.data.map((item) => (
        <div key={item.id} className={st.listItem} onClick={() => props.onClickHandler(item.id)}>
          {item.name}
        </div>
      ))}
    </>
  )
}
export default List
