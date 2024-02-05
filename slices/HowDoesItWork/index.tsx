import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HowDoesItWork`.
 */
export type HowDoesItWorkProps = SliceComponentProps<Content.HowDoesItWorkSlice>;

/**
 * Component for "HowDoesItWork" Slices.
 */
const HowDoesItWork = ({ slice }: HowDoesItWorkProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for how_does_it_work (variation: {slice.variation}) Slices
    </section>
  );
};

export default HowDoesItWork;
