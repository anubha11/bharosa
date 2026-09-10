/**
 * Static, human-written content for the Bharosa demo.
 *
 * Everything here is copy the product needs to feel real: brand + persona
 * facts, the demo quote data, plan detail, the comparison table, network
 * hospitals, engagement cards, and the seeded claim's paper trail. Screens
 * import from here so the copy lives in one place.
 */

export const BRAND = {
  name: 'Bharosa',
  meaning: '“trust”, in Hindi and Urdu',
  aiAdvisor: 'Meera',
  humanAdvisor: 'Rohit Menon',
  humanAdvisorBlurb: 'IRDAI-certified · salaried, no commission · 9 years · handles 40 claims a week',
  insurer: 'Niva Suraksha',
}

export interface Plan {
  id: string
  name: string
  scope: string
  monthly: number
  annual: number
  benefit: string
  why: string
  recommended?: boolean
}

export const PLANS: Plan[] = [
  {
    id: 'family-floater-10l',
    name: 'Family Floater 10L',
    scope: 'Niva Suraksha · 3 members',
    monthly: 1940,
    annual: 23280,
    benefit: 'No room-rent cap',
    why: 'One ₹10L pot for all three, and the only one without a room-rent cap — where Mumbai bills bite.',
    recommended: true,
  },
  {
    id: 'split-5l-5l',
    name: 'Split cover 5L + 5L',
    scope: 'Two policies · you / parents',
    monthly: 2210,
    annual: 26520,
    benefit: "Parents' claims stay separate",
    why: '₹270 more a month, but a big parental claim can’t eat the cover you kept for yourself.',
  },
  {
    id: 'starter-5l',
    name: 'Starter 5L floater',
    scope: 'Lowest premium',
    monthly: 1180,
    annual: 14160,
    benefit: 'Cheapest way in',
    why: 'Honest caveat — ₹5L split three ways in Mumbai is thin. Here because it’s affordable today.',
  },
]

export const RECOMMENDED_PLAN = PLANS[0]

export function planById(id: string | null | undefined): Plan {
  return PLANS.find((p) => p.id === id) ?? RECOMMENDED_PLAN
}

/** Full breakdown for the recommended plan's detail screen. */
export interface DetailRow {
  k: string
  v: string
  note: string
  term?: string
}

export const PLAN_DETAIL: DetailRow[] = [
  { k: 'Sum insured', v: '₹10,00,000', note: 'Shared by all three across the year', term: 'sum-insured' },
  { k: 'Room rent cap', v: 'None', note: 'Any private room. No proportionate deduction', term: 'room-rent-cap' },
  { k: 'Initial waiting period', v: '30 days', note: 'Accidents covered from day one', term: 'waiting-period' },
  { k: 'Pre-existing conditions', v: '2 years', note: 'Applies to dad’s blood pressure only', term: 'pre-existing' },
  { k: 'Co-pay', v: 'None', note: 'No fixed share of every claim on you', term: 'co-pay' },
  { k: 'Network hospitals', v: '8,400', note: '62 in Mumbai, including Lilavati and Hinduja', term: 'network' },
  { k: 'Restore benefit', v: 'Once a year', note: 'Refills if one claim exhausts it', term: 'restore' },
]

export const PLAN_EXCLUSIONS =
  'Cosmetic surgery, dental unless after an accident, OPD visits, and dad’s BP claims for 2 years. Better read now than discovered later.'

/** Opt-in side-by-side comparison. */
export const COMPARE_ROWS = [
  'Sum insured',
  'Room rent cap',
  'Co-pay',
  'PED wait',
  'Network',
  'Restore',
  'Annual cost',
] as const

export const COMPARE_COLUMNS: { planId: string; name: string; monthlyLabel: string; values: string[] }[] = [
  {
    planId: 'family-floater-10l',
    name: 'Family Floater 10L',
    monthlyLabel: '₹1,940/mo',
    values: ['₹10L shared', 'None', 'None', '2 years', '8,400', 'Yes, once', '₹23,280'],
  },
  {
    planId: 'split-5l-5l',
    name: 'Split cover 5L + 5L',
    monthlyLabel: '₹2,210/mo',
    values: ['₹5L + ₹5L', '1% of SI', 'None', '2 years', '8,400', 'Yes, once', '₹26,520'],
  },
  {
    planId: 'starter-5l',
    name: 'Starter 5L floater',
    monthlyLabel: '₹1,180/mo',
    values: ['₹5L shared', '1% of SI', '10%', '3 years', '6,100', 'No', '₹14,160'],
  },
]

