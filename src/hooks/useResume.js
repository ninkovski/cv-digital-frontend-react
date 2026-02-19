import { useCallback, useEffect, useState } from 'react'
import { RESUME_API_KEY, RESUME_API_URL } from '../config'

export function useResume() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchResume = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(RESUME_API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': RESUME_API_KEY
        }
      })

      if (!response.ok) {
        throw new Error(`No se pudo cargar el CV (HTTP ${response.status})`)
      }

      const payload = await response.json()
      const profile = payload?.profile || payload
      setData(profile)
    } catch (fetchError) {
      setError(fetchError.message || 'Error inesperado al consultar la API')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchResume()
  }, [fetchResume])

  return {
    data,
    isLoading,
    error,
    retry: fetchResume
  }
}
