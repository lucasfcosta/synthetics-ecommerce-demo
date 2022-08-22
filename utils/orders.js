import Cookies from "js-cookie";
import * as storage from "./storage";

export const placeOrder = async () => {
  const sessionId = Cookies.get("session_id");
  const response = await fetch(`/api/cart/checkout`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(storage.get(sessionId)),
  });
  const data = await response.json();
  storage.set("order", data);
  // clear items in cart
  storage.del(sessionId);
  window.location.replace("/cart/checkout");
}
