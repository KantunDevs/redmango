import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomeHeader`.
 */
export type HomeHeaderProps = SliceComponentProps<Content.HomeHeaderSlice>;

/**
 * Component for "HomeHeader" Slices.
 */
const HomeHeader = ({ slice }: HomeHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for home_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomeHeader;
