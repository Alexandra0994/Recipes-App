import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
 optimizePackageImports:[ // для оптимізації модулів
    "react-icons",
    "@mui/material",
    "@mui/icons-material",
    "@mui/x-data-grid",
    "@mui/x-date-pickers",
    "@mui/x-date-pickers-pro",
 ]
  },
};

export default nextConfig;
