import React, { useEffect, useState } from "react";
import SUCCESSIMAGE from "../assest/success.gif";
import { Link, useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const [orderSaved, setOrderSaved] = useState(false);
  const [error, setError] = useState(null);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) return;

    const saveOrder = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/webhook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        if (!res.ok) {
          const text = await res.text(); // fallback if JSON parsing fails
          throw new Error(text || "Failed to save order");
        }

        const data = await res.json();
        console.log("Order saved:", data);
        setOrderSaved(true);
      } catch (err) {
        console.error("Error saving order:", err);
        setError(err.message || "Something went wrong");
      }
    };

    saveOrder();
  }, [sessionId]);

  return (
    <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img src={SUCCESSIMAGE} width={150} height={150} />
      <p className="text-green-600 font-bold text-xl">Payment Successfully</p>

      {error && <p className="text-red-600 mt-2">{error}</p>}
      {orderSaved && (
        <p className="text-green-700 mt-2">Order saved successfully!</p>
      )}

      <Link
        to={"/order"}
        className="p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white"
      >
        See Order
      </Link>
    </div>
  );
};

export default Success;
