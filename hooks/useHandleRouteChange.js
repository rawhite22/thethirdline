import { useEffect } from 'react'
import { useRouter } from 'next/router'
function useHandleRouteChange(dispatch) {
  const router = useRouter()
  const { query, push } = router
  useEffect(() => {
    router.events.on('routeChangeStart', () => dispatch({ type: 'CHANGING' }))
    return () =>
      router.events.on('routeChangeComplete', () =>
        dispatch({ type: 'CHANGED' })
      )
  }, [])
  return { query, push }
}
export default useHandleRouteChange
