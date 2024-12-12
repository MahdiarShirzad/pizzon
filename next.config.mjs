/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "idthmnncqeqziaqpbdku.supabase.co",
        pathname: "/storage/v1/object/public/pizzaImg/**",
      },
    ],
    // Alternatively, use the domains array if you don't need pathname filtering
    // domains: ['idthmnncqeqziaqpbdku.supabase.co'],
  },
};

export default nextConfig;
