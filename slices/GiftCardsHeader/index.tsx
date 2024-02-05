import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `GiftCardsHeader`.
 */
export type GiftCardsHeaderProps = SliceComponentProps<Content.GiftCardsHeaderSlice>;

/**
 * Component for "GiftCardsHeader" Slices.
 */
const GiftCardsHeader = ({ slice }: GiftCardsHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for gift_cards_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default GiftCardsHeader;
