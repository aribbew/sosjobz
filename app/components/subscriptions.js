export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders {
    onUpdateOrders {
      id
      createdAt
      category
      status
      geoLoc
      priceRateDesc
      DescOfJob
      userId
      catId
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      createdAt
      category
      status
      geoLoc
      priceRateDesc
      DescOfJob
      userId
      catId
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;