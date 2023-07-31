/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
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
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
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
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
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
