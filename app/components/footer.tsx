"use client";

import {  useSearchParams } from "next/navigation";

const Footer = () => {
  const params = useSearchParams();
  return (
    <p>
      By using the {params.get("app") ?? "App"}, you acknowledge that you have read and understood
      this User Data Usage Policy and agree to its terms.
    </p>
  );
};

export default Footer;
