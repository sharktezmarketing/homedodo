import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import CustomerDashboard from "./pages/CustomerDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import BookingPage from "./pages/BookingPage";

import CategoryServices from "./pages/CategoryServices";

import ProtectedRoute from "./components/ProtectedRoute";

import ServiceDetails from "./pages/ServiceDetails";

import AddService
from "./pages/AddService";

import MyBookings
from "./pages/MyBookings";

import Cart
from "./pages/Cart";

import Checkout
from "./pages/Checkout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/customer"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vendor"
          element={
            <ProtectedRoute role="vendor">
              <VendorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking"
          element={
            <ProtectedRoute role="customer">
              <BookingPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/category/:id"
          element={<CategoryServices />}
        />
        <Route
  path="/service/:id"
  element={<ServiceDetails />}
/>
<Route
  path="/add-service"
  element={<AddService />}
/>
<Route
  path="/my-bookings"
  element={<MyBookings />}
/>

<Route
  path="/cart"
  element={<Cart />}
/>

<Route
  path="/checkout"
  element={<Checkout />}
/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;