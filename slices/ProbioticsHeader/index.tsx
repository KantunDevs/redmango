import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ProbioticsHeader`.
 */
export type ProbioticsHeaderProps = SliceComponentProps<Content.ProbioticsHeaderSlice>;

/**
 * Component for "ProbioticsHeader" Slices.
 */
const ProbioticsHeader = ({ slice }: ProbioticsHeaderProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for probiotics_header (variation: {slice.variation}) Slices
    </section>
  );
};

export default ProbioticsHeader;
