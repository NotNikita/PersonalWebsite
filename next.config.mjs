/** @type {import('next').NextConfig} */
const nextConfig = {
  // Those subdomain pathes are required only for pure GitHub Pages deploy
  // basePath: "/PersonalWebsite",
  // assetPrefix: "/PersonalWebsite",
  output: "export",
  reactStrictMode: true,
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
