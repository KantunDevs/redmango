import ChooseDesigns from '@components/pages/SmoothieFactory/GiftCards/ChooseDesigns/ChooseDesigns';
import Header from '@components/pages/SmoothieFactory/GiftCards/Header/Header';
import { Metadata } from 'next';
import { createClient } from 'prismicio';
import { ChooseDesignsSlice, GiftCardsHeaderSlice } from 'prismicio-types';

import type { FC } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('giftcards');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

/* @ts-expect-error Server Component */
const GiftCards: FC = async () => {
  const client = createClient();

  const page = await client.getSingle('giftcards');

  const giftCardsHeader = page.data.slices.find((slice) => slice.slice_type === 'gift_cards_header') as
    | GiftCardsHeaderSlice
    | undefined;

  const chooseDesigns = page.data.slices.find((slice) => slice.slice_type === 'choose_designs') as
    | ChooseDesignsSlice
    | undefined;

  return (
    <>
      {giftCardsHeader ? <Header slice={giftCardsHeader} /> : null}
      {chooseDesigns ? <ChooseDesigns slice={chooseDesigns} /> : null}
    </>
  );
};

export default GiftCards;
