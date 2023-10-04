const siteUrl = "https://www.meritechnologies.com";

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    const result = [];

    // required value only
    result.push({
      loc: "/portfolio",
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });

    // all possible values
    result.push({
      loc: "/services",
      changefreq: "daily",
      priority: 0.9,
      lastmod: new Date().toISOString(),

      // acts only on '/additional-page-2'
      alternateRefs: [
        {
          href: "https://meritechnologies.com/services/digital-marketing",
          hreflang: "en",
        },
        {
          href: "https://meritechnologies.com/services/full-branding",
          hreflang: "en",
        },
      ],
    });

    // using transformation from the current configuration
    result.push(await config.transform(config, "/contact"));

    return result;
  },
};
