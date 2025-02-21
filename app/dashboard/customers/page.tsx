import { Metadata } from "next";

{
  /* <meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com" />
<meta property="og:site_name" content="My Website" />
<meta property="og:title" content="My Website" />
<meta property="og:description" content="My Website Description" />
<meta property="og:image" content="https://example.com/og.png" /> */
}

export const metadata: Metadata = {
  title: "Customers",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [
      {
        url: "/public/hero-mobile.png",
      },
    ],
  },
};

const Customers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Customers</div>;
};

export default Customers;
