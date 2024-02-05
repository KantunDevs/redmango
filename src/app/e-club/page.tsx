import Form from '@components/pages/SmoothieFactory/EClub/Form/Form';
import GetBirthdayGift from '@components/pages/SmoothieFactory/EClub/GetBirthdayGift/GetBirthdayGift';
import GetRewards from '@components/pages/SmoothieFactory/EClub/GetRewards/GetRewards';
import HowDoesItWork from '@components/pages/SmoothieFactory/EClub/HowDoesItWork/HowDoesItWork';
import { createClient } from 'prismicio';
import { GetBirthdayGiftSlice, GetRewardsSlice, HowDoesItWorkSlice } from 'prismicio-types';

import type { FC } from 'react';

export const metadata = {
  title: 'Smoothie Factory® | A smoothie bar and nutrition supplement franchise company',
};

type MergeField = {
  tag: string;
  options: {
    choices: string[];
  };
};

type GetOptionsResponse = {
  merge_fields: MergeField[];
};

const getOptions = async (): Promise<GetOptionsResponse> => {
  const res = await fetch(`https://us21.api.mailchimp.com/3.0/lists/6ba144ea7f/merge-fields`, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      Authorization: `auth ${process.env.NEXT_PUBLIC_MAIL_CHIMP_KEY}`,
    },
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GetOptionsResponse>;
};

/* @ts-expect-error Server Component */
const EClub: FC = async () => {
  const data = await getOptions();
  const client = createClient();

  const page = await client.getSingle('eclub');

  const optionMatch = data.merge_fields.find((field) => field.tag === 'MMERGE3');

  const choices = optionMatch === undefined ? [] : optionMatch.options.choices;

  const getRewards = page.data.slices.find((slice) => slice.slice_type === 'get_rewards') as
    | GetRewardsSlice
    | undefined;

  const getBirthdayGift = page.data.slices.find((slice) => slice.slice_type === 'get_birthday_gift') as
    | GetBirthdayGiftSlice
    | undefined;

  const howDoesItWork = page.data.slices.find((slice) => slice.slice_type === 'how_does_it_work') as
    | HowDoesItWorkSlice
    | undefined;

  return (
    <>
      {getRewards ? <GetRewards slice={getRewards} /> : null}
      {getBirthdayGift ? <GetBirthdayGift slice={getBirthdayGift} /> : null}
      {howDoesItWork ? <HowDoesItWork slice={howDoesItWork} /> : null}
      <Form options={choices} />
    </>
  );
};

export default EClub;
