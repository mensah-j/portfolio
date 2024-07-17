/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["img.youtube.com"],
  },
};

export default nextConfig;
