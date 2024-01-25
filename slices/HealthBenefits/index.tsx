import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HealthBenefits`.
 */
export type HealthBenefitsProps = SliceComponentProps<Content.HealthBenefitsSlice>;

/**
 * Component for "HealthBenefits" Slices.
 */
const HealthBenefits = ({ slice }: HealthBenefitsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for health_benefits (variation: {slice.variation}) Slices
    </section>
  );
};

export default HealthBenefits;
