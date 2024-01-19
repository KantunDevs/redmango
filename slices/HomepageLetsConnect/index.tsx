import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `HomepageLetsConnect`.
 */
export type HomepageLetsConnectProps = SliceComponentProps<Content.HomepageLetsConnectSlice>;

/**
 * Component for "HomepageLetsConnect" Slices.
 */
const HomepageLetsConnect = ({ slice }: HomepageLetsConnectProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for homepage_lets_connect (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomepageLetsConnect;
