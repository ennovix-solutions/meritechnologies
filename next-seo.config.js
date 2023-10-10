const title = "Top Technology Company in Ethiopia";
const titleTemplate = "%s | Meri Technologies";
const defaultTitle = "Top Technology Company in Ethiopia | Meri Technologies";
const description =
  "Leading tech company in Ethiopia, specializing in software, websites, branding, video production, graphics, and marketing. Explore our portfolio for a transformative online presence.";
const websiteURL = "https://meritechnologies.com/";

const SEO = {
  title,
  titleTemplate,
  defaultTitle,
  description,
  canonical: websiteURL,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: websiteURL,
    title,
    description,
    images: [
      {
        url: "/servicebg.webp",
        alt: title,
        width: 1200,
        height: 800,
      },
    ],
  },
  languageAlternates: [
    {
      hrefLang: "en", // English
      href: websiteURL,
    },
    {
      hrefLang: "am", // Amharic
      href: websiteURL,
    },
    {
      hrefLang: "ti", // Tigrigna
      href: websiteURL,
    },
    {
      hrefLang: "om", // Oromo
      href: websiteURL,
    },
  ],
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Halid Hassan",
      keyOverride: "HalidHassan",
    },
    {
      property: "dc:creator",
      content: "Faruq Ismael",
      keyOverride: "FaruqIsmael",
    },
    {
      name: "application-name",
      content: "Meri Technologies",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: websiteURL + "favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: websiteURL + "apple-touch-icon.png",
      sizes: "76x76",
    },
    {
      rel: "manifest",
      href: websiteURL + "/manifest.json",
    },
    {
      rel: "preload",
      href: "https://www.test.ie/font/sample-font.woof2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
};

const OrganizationJSONLD = {
  type: "Organization",
  name: "Meri Technologies",
  description,
  url: websiteURL,
  logo: websiteURL + "logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+251932555533",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Example Street",
      addressLocality: "Addis Ababa",
      addressRegion: "",
      postalCode: "1000", // Addis Ababa postal codes might vary; replace this with the accurate postal code if available.
      addressCountry: "Ethiopia",
    },
  },
  sameAs: [
    "https://dreamtech.et",
    "https://zalatech.com",
    "https://africom.com.et",
  ],
};

export default SEO;
