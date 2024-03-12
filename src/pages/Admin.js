import React from "react";
import { ShowNav } from "../components/Homepage/Nav page/nav";
import Footer from "../components/Homepage/footer/Footer";
import Head from "../components/admission page/header page/head";
import Promis from "../components/admission page/promise page/Promise";
import Next from "../components/admission page/next/next";

function Admin() {
  return (
    <div>
      {/* <ShowNav /> */}
      <Head />
      <Promis />
      <Next />
      <Footer />
    </div>
  );
}

export default Admin;
