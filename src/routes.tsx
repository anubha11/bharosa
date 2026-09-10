import type { ComponentType } from 'react'

import Discovery from './screens/awareness/Discovery'
import Landing from './screens/landing/Landing'
import Readiness from './screens/landing/Readiness'

import AdvisorIntro from './screens/advisory/AdvisorIntro'
import Intake from './screens/advisory/Intake'
import EducationCard from './screens/advisory/EducationCard'
import Recap from './screens/advisory/Recap'
import QuoteReveal from './screens/advisory/QuoteReveal'
import HumanEscalation from './screens/advisory/HumanEscalation'

import Recommendations from './screens/comparison/Recommendations'
import PlanDetail from './screens/comparison/PlanDetail'
import SideBySide from './screens/comparison/SideBySide'
import StillUnsure from './screens/comparison/StillUnsure'

import SelectionConfirm from './screens/purchase/SelectionConfirm'
import PersonalDetails from './screens/purchase/PersonalDetails'
import MedicalDeclaration from './screens/purchase/MedicalDeclaration'
import Nominee from './screens/purchase/Nominee'
import Payment from './screens/purchase/Payment'
import Covered from './screens/purchase/Covered'

import Welcome from './screens/onboarding/Welcome'
import PlanPlain from './screens/onboarding/PlanPlain'
import Ecard from './screens/onboarding/Ecard'
import HospitalLocator from './screens/onboarding/HospitalLocator'
import ClaimsExplainer from './screens/onboarding/ClaimsExplainer'
import MeetAdvisor from './screens/onboarding/MeetAdvisor'
import Reminders from './screens/onboarding/Reminders'

import Home from './screens/retention/Home'
import EngagementCards from './screens/retention/EngagementCards'
import Milestone from './screens/retention/Milestone'

import ClaimEntry from './screens/claims/ClaimEntry'
import ClaimType from './screens/claims/ClaimType'
import IncidentDetails from './screens/claims/IncidentDetails'
import DocumentChecklist from './screens/claims/DocumentChecklist'
import PreSubmission from './screens/claims/PreSubmission'
import Submitted from './screens/claims/Submitted'
import StatusTracker from './screens/claims/StatusTracker'
import QueryHandling from './screens/claims/QueryHandling'
import Resolution from './screens/claims/Resolution'
import PostClaimFollowup from './screens/claims/PostClaimFollowup'

import RenewalReminder from './screens/renewal/RenewalReminder'
import OneTapRenew from './screens/renewal/OneTapRenew'

export interface RouteDef {
  id: string
  stage: string
  name: string
  path: string
  component: ComponentType
}

