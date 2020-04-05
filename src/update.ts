import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';
import { Context } from 'aws-lambda';

export async function main(event: any, context: Context) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      analysisId: event.pathParameters.id,
    },
    UpdateExpression: 'SET content = :content',
    ExpressionAttributeValues: {
      ':content': data.content || null,
    },
    ReturnValues: 'ALL_NEW',
  };

  try {
    await dynamoDbLib.call('update', params);
    return success({ status: true });
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}