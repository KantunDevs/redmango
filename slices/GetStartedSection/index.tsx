import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `GetStartedSection`.
 */
export type GetStartedSectionProps = SliceComponentProps<Content.GetStartedSectionSlice>;

/**
 * Component for "GetStartedSection" Slices.
 */
const GetStartedSection = ({ slice }: GetStartedSectionProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for get_started_section (variation: {slice.variation}) Slices
    </section>
  );
};

export default GetStartedSection;
