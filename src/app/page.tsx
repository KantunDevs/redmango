import OurStars from '@components/pages/SmoothieFactory/Home/OurStars/OurStars';
import Gallery from '@components/pages/SmoothieFactory/Home/Gallery/Gallery';
import Header from '@components/pages/SmoothieFactory/Home/Header/Header';

import WhatIsNew from '@components/pages/SmoothieFactory/Home/WhatIsNew/WhatIsNew';
import Probiotics from '@components/pages/SmoothieFactory/Home/Probiotics/Probiotics';
import JoinOurClub from '@components/pages/SmoothieFactory/Home/JoinOurClub/JoinOurClub';

import type { FC } from 'react';
import { createClient } from 'prismicio';
import {
  HomepageHeaderSlice,
  HomepageOurStarsSlice,
  HomepageProbioticsSlice,
  HomepageJoinOurClubSlice,
  HomepageLetsConnectSlice,
  WhatsNewSlice,
  GallerySlice,
} from 'prismicio-types';

export const metadata = {
  title:
    'Red Mango | Red Mango is committed to providing the healthiest and best tasting all-natural nonfat frozen yogurt and fresh fruit smoothies. No wonder Zagat ranked us #1, twice.',
};

/* @ts-expect-error Server Component */
const Home: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('homepage');

  const headerSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_header') as
    | HomepageHeaderSlice
    | undefined;

  const ourStarsSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_our_stars') as
    | HomepageOurStarsSlice
    | undefined;

  const probioticsSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_probiotics') as
    | HomepageProbioticsSlice
    | undefined;

  const joinOurClubSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_join_our_club') as
    | HomepageJoinOurClubSlice
    | undefined;

  const letsConnectSlice = page.data.slices.find((slice) => slice.slice_type === 'homepage_lets_connect') as
    | HomepageLetsConnectSlice
    | undefined;

  const whatsNewSlice = page.data.slices.find((slice) => slice.slice_type === 'whats_new') as WhatsNewSlice | undefined;

  const gallerySlice = page.data.slices.find((slice) => slice.slice_type === 'gallery') as GallerySlice | undefined;

  return (
    <>
      {headerSlice ? <Header slice={headerSlice} /> : null}
      {whatsNewSlice ? <WhatIsNew slice={whatsNewSlice} /> : null}
      {gallerySlice ? <Gallery mb="clamp(48px, 10.18vw, 154px)" slice={gallerySlice} /> : null}
      {ourStarsSlice ? <OurStars slice={ourStarsSlice} /> : null}
      {probioticsSlice ? <Probiotics slice={probioticsSlice} /> : null}
      {joinOurClubSlice && letsConnectSlice ? (
        <JoinOurClub slice={joinOurClubSlice} letsConnectSlice={letsConnectSlice} />
      ) : null}
    </>
  );
};

export default Home;
