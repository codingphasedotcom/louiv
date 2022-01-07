import {useShopQuery, ProductProviderFragment} from '@shopify/hydrogen';
import {useParams} from 'react-router-dom';
import gql from 'graphql-tag';

import ProductDetails from '../../components/ProductDetails.client';
import NotFound from '../../components/NotFound.server';
import Layout from '../../../components/layouts/Layout.server';

export default function Product({country = {isoCode: 'US'}}) {
  const {handle} = useParams();

  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
      handle,
    },
  });

  if (!data.product) {
    return <NotFound />;
  }

  return (
    <Layout>
      <section className="product-page">
      <div className="product-info">
        <section className="product-info__gallery">
          <div className="product-info__gallery-item">
            <img className="product-info__gallery-img" src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-pochette-accessoires-bicolor-monogram-empreinte-leather-handbags--M45777_PM2_Front%20view.png?wid=824&hei=824"/>
          </div>
          <div className="product-info__gallery-item">
            <img className="product-info__gallery-img" src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-pochette-accessoires-bicolor-monogram-empreinte-leather-handbags--M45777_PM1_Worn%20view.png?wid=656&hei=656"/>
          </div>
          <div className="product-info__gallery-item">
            <img className="product-info__gallery-img" src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-pochette-accessoires-bicolor-monogram-empreinte-leather-handbags--M45777_PM1_Side%20view.png?wid=656&hei=656"/>
          </div>
          <div className="product-info__gallery-item">
            <img className="product-info__gallery-img" src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-pochette-accessoires-bicolor-monogram-empreinte-leather-handbags--M45777_PM1_Interior%20view.png?wid=656&hei=656"/>
          </div>
          <div className="product-info__gallery-item">
            <img className="product-info__gallery-img" src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multi-pochette-accessoires-bicolor-monogram-empreinte-leather-handbags--M45777_PM1_Detail%20view.png?wid=656&hei=656"/>
          </div>
        </section>
        <section className="product-info__details">
          <div className="product-info__sub-title">
            <div className="product-info__sub-sku">
              SK342JM
            </div>
            <div className="product-info__sub-sku">
              <i className="far fa-heart"></i>
            </div>
          </div>
          <div className="product-info__title">
            Multi Pochette Accessoires
          </div>
          <div className="product-info__materials">
            <div className="product-info__materials-title">Color</div>
            <div className="product-info__materials-detail">
              <div className="product-info__materials-circle"></div>
            </div>
          </div>
          <div className="product-info__price">
            $2,840.00
          </div>
          <div className="product-info__cart-btn">
            Add To Cart
          </div>
          <div className="product-info__description">
            <p>
              The Multi Pochette Accessoires cross-body bag takes on a striking aspect in embossed black Monogram Empreinte leather, overprinted with the Monogram motif in a cream color. Just the right size to carry a woman’s essentials, this two-in-one bag keeps things organized with its removable pouches. It’s comfortable to wear thanks to its suppleness and light weight.
            </p>
          </div>
          <section className="product-info__extra">
            <div className="product-info__extra-item">
              <div className="product-info__extra-icon">
                <i className="far fa-credit-card"></i>
              </div>
              <div className="product-info__extra-details">
                <h4>Payment</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="product-info__extra-item">
              <div className="product-info__extra-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <div className="product-info__extra-details">
                <h4>Shipping</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="product-info__extra-item">
              <div className="product-info__extra-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="product-info__extra-details">
                <h4>Returns</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </section>
        </section>
      </div>
      <section className="recommended-products">

      </section>
    </section>



      {/* <div className='container'>

      
        <ProductDetails product={data.product} />
      </div> */}
    </Layout>
  );
}

const QUERY = gql`
  query product(
    $country: CountryCode
    $handle: String!
    $numProductMetafields: Int = 20
    $numProductVariants: Int = 250
    $numProductMedia: Int = 6
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    product: product(handle: $handle) {
      id
      vendor
      seo {
        title
        description
      }
      images(first: 1) {
        edges {
          node {
            url
          }
        }
      }
      ...ProductProviderFragment
    }
  }

  ${ProductProviderFragment}
`;
