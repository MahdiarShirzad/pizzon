/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "idthmnncqeqziaqpbdku.supabase.co",
        pathname: "/storage/v1/object/public/pizzaImg/**",
      },
      {
        protocol: "https",
        hostname: "idthmnncqeqziaqpbdku.supabase.co",
        pathname: "/storage/v1/object/public/beberagesImg/**",
      },
    ],
  },
};

export default nextConfig;
