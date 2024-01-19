import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomepageProbiotics`.
 */
export type HomepageProbioticsProps = SliceComponentProps<Content.HomepageProbioticsSlice>;

/**
 * Component for "HomepageProbiotics" Slices.
 */
const HomepageProbiotics = ({ slice }: HomepageProbioticsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for homepage_probiotics (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomepageProbiotics;
