/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  let date = new Date()
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        // Items below that begin with __ are needed for DataStore. When you create an object in
        // DataStore for the first time, those fields are created automatically. If you don't have it when
        // you go update an item, it will throw and error.
        'id': { S: event.request.userAttributes.sub },  // This is the Sub ID from AuthCognitoIdentityProvider, useful to query current user
        'name': { S: event.request.userAttributes.name },  // This is the Sub ID from AuthCognitoIdentityProvider, useful to query current user
        '__typename': { S: 'User' },
        '_lastChangedAt': { N: date.valueOf().toString() },   // timestamp
        '_version': { N: '1' },                               // Every time this object gets modified, this version will increase, therefore we begin with 1
        'createdAt': { S: date.toISOString() },
        'username': {S: event.userName},
        'updatedAt': { S: date.toISOString() },
        'email': { S: event.request.userAttributes.email },
      },
      TableName: process.env.USERTABLE
    }

    try {
      await ddb.putItem(params).promise()
      console.log("Success")
    } catch (err) {
      console.log("Error", err)
    }

    console.log("Success: Everything executed correctly")

  } else {
    console.log("Error: Nothing was written to DynamoDB")
  }
};
