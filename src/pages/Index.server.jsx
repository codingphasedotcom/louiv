import {
  useShopQuery,
  flattenConnection,
  ProductProviderFragment,
  Image,
  Link,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/layouts/Layout.server';
import Hero2 from '../../components/Hero/Hero2/Hero2';
import Collection1 from '../../components/Collections/Collection1/Collection1';
import FeaturedCollection from '../components/FeaturedCollection.server';
import ProductCard from '../components/ProductCard.server';
import Welcome from '../components/Welcome.server';

export default function Index({country = {isoCode: 'US'}}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const Hero2Collections = collections.filter((item) => item.handle == 'men' || item.handle == 'women')
  
  const MostPopularProducts = data ? flattenConnection(data.products) : [];
  console.log(collections)
  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;
  const featuredCollection =
    collections && collections.length > 1 ? collections[1] : collections[0];

  return (
    <Layout>
      <section class="collection-player">
      <iframe class="collection-player__video" width="100%" height="100%" src="https://www.youtube.com/embed/vV_QoQD_nrA?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container">
        <span class="collection-player__title">Virgil Was Here</span>
        <a href="#" class="collection-player__button">Watch More</a>
      </div>
    </section>
    <section class="collection-player">
      <iframe class="collection-player__video" width="100%" height="100%" src="https://www.youtube.com/embed/I1AqjvdiubA?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container">
        <span class="collection-player__title">Virgil Was Here</span>
        <a href="#" class="collection-player__button">Watch More</a>
      </div>
    </section>
    <section class="collection-player">
      <iframe class="collection-player__video" width="100%" height="100%" src="https://www.youtube.com/embed/cPx5pk94v2E?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container">
        <span class="collection-player__title">Virgil Was Here</span>
        <a href="#" class="collection-player__button">Watch More</a>
      </div>
    </section>
    <section class="collection-player">
      <iframe class="collection-player__video" width="100%" height="100%" src="https://www.youtube.com/embed/O2XVFT7ep6M?autoplay=1&mute=1&start=34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="container">
        <span class="collection-player__title">Virgil Was Here</span>
        <a href="#" class="collection-player__button">Watch More</a>
      </div>
    </section>



      {/* <Hero2 collectionsData={Hero2Collections} /> */}
      {/* <div className="row">
        <div className="container">
          <h2 className="home-page__h2">Most Popular Products</h2>
        </div>
      </div> */}
      {/* <Collection1 popularProductsData={MostPopularProducts}/> */}

      {/* <div className="relative mb-12">
        <Welcome />
        <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
          {featuredProductsCollection ? (
            <>
              <div className="flex justify-between items-center mb-8 text-md font-medium">
                <span className="text-black uppercase">
                  {featuredProductsCollection.title}
                </span>
                <span className="hidden md:inline-flex">
                  <Link
                    to={`/collections/${featuredProductsCollection.handle}`}
                    className="text-blue-600 hover:underline"
                  >
                    Shop all
                  </Link>
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {featuredProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <div className="md:hidden text-center">
                <Link
                  to={`/collections/${featuredCollection.handle}`}
                  className="text-blue-600"
                >
                  Shop all
                </Link>
              </div>
            </>
          ) : null}
        </div>
        <FeaturedCollection collection={featuredCollection} />
      </div> */}
    </Layout>
  );
}

const QUERY = gql`
  query indexContent(
    $country: CountryCode
    $numCollections: Int = 25
    $numProducts: Int = 3
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collections(first: $numCollections) {
      edges {
        node {
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    }
    products(first: 9, sortKey: BEST_SELLING) {
      edges {
          cursor
          node {
              id
              title
              description
              handle
              featuredImage{
              	url
              }
              variants(first: 20) {
                  edges {
                      cursor
                      node {
                          id
                          title
                          price
                        	
                      }
                  }
              }
          }
      }
    }
  }

  ${ProductProviderFragment}
  ${Image.Fragment}
`;
