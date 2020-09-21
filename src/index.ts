import {
	APIGatewayProxyEvent,
	APIGatewayProxyHandler,
	APIGatewayProxyResult,
	Context,
} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
	event: APIGatewayProxyEvent,
	context: Context
): Promise<APIGatewayProxyResult> => {
	const queries = JSON.stringify(event.queryStringParameters);
	return {
		statusCode: 200,
		body: `Queries: ${ queries } ${ context.logStreamName }`,
	};
};
