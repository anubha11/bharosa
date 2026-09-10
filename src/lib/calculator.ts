/**
 * Landing-screen cost calculator.
 *
 * Base annual hospitalisation cost estimate by city (INR), multiplied by an
 * age-band factor, then rounded to the nearest ₹1,000. Shown as an estimate
 * for "three ordinary days in a private hospital, shared room".
 */

export const CITY_BASE = {
  Mumbai: 124000,
  Delhi: 112000,
  Bengaluru: 118000,
  Pune: 96000,
  Jaipur: 78000,
} as const

export type City = keyof typeof CITY_BASE

export const AGE_MULTIPLIER = {
  '18–25': 1.0,
  '26–32': 1.12,
  '33–40': 1.28,
} as const

export type AgeBand = keyof typeof AGE_MULTIPLIER

export const CITIES = Object.keys(CITY_BASE) as City[]
export const AGE_BANDS = Object.keys(AGE_MULTIPLIER) as AgeBand[]

export function estimateStayCost(city: City, ageBand: AgeBand): number {
  const raw = (CITY_BASE[city] * AGE_MULTIPLIER[ageBand]) / 1000
  return Math.round(raw) * 1000
}
