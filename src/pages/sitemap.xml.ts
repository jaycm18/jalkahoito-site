import { SITE_URL } from "../config/site";

const routes = ["/", "/palvelut/", "/hinnasto/", "/yhteystiedot/"];

export function GET() {
	const lastMod = new Date().toISOString();
	const urls = routes
		.map((route) => {
			const absoluteUrl = new URL(route, SITE_URL).href;
			return `<url><loc>${absoluteUrl}</loc><lastmod>${lastMod}</lastmod><changefreq>weekly</changefreq><priority>${route === "/" ? "1.0" : "0.8"}</priority></url>`;
		})
		.join("");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}