/** "In plain words" glossary — triggered inline where a term appears. */
export const GLOSSARY: Record<string, { term: string; plain: string; why: string }> = {
  'waiting-period': {
    term: 'Waiting period',
    plain:
      'A gap at the start when one specific illness isn’t claimable yet. For your dad’s BP that’s 2 years. Everything else — accidents, dengue, surgery — is covered from day one.',
    why: 'It exists to stop people buying a policy on the way to surgery. Declare the condition and it’s simply time-limited, not a reason to reject you later.',
  },
  'pre-existing': {
    term: 'Pre-existing condition',
    plain:
      'Something a doctor has already named — like your dad’s blood pressure — before the policy started. It’s covered, but only after a fixed wait.',
    why: 'Insurers price for risk they can see. Declaring it means the wait is the only consequence; hiding it is what voids a claim years later.',
  },
  'room-rent-cap': {
    term: 'Room rent cap',
    plain:
      'A daily limit on the room you can take without the insurer scaling down the rest of the bill. This plan has none — take any private room.',
    why: 'When the room costs more than the cap, some insurers cut every other line of the bill in the same proportion. No cap means no nasty proportionate deduction.',
  },
  'co-pay': {
    term: 'Co-pay',
    plain: 'A fixed percentage of every claim you pay yourself. This plan has no co-pay — the insurer covers the full approved amount.',
    why: 'Co-pay lowers the premium but means you’re always paying a share, even for a large hospital bill.',
  },
  'sum-insured': {
    term: 'Sum insured',
    plain: 'The most the insurer will pay in a policy year. Here it’s ₹10,00,000, shared across you, your mum and your dad.',
    why: 'It resets to the full amount every renewal. The restore benefit can also refill it once within a year.',
  },
  network: {
    term: 'Network hospital',
    plain: 'A hospital that has an arrangement with the insurer, so it can bill them directly instead of you paying and claiming back.',
    why: 'Cashless only works at network hospitals. Off-network, you pay first and file for reimbursement.',
  },
  restore: {
    term: 'Restore benefit',
    plain: 'If one claim uses up your whole sum insured, the insurer refills it once in the same year for an unrelated illness.',
    why: 'A single big hospitalisation would otherwise leave the family with nothing for the rest of the year.',
  },
  cashless: {
    term: 'Cashless claim',
    plain: 'You show the e-card at a network hospital and the insurer settles the bill directly. You pay only what’s excluded.',
    why: 'No large upfront payment, no waiting weeks to be paid back.',
  },
  reimbursement: {
    term: 'Reimbursement claim',
    plain: 'You pay the hospital, keep every document, and the insurer pays you back after reviewing the file — usually 15–21 days.',
    why: 'It works anywhere, including hospitals outside the network, but it’s slower and needs you to fund the bill first.',
  },
  'free-look': {
    term: 'Free-look period',
    plain: 'The first 30 days after buying, when you can cancel for a full refund, no reason needed.',
    why: 'A legal cooling-off window so a policy bought in a hurry can be undone.',
  },
}

/** Onboarding step list shown on the welcome screen. */
export const ONBOARDING_STEPS = [
  'What you actually bought',
  'Your e-card, saved to your phone',
  'Cashless hospitals near you',
  'How a claim works, before you need it',
  'How to reach me afterwards',
]

/** Medical declaration questions. `flagKey` marks the one that triggers a live effect. */
export interface MedicalQuestion {
  id: string
  q: string
  flagKey?: string
}

