const loadRazorpay = (totalAmount, onSuccess) => {
  const scriptId = "razorpay-script";

  const launchPayment = () => {
    const options = {
      key: "rzp_test_3TtyaFDXb5RQnl", // Replace with your Razorpay key
      amount: totalAmount * 100,
      currency: "INR",
      name: "SkillRevo",
      description: "Course Purchase",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        if (onSuccess) {
          onSuccess(); // Clear the cart after payment
        }
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
      },
      theme: {
        color: "#0d6efd",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = launchPayment;
    document.body.appendChild(script);
  } else {
    launchPayment();
  }
};


export default loadRazorpay;