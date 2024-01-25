import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `RedBanner`.
 */
export type RedBannerProps = SliceComponentProps<Content.RedBannerSlice>;

/**
 * Component for "RedBanner" Slices.
 */
const RedBanner = ({ slice }: RedBannerProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for red_banner (variation: {slice.variation}) Slices
    </section>
  );
};

export default RedBanner;
