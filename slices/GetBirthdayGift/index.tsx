import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `GetBirthdayGift`.
 */
export type GetBirthdayGiftProps = SliceComponentProps<Content.GetBirthdayGiftSlice>;

/**
 * Component for "GetBirthdayGift" Slices.
 */
const GetBirthdayGift = ({ slice }: GetBirthdayGiftProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for get_birthday_gift (variation: {slice.variation}) Slices
    </section>
  );
};

export default GetBirthdayGift;
