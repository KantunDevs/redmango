import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ChooseDesigns`.
 */
export type ChooseDesignsProps = SliceComponentProps<Content.ChooseDesignsSlice>;

/**
 * Component for "ChooseDesigns" Slices.
 */
const ChooseDesigns = ({ slice }: ChooseDesignsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for choose_designs (variation: {slice.variation}) Slices
    </section>
  );
};

export default ChooseDesigns;
