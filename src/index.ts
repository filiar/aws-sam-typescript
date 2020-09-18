import {
	APIGatewayProxyEvent,
	APIGatewayProxyHandler,
	APIGatewayProxyResult,
} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
	event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
	const queries = JSON.stringify(event.queryStringParameters);
	return {
		statusCode: 200,
		body: `Queries: ${queries}`,
	};
};
