import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `AboutUsHeader`.
 */
export type AboutUsHeaderProps = SliceComponentProps<Content.AboutUsHeaderSlice>;

/**
 * Component for "AboutUsHeader" Slices.
 */
const AboutUsHeader = ({ slice }: AboutUsHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for about_us_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default AboutUsHeader;
