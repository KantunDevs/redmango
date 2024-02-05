import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `GetRewards`.
 */
export type GetRewardsProps = SliceComponentProps<Content.GetRewardsSlice>;

/**
 * Component for "GetRewards" Slices.
 */
const GetRewards = ({ slice }: GetRewardsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for get_rewards (variation: {slice.variation}) Slices
    </section>
  );
};

export default GetRewards;
