// /lib/impact.ts
//
// SINGLE SOURCE OF TRUTH for impact numbers and the farmer story.

export const impactStats = {
  verified: true,
  items: [
    { value: 30, suffix: '+', label: 'Smallholder farmers supplying VegInn' },
    { value: 2, suffix: '', label: 'Districts covered' },
    { value: 10, suffix: '+', label: 'Retail and institutional buyers served' },
  ],
}

export const farmerStory = {
  verified: true,
  name: 'Uwintije Clemantine',
  location: 'Karenge, Rwamagana',
  image: '/farmer.jpg',
  quote:
    'I no longer worry. My harvest already has buyers while the crops are still growing.',
  before:
    'I planted and harvested without a plan, hoping to sell quickly at the market once the crops were ready.',
  after:
    'I now have guaranteed buyers at a standard price and proper storage, so I am never forced to rush my sales.',
}

/** Show a section if verified, or in development so it can be reviewed. */
export function shouldShow(verified: boolean) {
  return verified || process.env.NODE_ENV === 'development'
}
