import { IDetailInfo } from "../UseEffect"
import st from "../UseEffect.module.css"

const UseEffect = (props: { detailInfo: IDetailInfo }) => {
  return (
    <>
      {props.detailInfo && (
        <>
          <img src={props.detailInfo?.avatar} alt={props.detailInfo?.name} />
          <div>
            <b>{props.detailInfo?.name}</b>
          </div>
          <div>City: {props.detailInfo?.details?.city}</div>
          <div>Company: {props.detailInfo?.details?.company}</div>
          <div>Position: {props.detailInfo?.details?.position}</div>
        </>
      )}
    </>
  )
}
export default UseEffect
