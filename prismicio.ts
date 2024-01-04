import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from './slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const { repositoryName } = config;

/**
 * A list of Route Resolver objects that define how a document's `url` field
 * is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
  {
    path: '/red-mango',
    type: 'homepage',
  },
  {
    path: '/about-us',
    type: 'page',
  },
  {
    path: '/e-club-signup',
    type: 'page',
  },
  {
    path: '/franchising',
    type: 'page',
  },
  {
    path: '/gift-cards',
    type: 'page',
  },
  {
    path: '/menu',
    type: 'page',
  },
  {
    path: '/order',
    type: 'page',
  },
  {
    path: '/privacy',
    type: 'page',
  },
  {
    path: '/terms-of-use',
    type: 'page',
  },
];

/**
 * Creates a Pric client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    fetchOptions: {
      cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
      next: { tags: ['prismic'] },
    },
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