export const ROUTES: RouteDef[] = [
  { id: '1.1', stage: '1 · Awareness', name: 'Discovery content', path: '/discover', component: Discovery },

  { id: '2.1', stage: '2 · Landing', name: 'Landing + cost calculator', path: '/', component: Landing },
  { id: '2.2', stage: '2 · Landing', name: 'Readiness check', path: '/readiness', component: Readiness },

  { id: '3.1', stage: '3 · Advisory', name: 'Advisor intro', path: '/advisory', component: AdvisorIntro },
  { id: '3.2', stage: '3 · Advisory', name: 'Conversational intake', path: '/advisory/intake', component: Intake },
  { id: '3.3', stage: '3 · Advisory', name: '“Here’s what I’m hearing”', path: '/advisory/recap', component: Recap },
  { id: '3.4', stage: '3 · Advisory', name: 'Inline education card', path: '/advisory/education', component: EducationCard },
  { id: '3.5', stage: '3 · Advisory', name: 'Quote reveal', path: '/advisory/quote', component: QuoteReveal },
  { id: '3.6', stage: '3 · Advisory', name: 'Human escalation', path: '/advisory/human', component: HumanEscalation },

  { id: '4.1', stage: '4 · Comparison', name: 'Recommendations', path: '/compare', component: Recommendations },
  { id: '4.2', stage: '4 · Comparison', name: 'Plan detail', path: '/compare/plan/:planId', component: PlanDetail },
  { id: '4.3', stage: '4 · Comparison', name: 'Side-by-side', path: '/compare/table', component: SideBySide },
  { id: '4.4', stage: '4 · Comparison', name: '“Still unsure?”', path: '/compare/unsure', component: StillUnsure },

  { id: '5.1', stage: '5 · Purchase', name: 'Selection confirmation', path: '/buy/confirm', component: SelectionConfirm },
  { id: '5.2', stage: '5 · Purchase', name: 'Personal details', path: '/buy/details', component: PersonalDetails },
  { id: '5.3', stage: '5 · Purchase', name: 'Medical declaration', path: '/buy/medical', component: MedicalDeclaration },
  { id: '5.4', stage: '5 · Purchase', name: 'Nominee', path: '/buy/nominee', component: Nominee },
  { id: '5.5', stage: '5 · Purchase', name: 'Payment', path: '/buy/payment', component: Payment },
  { id: '5.6', stage: '5 · Purchase', name: '“You’re covered”', path: '/buy/covered', component: Covered },

  { id: '6.1', stage: '6 · Onboarding', name: 'In-app welcome', path: '/onboarding', component: Welcome },
  { id: '6.2', stage: '6 · Onboarding', name: 'Your plan, in plain words', path: '/onboarding/plan', component: PlanPlain },
  { id: '6.3', stage: '6 · Onboarding', name: 'Digital e-card', path: '/onboarding/ecard', component: Ecard },
  { id: '6.4', stage: '6 · Onboarding', name: 'Hospital locator', path: '/onboarding/hospitals', component: HospitalLocator },
  { id: '6.5', stage: '6 · Onboarding', name: 'Claims explainer', path: '/onboarding/claims', component: ClaimsExplainer },
  { id: '6.6', stage: '6 · Onboarding', name: 'Meet your advisor', path: '/onboarding/advisor', component: MeetAdvisor },
  { id: '6.7', stage: '6 · Onboarding', name: 'Enable reminders', path: '/onboarding/reminders', component: Reminders },

  { id: '7.1', stage: '7 · Retention', name: 'Home dashboard', path: '/home', component: Home },
  { id: '7.2', stage: '7 · Retention', name: 'Engagement cards', path: '/home/cards', component: EngagementCards },
  { id: '7.3', stage: '7 · Retention', name: 'Milestone check-in', path: '/home/milestone', component: Milestone },

  { id: '8.1', stage: '8 · Claims', name: 'Claim entry', path: '/claims/new', component: ClaimEntry },
  { id: '8.2', stage: '8 · Claims', name: 'Claim type', path: '/claims/type', component: ClaimType },
  { id: '8.3', stage: '8 · Claims', name: 'Incident details', path: '/claims/incident', component: IncidentDetails },
  { id: '8.4', stage: '8 · Claims', name: 'Document checklist', path: '/claims/documents', component: DocumentChecklist },
  { id: '8.5', stage: '8 · Claims', name: 'Pre-submission check', path: '/claims/review', component: PreSubmission },
  { id: '8.6', stage: '8 · Claims', name: 'Submitted', path: '/claims/submitted', component: Submitted },
  { id: '8.7', stage: '8 · Claims', name: 'Live status tracker', path: '/claims/tracker', component: StatusTracker },
  { id: '8.8', stage: '8 · Claims', name: 'Query handling', path: '/claims/query', component: QueryHandling },
  { id: '8.9', stage: '8 · Claims', name: 'Resolution', path: '/claims/resolution', component: Resolution },
  { id: '8.10', stage: '8 · Claims', name: 'Post-claim follow-up', path: '/claims/followup', component: PostClaimFollowup },

  { id: '9.1', stage: '9 · Renewal', name: 'Renewal reminder', path: '/renewal', component: RenewalReminder },
  { id: '9.2', stage: '9 · Renewal', name: 'One-tap renew', path: '/renewal/renew', component: OneTapRenew },
]
