import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `BacteriaInfo`.
 */
export type BacteriaInfoProps = SliceComponentProps<Content.BacteriaInfoSlice>;

/**
 * Component for "BacteriaInfo" Slices.
 */
const BacteriaInfo = ({ slice }: BacteriaInfoProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for bacteria_info (variation: {slice.variation}) Slices
    </section>
  );
};

export default BacteriaInfo;
