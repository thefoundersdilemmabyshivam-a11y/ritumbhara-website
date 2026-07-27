import { destinations } from "@/config/destinations.config";
import { properties } from "@/config/properties.config";

export default function sitemap() {
const base = "https://ritumbhara.com";
return [
{ url: base },
{ url: base + "/about" },
...destinations.map(function (d) { return { url: base + "/destinations/" + d.slug }; }),
...properties.map(function (p) { return { url: base + "/properties/" + p.slug }; }),
];
}
