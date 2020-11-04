import { document } from 'globalthis/implementation';

/**
 * Primary UI component for user interaction
 */
export const Gallery = ({ columns, featured, folder }) => {
  const gallery = document.createElement('zea-images-gallery')
  gallery.columns = columns
  gallery.featured = featured
  gallery.folder = folder

  return gallery
};
