import React from 'react'


export default function Homepage() {
  return (
    <div>
    <div className='bg-[#02042b]'>
      <div className="bg-[#02042b] w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between -mt-[0.5px]">
      <div className="space-y-8 my-16 lg:my-0">
          <h1 className= "font-extrabold text-[115px] leading-[1.1] text-white mx-[-10px] mt-[-5%]">
            BLOOD <br></br>
            BANK
          </h1>
          <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
          <p className="text-[18px] leading-7 text-white opacity-70">
          Save lives through seamless blood management. Collect vital donations from generous donors. Distribute life-saving resources to healthcare providers. Never run dry on the gift of life
          </p>
          <button className="bg-[#d04742] active:scale-90 text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200">Sign Up Now</button>
      
          
        </div>
        <img src="./Image.png"  loading="lazy"
          className="w-full max-w-[680px]"
        />
        
      </div>
      
    </div>
    <svg className=" z-100 mr-[-1%] "
    viewBox="0 0 1446 199"
    focusable="false"
    class="chakra-icon css-1w3t3sf"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z"
      fill="#02042B"
    ></path>
  </svg>

  <section className="mt-[10px] relative overflow-hidden">

      <img
        src="/Dots.png"
        alt="dots"
        loading="lazy"
        width="233"
        height="167"
        className="absolute -z-[100] -top-[8rem] left-[10rem] hidden md:inline-block"
      />
      <img
        src="/Dots.png"
        alt="dots"
        loading="lazy"
        width="233"
        height="167"
        className="absolute -z-[100] top-[3rem] right-0 rotate-180 hidden md:inline-block"
      />

      <div
        className="w-10/12 md:w-11/12 max-w-[1080px] mx-auto relative overflow-hidden pt-4"
      >

        <h2
          className="hidden md:block text-center text-3xl leading-[1.2] font-extrabold"
        >
          Make Successful Donations To Save Lives
        </h2>

        <h2
          className="inline-block text-center md:hidden text-[2.5rem] leading-[1.2] font-extrabold mx-auto"
        >
          Make Successful Donations To Save Lives
        </h2>
        <div className="w-6 h-1 bg-[#d04742] mx-auto mt-4 mb-6 md:mb-20"></div>

        <div
          className="w-full min-h-[520px] bg-white flex md:border border-gray-400 rounded-md relative p-4 md:p-10 py-12"
        >

          <img
            src="./Image.png"  loading="lazy"
            className="bg-[#d04742] absolute right-2 top-12 w-12 h-12 rounded-full z-10 transition-all duration-200 drop-shadow-xl md:hidden"
          />

          <div
            className="absolute border-t-[6rem] border-l-[6rem] border-t-transparent border-l-white z-20 top-6 right-0 md:hidden"
          ></div>
          <div className="flex flex-col justify-between items-start w-full">
            <h3
              className=" text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] max-w-[190px]"
            >
              Supercharge your business with the all‑powerful
              <span className="text-[#d04742]"> Payment Gateway</span>
            </h3>
            <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
            <ul className="space-y-2 my-6 md:my-0">
              <li className=" flex items-center space-x-2">

                <span>100+ Payment Methods</span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Industry Leading Success Rate </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Superior Checkout Experience </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Easy to Integrate </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> Instant Settlements from day 1 </span>
              </li>
              <li className=" flex items-center space-x-2">

                <span> In-depth Reporting and Insights </span>
              </li>
            </ul>
            <div
              className="w-full md:w-fit flex flex-col-reverse md:flex-row md:items-center md:space-x-4 gap-y-4 md:space-y-0"
            >
              <button
                className="bg-[#d04742] active:scale-90 w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200"
              >
                Sign Up Now
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[14px] h-[14px] ml-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </button>
              <div className="flex items-center cursor-pointer group ">
                <a
                  href="#"
                  className="font-bold text-[#d04742]  transition-all duration-200"
                  >Know More</a
                >
              </div>
            </div>
          </div>
          <img
            src="./Image.png"  loading="lazy"
            alt="payment suite"
            className="hidden md:block md:max-w-[400px] lg:max-w-[600px] absolute right-0 lg:top-0 bottom-0"
          />
        </div>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
        >

          <div className="w-full min-h-[15rem] relative cursor-pointer featureCard">

            

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"

            >
              <path
                d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                fill="#fff"
              ></path>
            </svg>

            <div
              className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
            >
              <div>
                <h3
                  className=" text-[#d04742] font-extrabold  leading-[1.2] text-[1.375rem]"
                >
                  Become a Donor
                </h3>
                <p className=" text-grayText mt-6">
                Lorem Ipsum is simply dummy text of the print-
                ing and typesetting industry. Lorem Ipsum has
                been the industry's standard.
                </p>
              </div>
              <div className="flex items-center cursor-pointer place-items-end">
                <a
                  href="#"
                  className=" active:scale-90 font-bold text-[#d04742] transition-all duration-200"
                  >Know More</a
                >
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer featureCard">

            

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"

            >
              <path
                d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                fill="#fff"
              ></path>
            </svg>

            <div
              className="z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
            >
              <div>
                <h3
                  className="font-extrabold text-[#d04742] leading-[1.2] text-[1.375rem]"
                >
                  Why Give Blood?
                </h3>
                <p className="text-grayText mt-6">
                Lorem Ipsum is simply dummy text of the print-
                ing and typesetting industry. Lorem Ipsum has
        been the industry's standard.
                </p>
              </div>
              <div className="flex items-center cursor-pointer place-items-end">
                <a
                  href="#"
                  className="active:scale-90 font-bold text-[#d04742] transition-all duration-200"
                  >Know More</a
                >
                
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer featureCard">

            

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"

            >
              <path
                d="m 0 6 
              a 6 6 0 0 1 6 -6 
              h 250.32501220703125 
              a 16 16 0 0 1 11 5 
              l 77 77 
              a 16 16 0 0 1 5 11 
              v 126 
              a 6 6 0 0 1 -6 6 
              h -337.32501220703125 
              a 6 6 0 0 1 -6 -6 
              z"
                fill="#fff"
              ></path>
            </svg>

            <div
              className="z-[1000]  absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between featureCardBox"
            >
              <div>
                <h3
                  className=" font-extrabold text-[#d04742] leading-[1.2] text-[1.375rem]"
                >
                  How Your Donation Helps
                </h3>
                <p className="mt-6">
                Lorem Ipsum is simply dummy text of the print-
                ing and typesetting industry. Lorem Ipsum has
                been the industry's standard.
                </p>
              </div>
              <div className="flex items-center cursor-pointer place-items-end">
                <a
                  href="#"
                  className=" active:scale-90 font-bold text-[#d04742] transition-all duration-200"
                  >Know More</a
                >
                
              </div>
            </div>
          </div>


          
        </div>
      </div>

      <footer class=" text-white mt-[-100px] pt-[100px] bg-[#02042b] ">
      <div class="w-10/12 pb-10 md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between">
      <div class="flex flex-col max-w-[340px] lg:max-w-[260px]">
          <img src="welcome.gif" loading="lazy"width="1200px"
            height="24px"/>
          <p class="text-grayText text-base my-3 ">
            Our blood donation website is the premier platform for connecting donors and recipients seamlessly. It offers a comprehensive suite of features, enabling donors to easily register, find donation centers, and schedule appointments. Recipients can access a wide range of blood types and connect with willing donors. We support various payment methods, making the process convenient for all. Join us in saving lives, one donation at a time.
          </p>
          <form class="relative bg-white w-[260px] mt-2 mb-4">
            <input placeholder="Your email address" class="pr-16  outline-blue-400 focus:outline-blue-200 placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"/>
            <button class="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10  text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
              Subscribe
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                class="w-[14px] h-[14px] ml-3"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
            </button>
          </form>
          
        </div>

        <div
          class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between"
        >

          <div class="space-y-3">
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                BANKING PLUS
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >RazorpayX</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Current Accounts</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Payouts</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Payout Links</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Corporate Credit Card</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    View Live Demo
                    <span
                      class="text-white  uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                      >New</span
                    >
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                LENDING
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Razorpay Capital</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Instant Settlements</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Working Capital Loans</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Marketplace Instant Settlements</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                RISK & FRAUD
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Thirdwatch</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    PrePay CoD
                    <span
                      class="text-white  uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                      >New</span
                    >
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                BECOME A PARTNER
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Refer and Earn</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Onboarding APIs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                MORE
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Route</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Invoices</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Freelancer Payments</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >International</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Flash Checkout</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >UPI</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >ePOS</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Checkout Demo</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >RazorpayX Payroll</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-3">
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                ACCEPT PAYMENTS
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Payment Gateway</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Payment Pages</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Payment Links</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >QR Codes</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Subscriptions</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Smart Collect
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                DEVELOPERS
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Docs</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Integrations</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >API Reference</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                RESOURCES
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Chargeback Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Settlement Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                SOLUTIONS
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Education</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    E-commerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Saas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    BFSI
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                FREE TOOLS
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >GST Calculator</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Online TDS Payment</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="relative  font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    GST Number Search
                    <span
                      class="text-white  uppercase bg-green-500 rounded-sm text-xs font-bold p-1"
                      >New</span
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <p class=" uppercase font-bold text-white mb-1">
                COMPANY
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" relative font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Careers
                    <span
                      class="text-white  bg-green-500 rounded-sm text-xs font-bold p-1"
                      >We're hiring!</span
                    >
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Terms of Use</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Grievance Redressal</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Responsible Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    White Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                  >
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p class=" uppercase font-bold text-white mb-1 mt-3">
                HELP & SUPPORT
              </p>
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Support</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class=" font-medium text-[#d24742] hover:text-[#a42524] transition-all duration-200"
                    >Knowledge base</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <p class=" uppercase font-bold text-white mb-1 mt-6">
                FIND US ONLINE
              </p>
              <ul class="flex space-x-4 items-center mt-4">
                <li class="cursor-pointer">
                  <a>
                    <img
                      src="facebook-icon.svg"
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a>
                    <img
                      src="twitter-icon.svg"
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a>
                    <img
                      src="instagram-icon.svg"
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a>
                    <img
                      src="linkedin-icon.svg"
                      width="24"
                      height="24"
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class=" mt-6">
                <p class="text-xl">© Blood-Bank 2023</p>
                <p class="text-base">Created with 💙</p>
              </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
    
  </div>

  )
}
