import st from "../UseEffect.module.css"

interface IProps {
  data: any[]
  onClickHandler: (id: number) => void
}

const UseEffect = (props: IProps) => {
  console.log("🚀 ~ file: List.tsx ~ line 9 ~ UseEffect ~ props", props)

  return (
    <div className={st.list}>
      {props.data.map((item: any) => (
        <div key={item.id} className={st.listItem} onClick={(id) => props.onClickHandler(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  )
}
export default UseEffect
