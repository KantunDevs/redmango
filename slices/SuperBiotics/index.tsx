import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `SuperBiotics`.
 */
export type SuperBioticsProps = SliceComponentProps<Content.SuperBioticsSlice>;

/**
 * Component for "SuperBiotics" Slices.
 */
const SuperBiotics = ({ slice }: SuperBioticsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for super_biotics (variation: {slice.variation}) Slices
    </section>
  );
};

export default SuperBiotics;
