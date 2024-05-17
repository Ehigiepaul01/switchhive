import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  Dashboard,
  Analytics,
  Users,
  Orders,
  UserEdit,
  UserView,
  AdminManagement,
  DeleteAdmin,
  EditAdmin,
  CreateAdmin,
  Blog,
  Payments,
  CreateBlog,
  GiftCards,
  Cms,
  ProductReviews,
  BlockchainIcons,
  Notification,
  CreatePushNotifications,
  PushNotificationUsers,
  InAppMessage,
  CreateInAppMessage,
  UserInAppMessages,
  Customer,
  DeletionRequest,
  Login,
  ForgetPassword,
  ResetPassword,
  OTP,
  CreateUser,
  Rewards,
  ExcludeProducts,
  Promotions,
  FxRates,
  Coupons,
  CreateCoupon,
  Products,
  Website,
  CreatePromotions,
  Mixpay,
  Depay,
} from "../pages";
import MainLayout from "../layout/MainLayout";
import NotFound from "@/pages/NotFound";


export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/auth" >
          <Route index element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="otp" element={<OTP />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route index element={<Users />} />
          <Route path="admin-management">
            <Route index element={<AdminManagement />} />
            <Route path=":id/edit" element={<EditAdmin />} />
            <Route path=":id/delete" element={<DeleteAdmin />} />
            <Route path="create" element={<CreateAdmin />} />
          </Route>
          <Route path=":id/edit" element={<UserEdit />} />
          <Route path="create" element={<CreateUser />} />
          <Route path=":id/view" element={<UserView />} />
        </Route>
        <Route path="/orders" element={<PrivateRoute />}>
          <Route index element={<Orders />}></Route>
        </Route>
        <Route path="/products" element={<PrivateRoute />}>
          <Route index element={<Products />} />
          <Route path="website" element={<Website />} />
        </Route>
        <Route path="/blog" element={<PrivateRoute />}>
          <Route index element={<Blog />} />
          <Route path="create" element={<CreateBlog />} />
        </Route>
        <Route path="/cms" element={<PrivateRoute />}>
          <Route index element={<Cms />} />
          <Route path="product-reviews" element={<ProductReviews />} />
          <Route path="blockchain-icons" element={<BlockchainIcons />} />
        </Route>
        <Route path="/notifications" element={<PrivateRoute />}>
          <Route index element={<Notification />} />
          <Route path="create-notification" element={<CreatePushNotifications />} />
          <Route path="notification-users" element={<PushNotificationUsers />} />
          <Route path="in-app-messages">
            <Route index element={<InAppMessage />} />
            <Route path="create-in-app-messages" element={<CreateInAppMessage />} />
            <Route path="users-in-app-messages" element={<UserInAppMessages />} />
          </Route>
        </Route>
        <Route path="/customers" element={<PrivateRoute />}>
          <Route path="account-limit" element={<Customer />} />
          <Route path="deletion-request" element={<DeletionRequest />} />
        </Route>
        <Route path="/reward-system" element={<PrivateRoute />}>
          <Route index element={<Rewards />} />
          <Route path="exclude-product" element={<ExcludeProducts />} />
        </Route>
        <Route path="/payments" element={<PrivateRoute />}>
          <Route index element={<Payments />} />
          <Route path="mixpay" element={<Mixpay />} />
          <Route path="depay" element={<Depay />} />
        </Route>
        <Route path="/gift-cards" element={<PrivateRoute />}>
          <Route index element={<GiftCards />} />
        </Route>
        <Route path="/promotions" element={<PrivateRoute />}>
          <Route index element={<Promotions />} />
          <Route path="create-promotions" element={<CreatePromotions />} />
        </Route>
        <Route path="/coupons" element={<PrivateRoute />}>
          <Route index element={<Coupons />} />
          <Route path='create-coupon' element={<CreateCoupon />} />
        </Route>
        <Route path="/fx-rates" element={<PrivateRoute />}>
          <Route index element={<FxRates />} />
        </Route>
        <Route path="*" element={<PrivateRoute />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}
