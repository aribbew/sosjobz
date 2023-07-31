/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrdersUpdated = /* GraphQL */ `
  subscription OnOrdersUpdated($id: ID!) {
    onOrdersUpdated(id: $id) {
      id
      createdAt
      category
      status
      payment
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
        isActive
        userId
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
        owner
        messages {
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
export const onCategoryUpdated = /* GraphQL */ `
  subscription OnCategoryUpdated($id: ID!) {
    onCategoryUpdated(id: $id) {
      id
      name
      image
      isActive
      userId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      owner
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
export const onMessageCreated = /* GraphQL */ `
  subscription OnMessageCreated($conversationId: ID!) {
    onMessageCreated(conversationId: $conversationId) {
      id
      owner
      message
      userId
      conversationId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      conversation {
        id
        participants
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messages {
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
export const onConversationUpdated = /* GraphQL */ `
  subscription OnConversationUpdated($id: ID!) {
    onConversationUpdated(id: $id) {
      id
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
      __typename
    }
  }
`;
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
      cat {
        items {
          id
          name
          image
          isActive
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      message {
        items {
          id
          owner
          message
          userId
          conversationId
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
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
      cat {
        items {
          id
          name
          image
          isActive
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      message {
        items {
          id
          owner
          message
          userId
          conversationId
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
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
      cat {
        items {
          id
          name
          image
          isActive
          userId
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      message {
        items {
          id
          owner
          message
          userId
          conversationId
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
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
      isActive
      userId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      owner
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
      isActive
      userId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      owner
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
      isActive
      userId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      owner
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
          status
          payment
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
      message
      userId
      conversationId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      conversation {
        id
        participants
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messages {
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
      message
      userId
      conversationId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      conversation {
        id
        participants
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messages {
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
      message
      userId
      conversationId
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
      conversation {
        id
        participants
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        messages {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
      id
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
      __typename
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
      id
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
      __typename
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
      id
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      messages {
        items {
          id
          owner
          message
          userId
          conversationId
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
      status
      payment
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
        isActive
        userId
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
        owner
        messages {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
      id
      createdAt
      category
      status
      payment
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
        isActive
        userId
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
        owner
        messages {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders {
    onDeleteOrders {
      id
      createdAt
      category
      status
      payment
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
        cat {
          nextToken
          startedAt
          __typename
        }
        message {
          nextToken
          startedAt
          __typename
        }
        messages {
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
        isActive
        userId
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
        owner
        messages {
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
