import LocationsLayout from '@layouts/LocationsLayout/LocationsLayout';
import { initialCoordinates } from '@constants/initialCoordinates';

import { getLocations } from '@utils/getLocations';

import type { FC, ReactNode } from 'react';

/* @ts-expect-error Server Component */
const LocationLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const {
    response: { locations },
  } = await getLocations(initialCoordinates.lat, initialCoordinates.lng);

  return <LocationsLayout initialLocations={locations}>{children}</LocationsLayout>;
};

export default LocationLayout;
