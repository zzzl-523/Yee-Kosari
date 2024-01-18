import { Routes, Route } from "react-router-dom";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>home</h1>} />
      <Route path="/posts" element={<h1>posts</h1>} />
      <Route path="/posts/:id" element={<h1>post detail</h1>} />
      <Route path="/posts/edit/:id" element={<h1>post edit</h1>} />
      <Route path="/profile" element={<h1>profile</h1>} />
      <Route path="/profile/edit" element={<h1>profile edit</h1>} />
      <Route path="/search" element={<h1>search</h1>} />
      <Route path="/notification" element={<h1>notification</h1>} />
      <Route path="/users/login" element={<h1>login</h1>} />
      <Route path="/users/signup" element={<h1>signup</h1>} />
    </Routes>
  );
}
