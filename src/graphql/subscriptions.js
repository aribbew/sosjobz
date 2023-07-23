/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders {
    onCreateOrders {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders {
    onDeleteOrders {
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
