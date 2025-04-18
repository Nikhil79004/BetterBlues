// "use client"
// import React from 'react'

// const Navbar = () => {
//   const navItems = ['Home', 'About', 'Latest Causes', 'Social Events', 'Blog', 'Contact'];

//   return (
//     <nav className='flex items-center justify-between p-6'>
//       <div>
//         <img src="/betterblues-logo.png" alt="BetterBlues Logo" className="h-20 w-auto" />
//       </div>

//       <div className='flex gap-8 items-center text-blue-900'>
//         {navItems.map((item, index) => (
//           <h3 key={index} className='text-lg font-medium cursor-pointer hover:text-fuchsia-700 transition'>
//             {item}
//           </h3>
//         ))}

//         <button className='bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold text-lg px-7 py-2 text-white'>
//           Donate
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;
"use client"
import React from 'react';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Latest Causes', 'Social Events', 'Blog', 'Contact'];

  const handleDonate = () => {
    const options = {
      key: "rzp_test_2eyDsrT3RRQSLQ",
      amount: "", 
      currency: "INR",
      name: "BetterBlues Foundation",
      description: "Donation",
      image: "/betterblues-logo.png", 
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#22c55e" 
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <nav className='flex items-center justify-between p-6'>
      <div>
        <img src="/betterblues-logo.png" alt="BetterBlues Logo" className="h-20 w-auto" />
      </div>

      <div className='flex gap-8 items-center text-blue-900'>
        {navItems.map((item, index) => (
          <h3 key={index} className='text-lg font-medium cursor-pointer hover:text-fuchsia-700 transition'>
            {item}
          </h3>
        ))}

        <button
          onClick={handleDonate}
          className='bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold text-lg px-7 py-2 text-white'
        >
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



