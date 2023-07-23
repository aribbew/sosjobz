/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      message {
        items {
          id
          owner
          senderId
          message
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      orders {
        items {
          id
          createdAt
          category
          geoLoc
          priceRateDesc
          DescOfJob
          userId
          catId
          _version
          _deleted
          _lastChangedAt
          updatedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        message {
          nextToken
          startedAt
          __typename
        }
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        username
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        message {
          nextToken
          startedAt
          __typename
        }
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      orders {
        items {
          id
          createdAt
          category
          geoLoc
          priceRateDesc
          DescOfJob
          userId
          catId
          _version
          _deleted
          _lastChangedAt
          updatedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      owner
      senderId
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      user {
        id
        name
        username
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        message {
          nextToken
          startedAt
          __typename
        }
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        senderId
        message
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        user {
          id
          name
          username
          email
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        owner
        senderId
        message
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        user {
          id
          name
          username
          email
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
      id
      createdAt
      category
      geoLoc
      priceRateDesc
      DescOfJob
      userId
      catId
      _version
      _deleted
      _lastChangedAt
      updatedAt
      user {
        id
        name
        username
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        message {
          nextToken
          startedAt
          __typename
        }
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      cat {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        orders {
          nextToken
          startedAt
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const listOrderss = /* GraphQL */ `
  query ListOrderss(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        category
        geoLoc
        priceRateDesc
        DescOfJob
        userId
        catId
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          name
          username
          email
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        cat {
          id
          name
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        category
        geoLoc
        priceRateDesc
        DescOfJob
        userId
        catId
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          name
          username
          email
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        cat {
          id
          name
          image
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
