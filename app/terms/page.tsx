import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use',
  description: 'Terms for using the VegInn website.',
}

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-foreground md:py-24">
      <h1 className="mb-4 text-4xl font-bold text-primary">Terms of Use</h1>
      <p className="mb-10 text-muted-foreground">Last updated: November 5, 2026</p>
      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Website information</h2>
          <p>This website provides general information about VegInn, its agricultural value-chain activities, opportunities, and partnership programs. Information may change as our operations develop.</p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Submissions</h2>
          <p>Please provide accurate information when contacting us or requesting a partnership. A submission does not create a contract, guarantee a market, or confirm a job or partnership.</p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">Contact</h2>
          <p>Questions about these terms can be sent to <a className="text-primary underline" href="mailto:info@veginn.rw">info@veginn.rw</a>.</p>
        </section>
      </div>
      <Link href="/" className="mt-10 inline-block text-primary underline">Return to VegInn</Link>
    </article>
  )
}
