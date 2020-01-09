import AWS from "aws-sdk";

export function call(actions, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[actions](params).promise();
}