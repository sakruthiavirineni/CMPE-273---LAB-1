import { gql } from "@apollo/client";
//Mutation for creating User
export const CREATE_USER_MUTATION = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;
//Mutation for editing the quantity item.
export const EDIT_ITEM_QTY = gql`
  mutation editItemQtyById($itemId: String!, $itemCount: Int!, $sales: Int!) {
    editItemQtyById(itemId: $itemId, itemCount: $itemCount, sales: $sales) {
      sales
    }
  }
`;
//Mutation for adding item to the purchases
export const ADD_PURCHASES = gql`
  mutation addItemToPurchases(
    $itemId: String!
    $userId: String!
    $itemName: String!
    $itemImage: String!
    $itemCount: Int!
    $totalPrice: Float
    $qty: Int!
    $itemDescription: String!
    $giftMessage: String!
  ) {
    addItemToPurchases(
      itemId: $itemId
      userId: $userId
      itemName: $itemName
      itemImage: $itemImage
      itemCount: $itemCount
      totalPrice: $totalPrice
      qty: $qty
      itemDescription: $itemDescription
      giftMessage: $giftMessage
    ) {
      itemId
      userId
      itemName
    }
  }
`;
//Mutation for checking duplicates.
export const CHECK_SHOP_DUPLICATES = gql`
  mutation findShopDuplicates($shopName: String!) {
    findShopDuplicates(shopName: $shopName) {
      shopName
    }
  }
`;
//Creating the Shop 
export const CREATE_SHOP = gql`
  mutation createShop($id: String!, $shopName: String!) {
    createShop(id: $id, shopName: $shopName) {
      shopName
    }
  }
`;
//Adding the Product.
export const ADD_PRODUCT = gql`
  mutation addShopItem(
    $itemName: String!
    $userId: String!
    $itemCategory: String!
    $itemPrice: String!
    $itemDescription: String!
    $itemCount: String!
    $itemImage: String!
  ) {
    addShopItem(
      userId: $userId
      itemName: $itemName
      itemCategory: $itemCategory
      itemPrice: $itemPrice
      itemDescription: $itemDescription
      itemCount: $itemCount
      itemImage: $itemImage
    ) {
      userId
      itemName
    }
  }
`;
//Adding Product to Cart.
export const ADD_PRODUCT_TO_CART = gql`
  mutation addToCart($userId: String!, $itemId: String!, $qty: Int!) {
    addToCart(userId: $userId, itemId: $itemId, qty: $qty) {
      userId
      itemId
      qty
    }
  }
`;
//Deleting item from cart.
export const DELETE_FROM_CART = gql`
  mutation deleteFromCart($itemId: String!) {
    deleteFromCart(itemId: $itemId) {
      itemId
    }
  }
`;

export const CLEAR_CART = gql`
  mutation clearCart {
    clearCart {
      itemId
    }
  }
`;