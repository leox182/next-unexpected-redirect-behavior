"use client";

import { helloAction } from "./action";

export default function HomePage() {
  const handleSayHello = async () => {
    try {
      await helloAction();

      alert("Said hello from the server!");
    } catch (error) {
      alert("Failed to say hello from the server!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleSayHello}>Say Hello Action!</button>
    </div>
  );
}
