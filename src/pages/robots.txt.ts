import { SITE_URL } from "../config/site";

export function GET() {
	const sitemapUrl = new URL("/sitemap.xml", SITE_URL).href;

	return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}