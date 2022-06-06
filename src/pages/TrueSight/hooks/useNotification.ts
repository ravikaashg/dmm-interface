import { useLocalStorage } from 'react-use'
import { checkChrome } from 'utils/checkChrome'
import { fetchToken } from 'utils/firebase'

export const useNotification = () => {
  const [subscribe, setSubscribe] = useLocalStorage('true-sight-subscribe', false)
  const isChrome = checkChrome()

  const handleSubscribe = async () => {
    if (!isChrome) return

    const token = await fetchToken()
    // TODO: implement for Safari
    if (!token || !isChrome) return
    const payload = { users: [{ type: isChrome && 'FCM_TOKEN', receivingAddress: token }] }

    const response = await fetch(`${process.env.REACT_APP_NOTIFICATION_API}/v1/topics/1/subscribe`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(payload),
    })

    if (response.status === 200) {
      setSubscribe(true)
    }
  }

  const handleUnSubscribe = async () => {
    const token = await fetchToken()
    if (!token) return
    const payload = { users: [{ type: isChrome && 'FCM_TOKEN', receivingAddress: token }] }

    const response = await fetch(`${process.env.REACT_APP_NOTIFICATION_API}/v1/topics/1/unsubscribe`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(payload),
    })

    if (response.status === 200) {
      setSubscribe(false)
    }
  }
  return { isChrome, subscribe, handleSubscribe, handleUnSubscribe }
}
