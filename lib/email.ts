export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function getEmailFrom(name: string) {
  return process.env.RESEND_FROM_EMAIL || `${name} <onboarding@resend.dev>`
}

export function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]/g, ' ')
}
