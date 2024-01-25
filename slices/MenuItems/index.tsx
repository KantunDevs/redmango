import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `MenuItems`.
 */
export type MenuItemsProps = SliceComponentProps<Content.MenuItemsSlice>;

/**
 * Component for "MenuItems" Slices.
 */
const MenuItems = ({ slice }: MenuItemsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for menu_items (variation: {slice.variation}) Slices
    </section>
  );
};

export default MenuItems;
