import st from "../UseEffect/UseEffect.module.css"
import useJsonFetch from "./useJsonFetch"

const CData = () => {
  const url = "http://localhost:7070/data"
  const opts = {}
  const [data, loading, error] = useJsonFetch(url, opts)

  return (
    <div>
      {`Компонент 1 (data): `}
      {loading ? <span>Загрузка...</span> : <span>{data}</span>}
    </div>
  )
}

const CLoading = () => {
  const url = "http://localhost:7070/loading"
  const opts = {}
  const [data, loading, error] = useJsonFetch(url, opts)

  return (
    <div>
      {`Компонент 2 (loading): `}
      {loading ? <span>Загрузка...</span> : <span>{data}</span>}
    </div>
  )
}

const CError = () => {
  const url = "http://localhost:7070/error"
  const opts = {}
  const [data, loading, error] = useJsonFetch(url, opts)

  return (
    <div>
      {`Компонент 3 (error): `}
      {loading ? <span>Загрузка...</span> : <span>{`${error}`}</span>}
    </div>
  )
}

const CustomHook = () => {
  return (
    <div className={st.container} style={{ flexDirection: "column" }}>
      <CData />
      <br />
      <CLoading />
      <br />
      <CError />
    </div>
  )
}
export default CustomHook
