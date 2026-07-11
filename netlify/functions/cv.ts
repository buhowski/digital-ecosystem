const FILE_ID = '12rOT1Pa4Z-Usau2Xkh-QTXweDTZJJTKvadrJKmRpCk0';
const FILE_NAME = 'CV_Olexander_Tsiomakh_Frontend.pdf';
const EXPORT_URL = `https://docs.google.com/document/d/${FILE_ID}/export?format=pdf`;

// Proxy Google Docs PDF download
const handler = async () => {
	try {
		const response = await fetch(EXPORT_URL, {
			redirect: 'follow',
			headers: {
				Accept: 'application/pdf',
			},
		});

		if (!response.ok) {
			return new Response('Unable to download CV', {
				status: response.status,
			});
		}

		const contentType = response.headers.get('content-type');

		if (!contentType?.includes('application/pdf')) {
			return new Response('Invalid PDF response', {
				status: 502,
			});
		}

		return new Response(response.body, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `attachment; filename="${FILE_NAME}"`,
				'Cache-Control': 'no-store',
			},
		});
	} catch {
		return new Response('Internal server error', {
			status: 500,
		});
	}
};

export default handler;
