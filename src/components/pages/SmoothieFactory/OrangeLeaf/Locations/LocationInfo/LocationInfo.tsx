/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

import {
  ClockIcon,
  WorkingHours,
} from '@components/pages/SmoothieFactory/OrangeLeaf/Locations/SearchResults/SearchResultItem.styles';

import {
  ImageWrapper,
  ImageSvg,
  ContentWrapper,
  LocationTitle,
  LocationAddress,
  WorkingHoursWrapper,
  Button,
  ButtonsWrapper,
  ButtonOutlined,
  InfoWrapper,
  InfoTitle,
  InfoContent,
  SocialIconSvg,
  BackImage,
  BackLink,
} from './LocationInfo.styles';

import { initialCoordinates } from '@constants/initialCoordinates';
import { useRouter } from 'next/navigation';
import { useStore } from '@context/StoreProvider';

import type { FC } from 'react';

import { getLocations } from '@utils/getLocations';

import type { SingleLocation } from 'src/app/locations/[id]/page';

export const convertTo12HourFormat = (time: string): string => {
  const [hour, minute] = time.split(':').map(Number);

  if (hour === 0) {
    return `12:${minute.toString().padStart(2, '0')} am`;
  }
  if (hour < 12) {
    return `${hour}:${minute.toString().padStart(2, '0')} am`;
  }
  if (hour === 12) {
    return `${hour}:${minute.toString().padStart(2, '0')} pm`;
  }
  const hour12 = hour % 12;
  return `${hour12}:${minute.toString().padStart(2, '0')} pm`;
};

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const LocationInfo: FC<{ location: SingleLocation }> = ({ location }) => {
  const router = useRouter();
  const { setLocations } = useStore();

  const {
    streetAndNumber,
    city,
    country,
    zip,
    openNow,
    nextOpen: { hour },
    openingHours,
    phone,
    socialProfiles,
    lat,
    lng,
  } = location;

  const openHoursString = openNow && hour ? `Open Until ${convertTo12HourFormat(hour)}` : 'Closed Now';

  const sameWorkingHoursForEachDay = openingHours.every(
    (item) => (item.from1 === openingHours[0].from1 && item.to1) === openingHours[0].to1,
  );

  const workingHoursContent = sameWorkingHoursForEachDay ? (
    <InfoContent>
      Mon - Sun {convertTo12HourFormat(openingHours[0].from1)} - {convertTo12HourFormat(openingHours[0].to1)}
    </InfoContent>
  ) : (
    openingHours.map((item) => (
      <InfoContent key={item.dayOfWeek}>
        {item.closed === true
          ? `${daysOfWeek[item.dayOfWeek - 1]} Closed`
          : `${daysOfWeek[item.dayOfWeek - 1]} ${convertTo12HourFormat(item.from1)} - ${convertTo12HourFormat(
              item.to1,
            )}`}
      </InfoContent>
    ))
  );

  const fbLink = socialProfiles.find((profile) => profile.type === 'FACEBOOK')?.url;

  const onBack = useCallback(async (): Promise<void> => {
    router.push('/locations');

    const {
      response: { locations },
    } = await getLocations(initialCoordinates.lat, initialCoordinates.lng);

    setLocations(locations);
  }, [setLocations, router]);

  return (
    <>
      <ImageWrapper>
        <BackLink onClick={onBack}>
          <BackImage>
            <svg fill="none" height="20" viewBox="0 0 22 20" width="22" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.968749 11.0781C0.359374 10.5156 0.359374 9.53125 0.968749 8.96875L8.46875 1.46875C9.03125 0.859374 10.0156 0.859374 10.5781 1.46875C11.1875 2.03125 11.1875 3.01562 10.5781 3.57812L5.65625 8.5L20 8.5C20.8437 8.5 21.5 9.20312 21.5 10C21.5 10.8437 20.8437 11.5 20 11.5L5.65625 11.5L10.5781 16.4687C11.1875 17.0312 11.1875 18.0156 10.5781 18.5781C10.0156 19.1875 9.03125 19.1875 8.46875 18.5781L0.968749 11.0781Z"
                fill="#ED6C32"
              />
            </svg>
          </BackImage>
        </BackLink>
        <ImageSvg fill="none" viewBox="0 0 77 79">
          <path
            d="M3.86059 70.7339c-1.53448-3.3236-2.30653-9.6196-1.08978-9.6584.93434-.0321 4.16116 4.8047 5.37104 6.8978 1.96885 3.4113-2.17443 7.3261-4.28126 2.7606ZM53.451.00528631C90.2955.390382 80.1803 64.3955 45.0646 77.16 17.8971 87.7805-3.50576 47.1282.479028 25.8912 4.23975 5.88335 33.232-.20616 53.451.00528631Z"
            fill="#98C44A"
          />
        </ImageSvg>
        <Image alt="cover img" src="/images/location.jpg" style={{ objectFit: 'cover' }} fill />
      </ImageWrapper>
      <ContentWrapper>
        <LocationTitle>{streetAndNumber}</LocationTitle>
        <LocationAddress>
          {city}, {country} {zip}
        </LocationAddress>
        <WorkingHoursWrapper>
          <ClockIcon fill="none" viewBox="0 0 18 20">
            <path
              d="M16.3125 10.25c0 2.6367-1.4063 5.0273-3.6563 6.3633-2.2851 1.3008-5.06245 1.3008-7.31245 0-2.28516-1.336-3.65625-3.7266-3.65625-6.3633 0-2.60156 1.37109-4.99219 3.65625-6.32812 2.25-1.30079 5.02735-1.30079 7.31245 0 2.25 1.33593 3.6563 3.72656 3.6563 6.32812ZM0 10.25c0 3.2344 1.6875 6.1875 4.5 7.8047 2.77734 1.6172 6.1875 1.6172 9 0 2.7773-1.6172 4.5-4.5703 4.5-7.8047 0-3.19922-1.7227-6.15234-4.5-7.76953-2.8125-1.617189-6.22266-1.617189-9 0C1.6875 4.09766 0 7.05078 0 10.25Zm8.15625-4.78125V10.25c0 .2812.14063.5625.35156.7031l3.37499 2.25c.3867.2813.9141.1758 1.1953-.2109.2461-.3867.1407-.9141-.2461-1.1953L9.84375 9.82812V5.46875c0-.45703-.38672-.84375-.84375-.84375-.49219 0-.84375.38672-.84375.84375Z"
              fill="#421B00"
            />
          </ClockIcon>
          <WorkingHours>{openHoursString}</WorkingHours>
        </WorkingHoursWrapper>
        <ButtonsWrapper>
          <a href={`https://www.google.com/maps/dir/Current+Location/${lat},${lng}`} target="_blank">
            <Button>Get directions</Button>
          </a>
          <Link href="/menu">
            <ButtonOutlined>See menu</ButtonOutlined>
          </Link>
        </ButtonsWrapper>
        <InfoWrapper>
          <InfoTitle>Open Hours</InfoTitle>
          {workingHoursContent}
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Contact</InfoTitle>
          <InfoContent>{phone}</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Connect with us</InfoTitle>
          <a href={fbLink} target="_blank">
            <SocialIconSvg fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" fill="#F69F24" r="16" />
              <path
                d="M19.7188 17L20.1562 14.125H17.375V12.25C17.375 11.4375 17.75 10.6875 19 10.6875H20.2812V8.21875C20.2812 8.21875 19.125 8 18.0312 8C15.75 8 14.25 9.40625 14.25 11.9062V14.125H11.6875V17H14.25V24H17.375V17H19.7188Z"
                fill="white"
              />
            </SocialIconSvg>
          </a>
        </InfoWrapper>
      </ContentWrapper>
    </>
  );
};

export default LocationInfo;
