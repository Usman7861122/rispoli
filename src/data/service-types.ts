// Every service page is one object with the same shape as `esi`. Import this type in each service data file.
import type { esi } from './esi';
export type ServiceData = typeof esi;
