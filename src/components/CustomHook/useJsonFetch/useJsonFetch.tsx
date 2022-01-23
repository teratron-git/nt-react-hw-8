import axios from "axios"
import { useEffect, useState } from "react"

const useJsonFetch = (url: string, opts = {}) => {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(url)
        const result = await response.data

        if (isMounted) {
          setData(result.status)
          setLoading(false)
        }
      } catch (err: any) {
        setError(err.response.statusText)
        setLoading(false)
      }

      return () => {
        isMounted = false
      }
    }

    fetchData()
  }, [])

  return [data, loading, error]
}

export default useJsonFetch
