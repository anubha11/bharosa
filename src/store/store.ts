/**
 * Client-side app state for Bharosa.
 *
 * One Zustand store, persisted to localStorage, holding:
 *  - the user profile (what the advisory flow gathered + purchase details)
 *  - the policy, once "bought"
 *  - a claim state machine with a timestamped history per transition
 *
 * It ships pre-seeded with Aditya Rao's data so every screen looks complete
 * on first load, but each screen writes real answers back, so navigating
 * around stays consistent with what the user actually entered.
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AgeBand, City } from '../lib/calculator'
import { BRAND } from '../data/content'

export type DependentChoice =
  | 'Just me'
  | 'Me and my parents'
  | 'Me and my spouse'
  | 'Me, spouse and kids'

export type ExistingCover = 'Yes' | 'No' | 'Not sure'

export type ClaimStatus =
  | 'none'
  | 'draft'
  | 'submitted'
  | 'pre-approved'
  | 'query-raised'
  | 'under-review'
  | 'settled'

export interface Policy {
  number: string
  insurer: string
  planId: string
  planName: string
  sumInsured: number
  members: string[]
  startDate: string
  startTime: string
  renewalDate: string
  annualPremium: number
  freeLookDays: number
}

export interface Profile {
  // gathered in the advisory flow
  city: City
  ageBand: AgeBand
  dependents: DependentChoice
  existingCover: ExistingCover
  parentsUnder60: boolean
  declaredConditions: string[]
  monthlyBudget: string
  priority: string
  // captured at purchase
  fullName: string
  dob: string
  mobile: string
  email: string
  address: string
  nomineeName: string
  nomineeRelationship: string
  // choice
  selectedPlanId: string | null
  medicalAnswers: Record<string, 'yes' | 'no' | null>
}

export interface ClaimDoc {
  id: string
  name: string
  why: string
  state: 'uploaded' | 'needed'
}

export interface ClaimTransition {
  status: ClaimStatus
  at: string
  note: string
}

export interface Settlement {
  bill: number
  paid: number
  notCovered: number
  notCoveredBreakdown: string
  remainingCover: number
  settledOn: string
}

export interface Claim {
  id: string
  type: 'cashless' | 'reimbursement' | 'unsure'
  patient: string
  patientLabel: string
  description: string
  hospital: string
  hospitalArea: string
  admissionDate: string
  claimedAmount: number
  status: ClaimStatus
  history: ClaimTransition[]
  documents: ClaimDoc[]
  reviewedByHuman: boolean
  settlement: Settlement
}

interface AppState {
  seeded: boolean
  remindersOn: boolean
  profile: Profile
  policy: Policy | null
  claim: Claim

  setProfile: (patch: Partial<Profile>) => void
  toggleCondition: (condition: string) => void
  setMedicalAnswer: (id: string, value: 'yes' | 'no') => void
  selectPlan: (planId: string) => void
  purchase: () => void
  setReminders: (on: boolean) => void

  startClaim: (patch?: Partial<Claim>) => void
  updateClaim: (patch: Partial<Claim>) => void
  uploadDoc: (id: string) => void
  advanceClaim: (status: ClaimStatus, note: string) => void
  /** Simulate the insurer's first-pass processing: records the seeded
   *  submitted → pre-approved → query-raised trail in one step. */
  submitClaim: () => void
  /** Answer the query and move the claim into final review. */
  resolveQuery: () => void
  markClaimReviewed: () => void

  resetDemo: () => void
}

// --- Seed: Aditya Rao -------------------------------------------------------

const seededProfile: Profile = {
  city: 'Mumbai',
  ageBand: '26–32',
  dependents: 'Me and my parents',
  existingCover: 'Not sure',
  parentsUnder60: true,
  declaredConditions: ['Dad’s blood pressure, on medication'],
  monthlyBudget: 'Around ₹2,000',
  priority: 'Not paying out of pocket at admission',
  fullName: 'Aditya Rao',
  dob: '14 / 03 / 1999',
  mobile: '+91 98204 41127',
  email: 'aditya.rao@gmail.com',
  address: '402, Sea Breeze, Khar West, Mumbai 400052',
  nomineeName: 'Sunita Rao',
  nomineeRelationship: 'Mother',
  selectedPlanId: 'family-floater-10l',
  medicalAnswers: {
    chronic: 'yes',
    admission: 'no',
    medication: 'yes',
    lifestyle: 'no',
    tests: 'no',
  },
}

const seededPolicy: Policy = {
  number: 'NS-4471-22890',
  insurer: BRAND.insurer,
  planId: 'family-floater-10l',
  planName: 'Family Floater 10L',
  sumInsured: 1000000,
  members: ['Aditya Rao', 'Sunita Rao', 'Mahesh Rao'],
  startDate: '08 Sep 2026',
  startTime: '9:41 am',
  renewalDate: '08 Sep 2027',
  annualPremium: 23280,
  freeLookDays: 30,
}

