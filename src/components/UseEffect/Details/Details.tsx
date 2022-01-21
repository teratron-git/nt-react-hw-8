interface IProps {
  task: string
  onChangeHandler: (e: any) => void
}

const UseEffect = (props: any) => {
  console.log("🚀 ~ file: Details.tsx ~ line 7 ~ UseEffect ~ props", props)

  return <div>{props.detailInfo.id}</div>
}
export default UseEffect
