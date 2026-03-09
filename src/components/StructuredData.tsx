import Script from 'next/script';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "GymAndFitnessCenter",
        "@id": "https://fitnessstudiokoorachundu.com",
        "name": "FITNESS STUDIO Koorachundu",
        "alternateName": "FITNESS STUDIO / GYM",
        "description": "Premier fitness center in Koorachundu, Kerala offering state-of-the-art equipment, personal training, group classes, and expert fitness guidance.",
        "image": "https://fitnessstudiokoorachundu.com/og-image.jpg",
        "logo": "https://fitnessstudiokoorachundu.com/logo.png",
        "url": "https://fitnessstudiokoorachundu.com",
        "telephone": "+919074198396",
        "email": "info@fitnessstudio.com",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Balussery Rd, Koorachunde",
            "addressLocality": "Kanthalad",
            "addressRegion": "Kerala",
            "postalCode": "673527",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "11.5385625",
            "longitude": "75.8439375"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "06:00",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "07:00",
                "closes": "14:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/fitnessstudiokoorachundu",
            "https://www.instagram.com/fitnessstudiokoorachundu"
        ],
        "amenityFeature": [
            {
                "@type": "LocationFeatureSpecification",
                "name": "Personal Training"
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Group Classes"
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Modern Equipment"
            },
            {
                "@type": "LocationFeatureSpecification",
                "name": "Locker Facilities"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Membership Plans",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Day Pass"
                    },
                    "price": "200",
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Monthly Membership"
                    },
                    "price": "1200",
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Annual Membership"
                    },
                    "price": "12000",
                    "priceCurrency": "INR"
                }
            ]
        }
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            strategy="beforeInteractive"
        />
    );
}