const seededClaim: Claim = {
  id: 'NS-CL-88213',
  type: 'cashless',
  patient: 'Mahesh Rao',
  patientLabel: 'Mahesh (dad)',
  description:
    'Dad had severe stomach pain, admitted last night. Doctor says appendix, surgery this morning.',
  hospital: 'Lilavati Hospital',
  hospitalArea: 'Bandra West',
  admissionDate: '8 September 2026',
  claimedAmount: 184500,
  status: 'query-raised',
  reviewedByHuman: true,
  history: [
    { status: 'submitted', at: '8 Sep, 10:12 am', note: 'with documents' },
    { status: 'pre-approved', at: '8 Sep, 4:40 pm', note: '₹1,60,000 approved for cashless' },
    { status: 'query-raised', at: '9 Sep, 11:05 am', note: 'one document needed' },
  ],
  documents: [
    {
      id: 'admission-letter',
      name: 'Hospital admission letter',
      why: 'Proves the date and reason for admission. The insurer checks this first.',
      state: 'uploaded',
    },
    {
      id: 'id-proof',
      name: 'Dad’s ID proof',
      why: 'Confirms the patient is the person named on your policy.',
      state: 'uploaded',
    },
    {
      id: 'prescription',
      name: 'Doctor’s prescription',
      why: 'Shows the treatment was medically advised, not elective.',
      state: 'needed',
    },
    {
      id: 'estimate',
      name: 'Hospital’s estimate of cost',
      why: 'Lets the insurer pre-approve an amount, so cashless clears faster.',
      state: 'needed',
    },
  ],
  settlement: {
    bill: 184500,
    paid: 175300,
    notCovered: 9200,
    notCoveredBreakdown:
      '₹6,400 was attendant meals and a room upgrade; ₹2,800 was take-home medicine past the covered window. Normal exclusions, not a dispute.',
    remainingCover: 824700,
    settledOn: '18 Sep 2026',
  },
}

function freshClaim(): Claim {
  return {
    ...seededClaim,
    id: 'NS-CL-' + Math.floor(10000 + Math.random() * 89999),
    status: 'draft',
    reviewedByHuman: false,
    history: [],
    documents: seededClaim.documents.map((d) => ({ ...d })),
  }
}

// --- Store ----------------------------------------------------------------

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      seeded: true,
      remindersOn: true,
      profile: { ...seededProfile },
      policy: { ...seededPolicy },
      claim: { ...seededClaim },

      setProfile: (patch) => set((s) => ({ profile: { ...s.profile, ...patch } })),

      toggleCondition: (condition) =>
        set((s) => {
          const has = s.profile.declaredConditions.includes(condition)
          return {
            profile: {
              ...s.profile,
              declaredConditions: has
                ? s.profile.declaredConditions.filter((c) => c !== condition)
                : [...s.profile.declaredConditions, condition],
            },
          }
        }),

      setMedicalAnswer: (id, value) =>
        set((s) => ({
          profile: { ...s.profile, medicalAnswers: { ...s.profile.medicalAnswers, [id]: value } },
        })),

      selectPlan: (planId) => set((s) => ({ profile: { ...s.profile, selectedPlanId: planId } })),

      purchase: () =>
        set((s) => ({
          policy: {
            ...seededPolicy,
            planId: s.profile.selectedPlanId ?? seededPolicy.planId,
            members: [s.profile.fullName, 'Sunita Rao', 'Mahesh Rao'],
          },
        })),

      setReminders: (on) => set({ remindersOn: on }),

      startClaim: (patch) => set({ claim: { ...freshClaim(), ...patch } }),

      updateClaim: (patch) => set((s) => ({ claim: { ...s.claim, ...patch } })),

      uploadDoc: (id) =>
        set((s) => ({
          claim: {
            ...s.claim,
            documents: s.claim.documents.map((d) =>
              d.id === id ? { ...d, state: 'uploaded' as const } : d,
            ),
          },
        })),

      advanceClaim: (status, note) =>
        set((s) => {
          if (s.claim.history.some((h) => h.status === status)) return s
          return {
            claim: {
              ...s.claim,
              status,
              history: [...s.claim.history, { status, at: 'just now', note }],
            },
          }
        }),

      submitClaim: () =>
        set((s) => ({
          claim: {
            ...s.claim,
            status: 'query-raised',
            history: [
              { status: 'submitted', at: '8 Sep, 10:12 am', note: 'with documents' },
              { status: 'pre-approved', at: '8 Sep, 4:40 pm', note: '₹1,60,000 approved for cashless' },
              { status: 'query-raised', at: '9 Sep, 11:05 am', note: 'one document needed' },
            ],
          },
        })),

      resolveQuery: () =>
        set((s) => {
          if (s.claim.history.some((h) => h.status === 'under-review')) return s
          return {
            claim: {
              ...s.claim,
              status: 'under-review',
              history: [
                ...s.claim.history,
                { status: 'under-review', at: '11 Sep, 9:20 am', note: 'admission note received' },
              ],
            },
          }
        }),

      markClaimReviewed: () => set((s) => ({ claim: { ...s.claim, reviewedByHuman: true } })),

      resetDemo: () =>
        set({
          seeded: true,
          remindersOn: true,
          profile: { ...seededProfile },
          policy: { ...seededPolicy },
          claim: { ...seededClaim },
        }),
    }),
    { name: 'bharosa-v1' },
  ),
)
