const requests = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_REQUESTS = 5

export function getClientAddress(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0].trim()
    || request.headers.get('x-real-ip')
    || 'unknown'
}

export function isRateLimited(key: string) {
  const now = Date.now()
  const recent = (requests.get(key) || []).filter((timestamp) => now - timestamp < WINDOW_MS)

  if (recent.length >= MAX_REQUESTS) {
    requests.set(key, recent)
    return true
  }

  recent.push(now)
  requests.set(key, recent)
  return false
}
