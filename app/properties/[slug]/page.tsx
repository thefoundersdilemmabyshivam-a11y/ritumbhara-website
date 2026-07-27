import React from "react";
import Image from "next/image";
import { properties } from "@/config/properties.config";
import { notFound } from "next/navigation";

export function generateStaticParams() {
return properties.map(function (p) { return { slug: p.slug }; });
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
const property = properties.find(function (p) { return p.slug === params.slug; });
if (!property) return {};
return {
title: property.name + " | Ritumbhara",
description: property.description,
openGraph: { images: [property.heroImage] },
};
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
const property = properties.find(function (p) { return p.slug === params.slug; });
if (!property) return notFound();

return React.createElement("main", { className: "max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24" },
React.createElement("div", { className: "relative h-[420px] w-full rounded-md overflow-hidden mb-10" },
React.createElement(Image, { src: property.heroImage, alt: property.name, fill: true, className: "object-cover" })
),
React.createElement("div", { className: "grid lg:grid-cols-3 gap-16" },
React.createElement("div", { className: "lg:col-span-2" },
React.createElement("h1", { className: "text-4xl font-semibold mb-6" }, property.name),
React.createElement("p", { className: "text-lg text-[#4A4A4A] mb-10" }, property.description),
React.createElement("h2", { className: "text-2xl font-semibold mb-6" }, "Amenities"),
React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4" },
property.amenities.map(function (a) {
return React.createElement("div", { key: a, className: "text-sm" }, "\u2022 " + a);
})
)
),
React.createElement("aside", { className: "border border-[#EDE7DD] rounded-md p-7 h-fit" },
React.createElement("p", { className: "mb-1" }, property.contact.phone),
React.createElement("p", { className: "mb-6" }, property.contact.email),
React.createElement("a", { href: property.hotelSpiderBookingUrl, target: "_blank", rel: "noopener", className: "block text-center bg-[#97183C] text-white font-medium py-3.5 rounded-md" }, "Book Now \u2014 via Hotel Spider")
)
)
);
}
