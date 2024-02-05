import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HowItStarted`.
 */
export type HowItStartedProps = SliceComponentProps<Content.HowItStartedSlice>;

/**
 * Component for "HowItStarted" Slices.
 */
const HowItStarted = ({ slice }: HowItStartedProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for how_it_started (variation: {slice.variation}) Slices
    </section>
  );
};

export default HowItStarted;
