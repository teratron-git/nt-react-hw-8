import axios from "axios"
import { useEffect, useState } from "react"
import Details from "./Details"
import List from "./List"
import st from "./UseEffect.module.css"

interface IProps {
  task: string
  onChangeHandler: (e: any) => void
}

const UseEffect = () => {
  const [data, setData] = useState([])
  const [detailInfo, setDetailInfo] = useState({})
  console.log("🚀 ~ file: UseEffect.tsx ~ line 14 ~ UseEffect ~ data", data)
  console.log("🚀 ~ file: UseEffect.tsx ~ line 15 ~ UseEffect ~ detailInfo", detailInfo)

  async function getData(url: string) {
    try {
      const response = await axios.get(url)
      const result = await response.data
      console.log("🚀 ~ file: UseEffect.tsx ~ line 22 ~ getdata ~ result", result)

      return result
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      )
      console.log("🚀 ~ file: UseEffect.tsx ~ line 34 ~ useEffect ~ response!!!", response)

      setData(response)
    }
    fetchData()
  }, [])

  const onClickHandler = (id: number): void => {
    const fetchData = async () => {
      const response = await getData(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      )
      console.log("🚀 ~ file: UseEffect.tsx ~ line 34 ~ useEffect ~ response!!!", response)
      setDetailInfo(response)
    }
    fetchData()
  }

  return (
    <div className={st.container}>
      <List data={data} onClickHandler={onClickHandler} />
      <Details detailInfo={detailInfo} />
    </div>
  )
}
export default UseEffect
