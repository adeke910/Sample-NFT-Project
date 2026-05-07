import { Navigate, Route, Routes } from "react-router";
import RootLayout from "./root-layout";
import HomeRoutes from "@/home";
import NFTDetailsRoutes from "@/nft-details";
import ProfileRoutes from "@/profile";

export const AppRoutes = () => {
  return (
    <RootLayout>
      <Routes>
        <Route index path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeRoutes />} />
        <Route path="/profile" element={<ProfileRoutes />} />
        <Route
          path="/collection/nft_details/:id"
          element={<NFTDetailsRoutes />}
        />
      </Routes>
    </RootLayout>
  );
};
