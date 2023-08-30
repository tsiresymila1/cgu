"use client";

import { useSearchParams } from "next/navigation";

const Header = () => {
  const params = useSearchParams();
  return (
    <p>
      Thank you for choosing to use the {params.get("app") ?? "App"}. This User
      Data Usage Policy outlines how we collect, use, and protect your personal
      information when you register and log in to our App. By using the App, you
      agree to the terms outlined in this policy.
    </p>
  );
};

export default Header;
