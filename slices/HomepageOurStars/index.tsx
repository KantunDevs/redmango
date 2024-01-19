import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomepageOurStars`.
 */
export type HomepageOurStarsProps = SliceComponentProps<Content.HomepageOurStarsSlice>;

/**
 * Component for "HomepageOurStars" Slices.
 */
const HomepageOurStars = ({ slice }: HomepageOurStarsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for homepage_our_stars (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomepageOurStars;
