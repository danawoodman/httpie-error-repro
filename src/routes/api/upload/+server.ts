import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return new Response(JSON.stringify({ hello: 'world' }), {
		headers: { 'Content-Type': 'application/json' }
	});
};
