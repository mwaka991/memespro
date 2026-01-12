// Payment module - handles all donation/payment transactions
const PaymentModule = {
  API_ENDPOINT: "https://api.fastlipa.com/api/create-transaction",
  API_KEY: null,

  // Initialize with API key from .env
  init(apiKey) {
    this.API_KEY = apiKey;
  },

  // Open modal for donation
  openModal(type) {
    const title = type === "challenge" 
      ? "Donate for Challenge" 
      : "Donate for Channel";
    
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modal").style.display = "flex";
  },

  // Process donation payment
  async donate() {
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    if (!phone || !amount) {
      alert("Fill all fields");
      return;
    }

    try {
      const response = await fetch(this.API_ENDPOINT, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          number: phone,
          amount: amount,
          name: "Memes Channel Donation"
        })
      });

      const data = await response.json();
      console.log("Payment response:", data);

      if (data.status === "success") {
        document.body.innerHTML = document.getElementById("thankyou").outerHTML;
      } else {
        alert("Transaction failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Network error: " + error.message);
    }
  }
};

// Export for use
if (typeof module !== "undefined" && module.exports) {
  module.exports = PaymentModule;
}
