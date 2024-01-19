import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomepageJoinOurClub`.
 */
export type HomepageJoinOurClubProps = SliceComponentProps<Content.HomepageJoinOurClubSlice>;

/**
 * Component for "HomepageJoinOurClub" Slices.
 */
const HomepageJoinOurClub = ({ slice }: HomepageJoinOurClubProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for homepage_join_our_club (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomepageJoinOurClub;
