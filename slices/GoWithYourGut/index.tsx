import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `GoWithYourGut`.
 */
export type GoWithYourGutProps = SliceComponentProps<Content.GoWithYourGutSlice>;

/**
 * Component for "GoWithYourGut" Slices.
 */
const GoWithYourGut = ({ slice }: GoWithYourGutProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for go_with_your_gut (variation: {slice.variation}) Slices
    </section>
  );
};

export default GoWithYourGut;
