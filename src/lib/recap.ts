import type { Profile } from '../store/store'

export interface RecapItem {
  key: string
  label: string
  value: string
}

/**
 * The plain-language "here's what I'm hearing" summary. Pure function of the
 * profile so it can be called in render without breaking snapshot caching.
 */
export function buildRecap(profile: Profile): RecapItem[] {
  return [
    { key: 'city', label: 'Where you are', value: `${profile.city} — expensive city, so cover needs to be bigger` },
    { key: 'who', label: 'Who we’re covering', value: 'You (27), your mum (54), your dad (58)' },
    { key: 'existing', label: 'Existing cover', value: 'Office policy of ₹3L, which stops if you change jobs' },
    { key: 'health', label: 'Health to declare', value: 'Dad’s blood pressure, on medication' },
    { key: 'budget', label: 'Monthly comfort', value: profile.monthlyBudget },
    { key: 'priority', label: 'What matters most', value: profile.priority },
  ]
}