export const MEDICAL_QUESTIONS: MedicalQuestion[] = [
  {
    id: 'chronic',
    q: 'Has any of the three of you been told by a doctor that they have diabetes, blood pressure, thyroid or a heart condition?',
    flagKey: 'dad-bp',
  },
  { id: 'admission', q: 'Any hospital admission or surgery in the last 5 years?' },
  { id: 'medication', q: 'Any regular medication anyone takes daily?' },
  { id: 'lifestyle', q: 'Does anyone smoke or drink regularly?' },
  { id: 'tests', q: 'Any test result a doctor asked to be repeated or followed up?' },
]

export const DECLARED_EFFECT =
  'Declared: dad’s hypertension. 2-year wait on BP claims, ₹110/month extra. Nothing else changes.'

/** Payment line items for the recommended plan. */
export const PAYMENT_LINES = [
  { k: 'Family Floater 10L · annual', v: '₹22,060' },
  { k: 'Declared-condition loading', v: '₹1,320' },
  { k: 'GST included', v: 'Yes' },
]
export const PAYMENT_TOTAL = 23380
export const PAYMENT_BASE = 22060
export const PAYMENT_LOADING = 1320

export const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', sub: 'rao.aditya@okbank', badge: 'UPI' },
  { id: 'card', label: 'Card', sub: 'Debit, credit or EMI', badge: 'CARD' },
  { id: 'netbanking', label: 'Netbanking', sub: 'All major banks', badge: 'NET' },
]

/** Network hospitals near the demo user, Mumbai. */
export interface Hospital {
  name: string
  area: string
  distanceKm: number
}

export const HOSPITALS: Hospital[] = [
  { name: 'Lilavati Hospital', area: 'Bandra West', distanceKm: 2.1 },
  { name: 'P. D. Hinduja Hospital', area: 'Mahim', distanceKm: 4.6 },
  { name: 'Nanavati Max', area: 'Vile Parle West', distanceKm: 5.2 },
  { name: 'Holy Family Hospital', area: 'Bandra West', distanceKm: 3.4 },
]

/** Rotating "worth knowing" cards on the dashboard. */
export const ENGAGEMENT_CARDS = [
  {
    tag: 'COVERED, BUT UNUSED',
    title: 'Your plan pays for 60 days of post-discharge care',
    body: 'Follow-up tests and medicines after a stay are claimable. Keep the bills.',
    cta: 'How to claim these',
  },
  {
    tag: 'SEASONAL',
    title: 'Dengue season in Mumbai starts next month',
    body: 'Dengue admissions are fully covered. Worth knowing your two nearest cashless hospitals now.',
    cta: 'See hospitals near you',
  },
  {
    tag: 'YOUR POLICY',
    title: 'Free annual health check-up, unclaimed',
    body: 'One per adult per year, free, and it doesn’t touch your cover.',
    cta: 'Book a slot',
  },
  {
    tag: 'WORTH A THOUGHT',
    title: 'Adding a spouse later is simple',
    body: 'Mid-term addition allowed after marriage. No fresh wait on accidents.',
    cta: 'Ask Meera about this',
  },
]

/** Renewal comparison rows (45 days out). */
export const RENEWAL_ROWS = [
  { k: 'Premium', v: '₹24,940', note: '₹1,560 more — age-band revision, not a claim penalty' },
  { k: 'Sum insured', v: '₹10,00,000', note: 'Unchanged. Resets in full on 9 September' },
  { k: 'Waiting periods served', v: '1 of 2 years', note: 'Dad’s BP cover starts Oct 2028 if you stay continuous' },
  { k: 'Terms changed', v: 'One', note: 'Day-care list grew from 141 to 178. Nothing removed' },
]
export const RENEWAL_PREMIUM = 24940
export const RENEWAL_DELTA = 1560

/** The "what happens now" timeline shown right after a claim is submitted. */
export const CLAIM_TIMELINE = [
  { when: 'Now', what: 'Sent to the insurer', note: 'Claim number by SMS within the hour' },
  { when: 'By 6pm', what: 'Cashless pre-approval decision', note: 'Usually same-day for an emergency' },
  { when: '2–3 days', what: 'Insurer reviews the file', note: 'They may ask one question. That’s routine' },
  { when: 'On discharge', what: 'Hospital settles directly', note: 'You pay only what’s excluded' },
]
