/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/PersonalWebsite",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "notnikita.github.io/",
        port: "",
        pathname: "/PersonalWebsite/**",
      },
      {
        protocol: "http",
        hostname: "nik-yaskevich.xyz/",
        port: "",
      },
      {
        protocol: "https",
        hostname: "nik-yaskevich.xyz/",
        port: "",
      },
    ],
  },
};

export default nextConfig;
