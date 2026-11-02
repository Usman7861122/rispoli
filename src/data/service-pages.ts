// Registry of every service page. To add a service: write its data file (same shape as esi.ts), import it here, add it to `all`.
// The page, the city versions, the category page, /services and the office pages all read from this list.
import type { ServiceData } from './service-types';
import { esi } from './esi';
import { facet } from './facet-joint-injections';
import { siJoint } from './si-joint-injections';
import { intracept } from './intracept-procedure';
import { spinalCordStimulation } from './spinal-cord-stimulation';
import { peripheralNerveStimulator } from './peripheral-nerve-stimulator';
import { pelvicFloorInjections } from './pelvic-floor-injections';
import { medicalAcupuncture } from './medical-acupuncture';
import { radiofrequencyAblation } from './radiofrequency-ablation';
import { genicularNerveBlock } from './genicular-nerve-block';
import { occipitalNerveBlock } from './occipital-nerve-block';
import { sympatheticBlocks } from './sympathetic-blocks';
import { nerveBlocks } from './nerve-blocks';
import { nerveHydrodissection } from './nerve-hydrodissection';
import { botoxForPain } from './botox-for-pain';
import { botoxMigraineSpasms } from './botox-migraine-spasms';
import { prp } from './prp';
import { bmac } from './bmac';
import { a2m } from './a2m';
import { hyaluronicAcid } from './hyaluronic-acid';
import { jointInjections } from './joint-injections';
import { bursaInjections } from './bursa-injections';
import { tendonInjections } from './tendon-injections';
import { triggerPointInjections } from './trigger-point-injections';

export const allServices: ServiceData[] = [
  esi, facet, siJoint, intracept,
  spinalCordStimulation, peripheralNerveStimulator,
  pelvicFloorInjections, medicalAcupuncture,
  radiofrequencyAblation, genicularNerveBlock, occipitalNerveBlock, sympatheticBlocks, nerveBlocks, nerveHydrodissection,
  botoxForPain, botoxMigraineSpasms,
  prp, bmac, a2m, hyaluronicAcid,
  jointInjections, bursaInjections, tendonInjections, triggerPointInjections,
];

export const serviceBySlug = (slug: string) => allServices.find((s) => s.slug === slug);
