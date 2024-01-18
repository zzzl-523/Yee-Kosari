import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import NotificationPage from "../pages/Notification";
import PostListPage from "../pages/Posts";
import PostDetailPage from "../pages/Posts/detail";
import PostEditPage from "../pages/Posts/edit";
import ProfilePage from "../pages/Profile";
import ProfileEditPage from "../pages/Profile/edit";
import SearchPage from "../pages/Search";
import LoginPage from "../pages/Users/login";
import SignupPage from "../pages/Users/signup";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/posts/edit/:id" element={<PostEditPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<ProfileEditPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/users/login" element={<LoginPage />} />
      <Route path="/users/signup" element={<SignupPage />} />
    </Routes>
  );
}
