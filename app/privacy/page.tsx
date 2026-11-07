import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How VegInn collects and uses information submitted through its website.',
}

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-foreground md:py-24">
      <h1 className="mb-4 text-4xl font-bold text-primary">Privacy Policy</h1>
      <p className="mb-10 text-muted-foreground">Last updated: November 5, 2026</p>
      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Information we collect</h2>
          <p>When you contact VegInn, request a partnership, or subscribe to opportunity updates, we collect the information you choose to provide, such as your name, email address, phone number, location, and message.</p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">How we use information</h2>
          <p>We use submissions to respond to inquiries, evaluate partnership opportunities, communicate about relevant jobs or training, and improve our services. We do not sell personal information.</p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Email communications</h2>
          <p>You can stop receiving opportunity updates at any time by contacting us at <a className="text-primary underline" href="mailto:info@veginn.rw">info@veginn.rw</a>.</p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Contact</h2>
          <p>For questions about this policy or your information, contact us at <a className="text-primary underline" href="mailto:info@veginn.rw">info@veginn.rw</a>.</p>
        </section>
      </div>
      <Link href="/" className="mt-10 inline-block text-primary underline">Return to VegInn</Link>
    </article>
  )
}
