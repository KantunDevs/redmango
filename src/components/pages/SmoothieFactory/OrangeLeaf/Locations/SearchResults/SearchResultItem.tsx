'use client';

import {
  StoreSvg,
  StreetWrapper,
  Wrapper,
  Street,
  ArrowSvg,
  Address,
  InfoWrapper,
  WorkingHours,
  WorkingHoursWrapper,
  ClockIcon,
  LinkToLocation,
} from './SearchResultItem.styles';

import type { FC } from 'react';
import type { Location } from './SearchResults';
import { convertTo12HourFormat } from '../LocationInfo/LocationInfo';
import { useRouter } from 'next/navigation';
import { useStore } from '@context/StoreProvider';

const SearchResultItem: FC<{ location: Location }> = ({ location }) => {
  const router = useRouter();

  const {
    city,
    province,
    openNow,
    zip,
    streetAndNumber,
    id,
    lat,
    lng,
    nextOpen: { hour },
  } = location;
  const { setSearchResultCoordinates, setLocations } = useStore();

  const openHoursString = openNow && hour ? `Open Until ${convertTo12HourFormat(hour)}` : 'Closed Now';

  const onClick = (): void => {
    setSearchResultCoordinates({ lat, lng });
    setLocations([location]);
    router.push(`/locations/${id}`);
  };

  return (
    <Wrapper>
      <StoreSvg fill="none" viewBox="0 0 60 60">
        <circle cx="30" cy="30" fill="#98C44A" opacity=".3" r="30" />
        <path
          d="M15.5713 32v13.6679c0 .2623.2127.475.475.475h26.9071c.2624 0 .475-.2127.475-.475V32m-30.2145-4.9286 3.9315-6.2077c.0871-.1375.2385-.2209.4013-.2209h23.9057c.1628 0 .3142.0834.4013.2209l3.9316 6.2077"
          stroke="#23AA5D"
          stroke-linecap="round"
        />
        <path
          d="M13.5 27.3572h5.4286v1.8571c0 1.4991-1.2153 2.7143-2.7143 2.7143-1.4991 0-2.7143-1.2152-2.7143-2.7143v-1.8571Zm5.5713 0h5v2.0714c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5v-2.0714Zm10.7139 0h5v2.0714c0 1.3807-1.1193 2.5-2.5 2.5-1.3808 0-2.5-1.1193-2.5-2.5v-2.0714Zm-5.5704 0h5v2.0714c0 1.3807-1.1192 2.5-2.5 2.5-1.3807 0-2.5-1.1193-2.5-2.5v-2.0714Zm10.7139 0h5v2.0714c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5v-2.0714Zm5.1426 0h5.4286v1.8571c0 1.4991-1.2153 2.7143-2.7143 2.7143-1.4991 0-2.7143-1.2152-2.7143-2.7143v-1.8571Zm-20.1426 9.3571c0-1.1441.9274-2.0715 2.0714-2.0715 1.1441 0 2.0715.9274 2.0715 2.0715v5.5h-4.1429v-5.5Z"
          fill="#98C44A"
          stroke="#23AA5D"
          stroke-linecap="round"
        />
        <path
          d="M41.7146 46.1429v-6c0-3.5504-2.8782-6.4285-6.4286-6.4285v0c-3.5504 0-6.4286 2.8781-6.4286 6.4285v6m6.4287-12.4285v12.4285M37 39.9287v1.9279m-3.4287-1.9279v1.9279"
          stroke="#23AA5D"
          stroke-linecap="round"
        />
        <path
          d="M17.2852 20.2143v-2.3571h5.5714m18.8571 2.3571v-2.3571h-6m.0009-.0001v0c0-2.1302-1.7269-3.8571-3.8572-3.8571h-5.1428c-2.1303 0-3.8572 1.7269-3.8572 3.8571v0"
          stroke="#23AA5D"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </StoreSvg>
      <InfoWrapper>
        <LinkToLocation onClick={onClick}>
          <StreetWrapper>
            <Street>{streetAndNumber}</Street>
            <ArrowSvg fill="none" viewBox="0 0 16 15">
              <path
                d="M15.5234 8.05859c.4571-.42187.4571-1.16015 0-1.58203L9.89844.851562c-.42188-.457031-1.16016-.457031-1.58203 0-.45703.421878-.45703 1.160158 0 1.582028L12.0078 6.125H1.25c-.632812 0-1.125.52734-1.125 1.125 0 .63281.492188 1.125 1.125 1.125h10.7578l-3.69139 3.7266c-.45703.4218-.45703 1.1601 0 1.582.42187.457 1.16015.457 1.58203 0l5.62496-5.62501Z"
                fill="#FF9828"
              />
            </ArrowSvg>
          </StreetWrapper>
        </LinkToLocation>
        <Address>
          {city}, {province}, {zip}
        </Address>
        <WorkingHoursWrapper>
          <ClockIcon fill="none" viewBox="0 0 18 20">
            <path
              d="M16.3125 10.25c0 2.6367-1.4063 5.0273-3.6563 6.3633-2.2851 1.3008-5.06245 1.3008-7.31245 0-2.28516-1.336-3.65625-3.7266-3.65625-6.3633 0-2.60156 1.37109-4.99219 3.65625-6.32812 2.25-1.30079 5.02735-1.30079 7.31245 0 2.25 1.33593 3.6563 3.72656 3.6563 6.32812ZM0 10.25c0 3.2344 1.6875 6.1875 4.5 7.8047 2.77734 1.6172 6.1875 1.6172 9 0 2.7773-1.6172 4.5-4.5703 4.5-7.8047 0-3.19922-1.7227-6.15234-4.5-7.76953-2.8125-1.617189-6.22266-1.617189-9 0C1.6875 4.09766 0 7.05078 0 10.25Zm8.15625-4.78125V10.25c0 .2812.14063.5625.35156.7031l3.37499 2.25c.3867.2813.9141.1758 1.1953-.2109.2461-.3867.1407-.9141-.2461-1.1953L9.84375 9.82812V5.46875c0-.45703-.38672-.84375-.84375-.84375-.49219 0-.84375.38672-.84375.84375Z"
              fill="#474747"
            />
          </ClockIcon>
          <WorkingHours>{openHoursString}</WorkingHours>
        </WorkingHoursWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default SearchResultItem;
