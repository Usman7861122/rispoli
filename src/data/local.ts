export const localCity = 'Los Angeles, CA'; // TODO: confirm with client
export const localAreas = ['Marina Del Rey', 'Venice', 'Playa Vista', 'Santa Monica', 'Culver City', 'Newport Beach']; // TODO: client review

export function localFor(topic: string) {
  return {
    city: localCity,
    title: `${topic} in ${localCity}`,
    sectionTitle: `${topic} treatment in ${localCity}`,
    areas: localAreas,
  };
}
