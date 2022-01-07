import {
  MediaFileFragment,
  ProductProviderFragment,
  useShopQuery,
  flattenConnection,
  RawHtml,
} from '@shopify/hydrogen';
import {useParams} from 'react-router-dom';
import gql from 'graphql-tag';

import LoadMoreProducts from '../../components/LoadMoreProducts.client';
import ProductCard from '../../components/ProductCard.server';
import NotFound from '../../components/NotFound.server';
import Layout from '../../../components/layouts/Layout.server';

export default function Collection({
  country = {isoCode: 'US'},
  collectionProductCount = 24,
}) {
  const {handle} = useParams();
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      handle,
      country: country.isoCode,
      numProducts: collectionProductCount,
    },
  });

  if (data?.collection == null) {
    return <NotFound />;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;

  return (
    <Layout>
      <section className="collections-page">
        <section className="collections-page__title">
          <div className="container">
            <h1>All Shoes</h1>
          </div>
        </section>

        <section className="collections-filter">
          <div className="collections-filter__title">Filter By:</div>
          <div className="collections-filter__item">Collections</div>
          <div className="collections-filter__item">Categories</div>
          <div className="collections-filter__item">Colors</div>
          <div className="collections-filter__item">Sizes</div>
        </section>
        <section className="collections-products">
          <div className="container">
            <div className="collections-products__item">
              <div className="collections-products__item-box">
                <div className="collections-products__item-heart">
                  <div className="collections-products__item-icon">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="collections-products__slider">
                  <div className="collections-products__slide collections-products__slide-img">
                    <img src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="collections-products__slide collections-products__slide-model">
                    <img src="https://images.pexels.com/photos/1191522/pexels-photo-1191522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                  <div className="collections-products__slide collections-products__slide-img">
                    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  </div>
                </div>

                <div className="collections-products__left">
                  <div className="collections-product__left-icon">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                </div>
                <div className="collections-products__right">
                  <div className="collections-product__right-icon">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div className="collections-products__item-title">
                Sneaker 23 Blue
              </div>
              <div className="collections-products__item-price">$198.99</div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );

  // return (
  //   <Layout>
  //     <div className="container">
  //     <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-6 mt-6">
  //       {collection.title}
  //     </h1>
  //     <RawHtml string={collection.descriptionHtml} className="text-2xl" />
  //     <p className="text-sm text-gray-500 mt-5 mb-5">
  //       {products.length} {products.length > 1 ? 'products' : 'product'}
  //     </p>

  //     <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
  //       {products.map((product) => (
  //         <li key={product.id}>
  //           <ProductCard product={product} />
  //         </li>
  //       ))}
  //     </ul>

  //     {hasNextPage && (
  //       <LoadMoreProducts startingCount={collectionProductCount} />
  //     )}
  //     </div>
  //   </Layout>
  // );
}

const QUERY = gql`
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $numProducts: Int!
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 6
    $numProductVariantMetafields: Int = 0
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collection(handle: $handle) {
      id
      title
      descriptionHtml

      products(first: $numProducts) {
        edges {
          node {
            vendor
            ...ProductProviderFragment
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }

  ${MediaFileFragment}
  ${ProductProviderFragment}
`;
