import Intake from './Intake'

/**
 * 3.4 — Inline education card. Same conversational intake screen, with the
 * "IN PLAIN WORDS" card for "waiting period" already open. Exists as its own
 * route so the explainer is shareable.
 */
export default function EducationCard() {
  return <Intake initialTerm="waiting-period" />
}
