"use client";

import { useEffect, useState } from "react";

export default function CountryLookupAPI() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const response = fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <h1>{country}</h1>;
}
