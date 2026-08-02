import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://adhvanstudios.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/press-kit`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}