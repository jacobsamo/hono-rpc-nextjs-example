"use client";
import { useState } from "react";
import { apiClient } from "../api.client";

export default function Home() {
  const [cookies, setCookies] = useState("");

  return (
    <div>
      <button
        onClick={async () => {
          const req = await apiClient["cookie-test"].$get()
          const json = await req.json();
          setCookies(JSON.stringify(json.cookies)); // returning no cookies in the list
        }}
      >
        Fetch
      </button>
      <p>{cookies}</p>
    </div>
  );
}
