import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Plans from "./pages/Plans.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import Recharge from "./pages/Recharge.jsx";
import Signup from "./pages/signup.jsx";   // small s (your file)
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProviderPlans from "./pages/ProviderPlans.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/provider-plans" element={<ProviderPlans />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}
