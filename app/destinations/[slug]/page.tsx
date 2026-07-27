import React from "react";
import { destinations } from "@/config/destinations.config";
import { properties } from "@/config/properties.config";
import PropertyCard from "@/components/PropertyCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
return destinations.map(function (d) { return { slug: d.slug }; });
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
const destination = destinations.find(function (d) { return d.slug === params.slug; });
if (!destination) return notFound();
const destinationProperties = properties.filter(function (p) { return p.destinationSlug === destination.slug; });

return React.createElement("main", { className: "max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24" },
React.createElement("p", { className: "uppercase tracking-[0.2em] text-xs text-[#C8A96A] font-semibold mb-3" }, "Destination"),
React.createElement("h1", { className: "text-5xl font-semibold text-[#1A1A1A] mb-6" }, destination.name),
React.createElement("p", { className: "text-lg text-[#4A4A4A] max-w-2xl mb-14" }, destination.shortStory),
destinationProperties.length > 0 && React.createElement("div", null,
React.createElement("h2", { className: "text-2xl font-semibold text-[#1A1A1A] mb-8" }, "Stays in " + destination.name),
React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" },
destinationProperties.map(function (p) {
return React.createElement(PropertyCard, { key: p.slug, property: p });
})
)
),
destination.thingsToDo.length > 0 && React.createElement("div", null,
React.createElement("h2", { className: "text-2xl font-semibold text-[#1A1A1A] mb-8" }, "Things To Do"),
React.createElement("div", { className: "grid sm:grid-cols-2 gap-6 mb-16" },
destination.thingsToDo.map(function (t) {
return React.createElement("div", { key: t.title, className: "border border-[#EDE7DD] rounded-md p-5" },
React.createElement("p", { className: "font-semibold text-[#1A1A1A] mb-1" }, t.title),
React.createElement("p", { className: "text-sm text-[#4A4A4A]" }, t.description)
);
})
)
),
destination.transportation && React.createElement("div", null,
React.createElement("h2", { className: "text-2xl font-semibold text-[#1A1A1A] mb-4" }, "Getting Around"),
React.createElement("p", { className: "text-sm text-[#4A4A4A]" }, destination.transportation)
)
);
}
