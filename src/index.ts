import { gql } from 'apollo-boost';
import { ProductsQuery, ProductSortKeys } from './generated/graphql'

const productConnectionFields = gql`
  fragment ProductConnectionFields on ProductConnection {
    edges {
      node {
        title
        handle
        description
        createdAt
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
`;

export const productsQuery = gql`
  ${productConnectionFields}
  query ProductsQuery($query: String!, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: 5, query: $query, sortKey: $sortKey, reverse: $reverse) {
      ...ProductConnectionFields
    }
  }
`;

export function getProducts({query, reverse, sortKey}: ProductsQuery.Variables) {
  console.log()
}

getProducts({
  query: '',
  sortKey: ProductSortKeys.BestSelling,
  reverse: true
});