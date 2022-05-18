import { gql } from "@apollo/client";
//Query for loading Cart Items.
export const LOADING_CART_ITEMS = gql`
  query getCartList($userId: String!) {
    getCartList(userId: $userId) {
      userId
      qty
      itemId {
        _id
        itemCategory
        itemDescription
        itemCount
        itemImage
        itemName
        itemPrice
      }
    }
  }
`;
//Query for getting the Purchases List.
export const GET_PURCHASES_LIST = gql`
  query get($userId: String!) {
    getCartList(userId: $userId) {
      userId
      qty
      _id
      itemCategory
      itemCount
      itemImage
      itemName
      itemPrice
      itemDescription
  
    }
  }
`;
//Loading the Products.
export const LOADING_PRODUCTS = gql`
  query {
    getItemsList {
      _id
      userId
      itemCategory
      itemName
      itemCount
      itemPrice
      itemDescription
      itemImage
    }
  }
`;
