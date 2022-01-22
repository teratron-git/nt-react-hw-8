import axios from "axios"
import { useEffect, useState } from "react"
import Details from "./Details"
import List from "./List"
import st from "./UseEffect.module.css"

export interface IDetailInfo {
  avatar: string
  details: {
    city: string
    company: string
    position: string
  }
  id: number
  name: string
}

const UseEffect = () => {
  const [data, setData] = useState([])
  const [detailInfo, setDetailInfo] = useState<IDetailInfo>(null)
  const [currentId, setCurrentId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingId, setIsLoadingId] = useState(false)

  async function getData(url: string) {
    try {
      const response = await axios.get(url)
      const result = await response.data

      return result
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getData(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      )
      setData(response)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (currentId) {
      const fetchData = async () => {
        setIsLoadingId(true)
        const response = await getData(
          `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${currentId}.json`
        )
        setDetailInfo(response)
        setIsLoadingId(false)
      }

      fetchData()
    }
  }, [currentId])

  const onClickHandler = (id: number): void => {
    setCurrentId(id)
  }

  return (
    <div className={st.container}>
      <div className={st.list}>{isLoading ? <span>Loading...</span> : <List data={data} onClickHandler={onClickHandler} />}</div>
      <div className={st.detailInfo}>{isLoadingId ? <span>Loading...</span> : <Details detailInfo={detailInfo} />}</div>
    </div>
  )
}
export default UseEffect
