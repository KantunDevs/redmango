import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomepageHeader`.
 */
export type HomepageHeaderProps = SliceComponentProps<Content.HomepageHeaderSlice>;

/**
 * Component for "HomepageHeader" Slices.
 */
const HomepageHeader = ({ slice }: HomepageHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for homepage_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomepageHeader;
