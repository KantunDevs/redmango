import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `AboutUsForm`.
 */
export type AboutUsFormProps = SliceComponentProps<Content.AboutUsFormSlice>;

/**
 * Component for "AboutUsForm" Slices.
 */
const AboutUsForm = ({ slice }: AboutUsFormProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for about_us_form (variation: {slice.variation}) Slices
    </section>
  );
};

export default AboutUsForm;
