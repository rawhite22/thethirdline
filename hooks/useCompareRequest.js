import { useState, useEffect } from 'react'

export function useCompareRequest(ids) {
  const [data, setData] = useState([])
  useEffect(() => {
    ids.forEach((id) => {
      const fetchData = async () => {
        const response = await fetch(
          `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`
        )
        const data = await response.json()

        setData((prevState) => [...prevState, data.people[0]])
      }
      fetchData()
    })
  }, [])

  return { data }
}
