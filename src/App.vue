<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  
 <!-- ----------------
 ----------------
 Part One - Navigation Bar
 ----------------
 ---------------- -->

 <div class="flex items-center justify-between px-8 py-3 font-bold bg-yellow-400">

    <div class="flex items-center gap-10 ">
      <p class="px-5">Personal</p>
      <p>Business</p>
      <p>About Us</p>
    </div>

    <div class="flex items-center gap-3">

      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4t2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
      <p class="px-3 py-1 border-gray-800/70">Sign in MPT Care</p>
      <div>
      <!-- MM -->
      <a href="#" class="px-3 py-1 border-l border-r border-gray-800/70">
        MM
      </a>

      <!-- Facebook -->
      <a href="#" aria-label="Facebook" class="px-3 py-1 border-r border-gray-800/70">
        <i class="fa-brands fa-facebook-f"></i>
      </a>

      <!-- Instagram -->
      <a href="#" aria-label="Instagram" class="px-3 py-1 border-r border-gray-800/70">
        <i class="fa-brands fa-instagram"></i>
      </a>

      <!-- LinkedIn -->
      <a href="#" aria-label="LinkedIn" class="px-3 py-1 border-r border-gray-800/70">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>

      <!-- Telegram -->
      <a href="#" aria-label="Telegram" class="px-3 py-1 border-r border-gray-800/70">
        <i class="fa-brands fa-telegram"></i>
      </a>

      <!-- TikTok -->
      <a href="#" aria-label="TikTok" class="px-3 py-1 border-r border-gray-800/70">
        <i class="fa-brands fa-tiktok"></i>
      </a>

      <!-- Search -->
      <button type="button" aria-label="Search" class="px-3 py-1">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      </div>
    </div>
 </div>


 <!-- ----------------
 ----------------
 Part Two - Navigation Bar
 ----------------
 ---------------- -->


 <div class="flex items-center justify-between px-8 py-3 font-bold bg-white">

    <div class="flex items-center gap-10 ">
      <img class="w-[100px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/09/23235935/logo-1.webp" alt="">
      
      <div class="flex items-center gap-2">
        <i class="text-sm fa-solid fa-headset"></i>
        <span class="" >MPT Support</span>
      </div>

      <div class="flex items-center gap-2">
        <i class="text-sm fa-solid fa-mobile-screen-button"></i>
        <span class="" >Get Apps</span>
      </div>
      
      <div class="flex items-center gap-2">
        <i class="text-sm fa-regular fa-newspaper"></i>
        <span class="" >News</span>
      </div>

    </div>

    <div class="flex items-center gap-3">

      <p class="px-3 py-1 border-gray-800/70">Special Promotion</p>
      <p class="px-3 py-1 border-gray-800/70">Mobile Services</p>
      <p class="px-3 py-1 border-gray-800/70">MPT Club</p>
      <p class="px-3 py-1 border-gray-800/70">Home Fiber Internet</p>

    </div>
 </div>

  <!-- ----------------
  ----------------
  Part Three - Banner
  ----------------
  ---------------- -->

 <div class="w-screen">
  <img class="w-screen" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2026/08/31145752/Dance-with-MPT1400x430-resize.jpg" alt="">
 </div>

  <!-- ----------------
  ----------------
  Part Four - Banner
  ----------------
  ---------------- -->

 <div class="flex gap-3 px-12 py-5">

  <div class="grid ">
    <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/03/12101540/300x211_Shortcut_Menu_Icon_MPT4U.jpg" alt="">
    <p class="mt-2 text-lg font-bold text-center text-blue-800 ">MPT4U</p>
  </div>

  <div>
    <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/02/23235454/data-pack.webp" alt="">
    <p class="mt-2 text-lg font-bold text-center text-blue-800 ">Data Pack</p>
  </div>

  <div>
    <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/02/23235454/voice-pack.webp" alt="">
    <p class="mt-2 text-lg font-bold text-center text-blue-800 ">Voice Pack</p>
  </div>

  <div>
    <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/02/23235454/mpt-point.webp" alt="">
    <p class="mt-2 text-lg font-bold text-center text-blue-800 ">MPT Club</p>
  </div>

  <div>
    <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/02/23235453/sim-1.webp" alt="">
    <p class="mt-2 text-lg font-bold text-center text-blue-800 ">SIM</p>
  </div>

</div>

  <!-- ----------------
  ----------------
  Part Five - Category
  ----------------
  ---------------- -->

  <div>
    <p class="text-5xl text-center text-blue-800 ">Special Promotions</p>
    <div class="flex justify-center gap-1 mt-5 text-xl">
      <p class="px-5 py-2 border-2 border-gray-300">Trending</p>
      <p class="px-5 py-2 border-2 border-gray-300">Entertainment</p>
      <p class="px-5 py-2 border-2 border-gray-300">Voice & Data</p>
    </div>

    <div class="grid items-start grid-cols-3 gap-3 py-5 px-50">
      
      <div class="justify-center border-2 border-gray-200 rounded-xl ">
        <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2026/05/08084300/A-Kyite-Pyaw-Plus_26500x340.jpg" alt="">
        <div class="p-3">
          <p class="text-lg font-bold text-blue-800">A Kyite Pyaw Pack</p>
          <p class="mt-4 font-bold">Price: 987 Ks</p>
          <p class="mt-2 font-bold">Minutes: 60 mins (MPT-MPT)</p>
          <p class="mt-2 font-bold">Validity: 7 days</p>
          <p class="mt-2 font-bold">To Buy : MPT4U, *600*3#</p>
          
          <div class="flex gap-2 mt-5 ">

              <button class="inline-flex items-center gap-1.5 border border-[#005ba3] px-4 py-3 rounded-md text-sm font-medium text-[#005ba3] transition-colors hover:bg-[#005ba3] hover:text-white cursor-pointer">
              
                <span>Learn More</span>
                <!-- Circular Arrow Icon Background -->
                <span class="inline-flex items-center justify-center size-4 rounded-full bg-[#005ba3] text-white">
                  <!-- SVG Chevron/Arrow Right Icon -->
                  <svg class="size-2.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>

            </button>

            <button class="px-3 py-2 font-bold text-white bg-blue-800 border-blue-800 rounded-md border-1">Buy Now</button>

          </div>
        </div>
      </div>

      <div class="justify-center border-2 border-gray-200 rounded-xl ">
        <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/12/10105906/mlbb-mobile-624x424.jpg" alt="">
        <div class="p-3">
          <p class="text-lg font-bold text-blue-800">Mobile Legends Data Pack</p>
          <p class="mt-4 font-bold">Price: 999 Ks</p>
          <p class="mt-2 font-bold">Cashback – 450 Ks</p>
          <p class="mt-2 font-bold">Data: 1050 MB</p>
          <p class="mt-2 font-bold">Validity: (30) Days</p>
          <p class="mt-2 font-bold">Direct USSD: *9001#</p>

          
          <div class="flex gap-2 mt-5 mb-3 ">

              <button class="inline-flex items-center gap-1.5 border border-[#005ba3] px-4 py-3 rounded-md text-sm font-medium text-[#005ba3] transition-colors hover:bg-[#005ba3] hover:text-white cursor-pointer">
              
                <span>Learn More</span>
                <!-- Circular Arrow Icon Background -->
                <span class="inline-flex items-center justify-center size-4 rounded-full bg-[#005ba3] text-white">
                  <!-- SVG Chevron/Arrow Right Icon -->
                  <svg class="size-2.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>

            </button>

            <button class="px-3 py-2 font-bold text-white bg-blue-800 border-blue-800 rounded-md border-1">Buy Now</button>

 

          </div>
        </div>
      </div>

      <div class="justify-center border-2 border-gray-200 rounded-xl ">
        <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2026/05/05102534/DCPAR500x340.jpg" alt="">
        <div class="p-3">
          <p class="text-lg font-bold text-blue-800">Data Carry Plus AutoRenew</p>
          <p class="mt-4 font-bold">Price: 997 Ks</p>
          <p class="mt-2 font-bold">Data : 263 MB</p>
          <p class="mt-2 font-bold">Validity: 30 days</p>
          <p class="mt-2 font-bold">Subscribe: MPT4U, *777*3*3#</p>
          
          <div class="flex gap-2 mt-5 mb-3 ">

              <button class="inline-flex items-center gap-1.5 border border-[#005ba3] px-4 py-3 rounded-md text-sm font-medium text-[#005ba3] transition-colors hover:bg-[#005ba3] hover:text-white cursor-pointer">
              
                <span>Learn More</span>
                <!-- Circular Arrow Icon Background -->
                <span class="inline-flex items-center justify-center size-4 rounded-full bg-[#005ba3] text-white">
                  <!-- SVG Chevron/Arrow Right Icon -->
                  <svg class="size-2.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>

            </button>

            <button class="px-3 py-2 font-bold text-white bg-blue-800 border-blue-800 rounded-md border-1">Buy Now</button>

 

          </div>
        </div>
      </div>
  
      
      <div class="justify-center border-2 border-gray-200 rounded-xl ">
        <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2026/05/08091903/Kyaik-Yar-Khaw_26500x340.jpg" alt="">
        <div class="p-3">
          <p class="text-lg font-bold text-blue-800">Kyite Yar Khaw Pack</p>
          <p class="mt-4 font-bold">Price: 997 Ks</p>
          <p class="mt-2 font-bold">Minutes : 40 mins (Anycall)</p>
          <p class="mt-2 font-bold">Validity: 15 days</p>
          <p class="mt-2 font-bold">To Buy : MPT4U, *997*1#</p>
          
          <div class="flex gap-2 mt-5 mb-3 ">

              <button class="inline-flex items-center gap-1.5 border border-[#005ba3] px-4 py-3 rounded-md text-sm font-medium text-[#005ba3] transition-colors hover:bg-[#005ba3] hover:text-white cursor-pointer">
              
                <span>Learn More</span>
                <!-- Circular Arrow Icon Background -->
                <span class="inline-flex items-center justify-center size-4 rounded-full bg-[#005ba3] text-white">
                  <!-- SVG Chevron/Arrow Right Icon -->
                  <svg class="size-2.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>

            </button>

            <button class="px-3 py-2 font-bold text-white bg-blue-800 border-blue-800 rounded-md border-1">Buy Now</button>

 

          </div>
        </div>
      </div>

      
      <div class="justify-center border-2 border-gray-200 rounded-xl ">
        <img class="rounded-xl" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2026/05/06190250/HtawB-5x_26500x340.jpg" alt="">
        <div class="p-3">
          <p class="text-lg font-bold text-blue-800">Htaw B 5X</p>
          <p class="mt-4 font-bold">Price: 1000 Ks</p>
          <p class="mt-2 font-bold">Htaw B Balance : 5000 Ks (5x Htaw B Balance)</p>
          <p class="mt-2 font-bold">Validity: 15 days</p>
          <p class="mt-2 font-bold">To Buy : MPT4U, *5001#</p>
          
          <div class="flex gap-2 mt-5 mb-3 ">

              <button class="inline-flex items-center gap-1.5 border border-[#005ba3] px-4 py-3 rounded-md text-sm font-medium text-[#005ba3] transition-colors hover:bg-[#005ba3] hover:text-white cursor-pointer">
              
                <span>Learn More</span>
                <!-- Circular Arrow Icon Background -->
                <span class="inline-flex items-center justify-center size-4 rounded-full bg-[#005ba3] text-white">
                  <!-- SVG Chevron/Arrow Right Icon -->
                  <svg class="size-2.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>

            </button>

            <button class="px-3 py-2 font-bold text-white bg-blue-800 border-blue-800 rounded-md border-1">Buy Now</button>

 

          </div>
        </div>
      </div>
      
    </div>

  </div>

  <!-- ----------------
  ----------------
  Part Six - Section
  ----------------
  ---------------- -->

  <div class="bg-gray-300 h-140">
    <p class="mb-3 text-4xl text-center text-blue-900">App Service</p>
    
    <div class="flex justify-center px-50">
      
      
      <div class="w-[50%] bg-blue-900 pt-18 pr-2 pl-20">
      <img class="w-[400px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/11/23235806/MPT-Pay-Mock-up.webp" alt="">
      </div>
      
      <div class="w-[50%] bg-yellow-400 p-5">
        <p class="text-3xl font-bold">MPT Pay</p>
        <p class="mt-3 font-bold text-sm/8">MPT Pay is the most trusted digital money service to let customers send and receive money, top-up their mobiles and perform payments at the merchant using mobile phone instantly anytime, anywhere in Myanmar.</p>
        
        <button class="p-2 mt-2 mb-5 text-blue-900 border-2 border-blue-900">
          <span class="font-bold"> View More</span>
        </button>
        

        <div>
          <p class="mb-5 font-bold">Download</p>

          <div class="grid grid-cols-2 w-[70%] items-center gap-2">
            <img class="w-[200px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235915/google-play-mpt4u.webp" alt="">
            <img class="w-[200px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235915/app-store-mpt4u-e1677139305255.webp" alt="">
            <img class="w-[200px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235915/mpt-pay.webp" alt="">
            <img class="w-[200px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235916/app-gallery-mpt.webp" alt="">
          </div>
        </div>
      </div>

      
    </div>

  </div>

  <!-- ----------------
  ----------------
  Part Seven - Section
  ----------------
  ---------------- -->


  <div>

    <p class="mt-5 mb-5 text-5xl font-bold text-center text-blue-900">Other Services</p>
    
    <section class="grid max-w-6xl grid-cols-1 gap-5 mx-auto mt-10 mb-10 md:grid-cols-3">

      <!-- Home Fiber Internet -->
      <div class="relative h-[220px] overflow-hidden rounded-xl
                  bg-[#7b9fce] p-4 shadow-md">

        <img
          src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/11/23235807/Done-Pyan-Small-Banner%402x.webp"
          alt=""
          class="absolute inset-0 object-contain m-auto w-44 h-36 opacity-70 mix-blend-multiply"
        />

      <h3 class="relative z-10 text-lg font-bold text-white">
        Home Fiber Internet
      </h3>

      <p class="absolute z-10 text-sm leading-7 text-white bottom-8 left-4 right-4">
        Fast, Affordable and Reliable Internet Service
        for households  SOHO
      </p>
    </div>


      <!-- Value Added Services -->
      <div class="relative h-[220px] overflow-hidden rounded-xl
                  bg-[#7b9fce] p-4 shadow-md">

        <img
          src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/11/23235806/VAS-Small-Banner%402x.webp"
          alt=""
          class="absolute inset-0 object-contain m-auto w-44 h-36 opacity-70 mix-blend-multiply"
        />

        <h3 class="relative z-10 text-lg font-bold text-white">
          Value Added Services
        </h3>

        <p class="absolute z-10 text-sm leading-7 text-white bottom-8 left-4 right-4">
          MPT offers a wide range of value added services
          to meet your needs
        </p>
      </div>


      <!-- Data ArMaKhan -->
      <div class="relative h-[220px] overflow-hidden rounded-xl
                  bg-[#7b9fce] p-4 shadow-md">

        <img
          src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/04/02091953/data-armakha.jpg"
          alt=""
          class="absolute inset-0 object-contain m-auto w-44 h-36 opacity-70 mix-blend-multiply"
        />

        <h3 class="relative z-10 text-lg font-bold text-white">
          Data ArMaKhan
        </h3>

        <p class="absolute z-10 text-sm leading-7 text-white bottom-8 left-4 right-4">
          (15) days Auto Renewal data packages with
          Free Health Insurance
        </p>
      </div>

    </section>

  </div>



  <!-- ----------------
  ----------------
  Part Eight - Section
  ----------------
  ---------------- -->

  <div class="bg-gray-200 h-78">

    <div class="py-5 text-5xl font-bold text-center text-blue-900">
      <p>Need our Supports?</p>
    </div>
    
    <div class="flex justify-center gap-4 mt-5 mb-10 px-55">

      <div class="grid items-center p-5 bg-white shadow-md rounded-xl w-55 h-38">
        <img class=" m-auto w-[70px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235916/mpt-faq.webp" alt="">
        <p class="font-bold text-center">FAQS</p>
      </div>

      <div class="grid items-center p-5 bg-white shadow-md rounded-xl w-55 h-38">
        <img class=" m-auto w-[70px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235917/call-no-mpt.webp" alt="">
        <p class="font-bold text-center">106 Call Center</p>
      </div>

      <div class="grid items-center p-5 bg-white shadow-md rounded-xl w-55 h-38">
        <img class=" m-auto w-[70px]"  src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235917/tutu-chat-mpt.webp" alt="">
        <p class="font-bold text-center">TuTu Chat</p>
      </div>
      
      <div class="grid items-center p-5 bg-white shadow-md rounded-xl w-55 h-38">
        <img class=" m-auto w-[70px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235916/mpt-self-code.webp" alt="">
        <p class="font-bold text-center">Self Service Codes</p>
      </div>

      <div class="grid items-center p-5 bg-white shadow-md rounded-xl w-55 h-38">
        <img class=" m-auto w-[70px]" src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/10/23235916/mpt-shop-1.webp" alt="">
        <p class="font-bold text-center">MPT Shops</p>
      </div>

    </div>

  </div>

    <!-- ----------------
    ----------------
    Part Eight - Last
    ----------------
    ---------------- -->

    <div class="bg-blue-900 h-150 ">

      <div class="flex items-center gap-3 py-7 px-9">

      <div>
        <!-- Facebook -->
        <a href="#" aria-label="Facebook" class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-facebook-f"></i>
        </a>

        <!-- Instagram -->
        <a href="#" aria-label="Instagram" class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-instagram"></i>
        </a>

        <!-- LinkedIn -->
        <a href="#" aria-label="LinkedIn" class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-linkedin-in"></i>
        </a>

        <!-- Telegram -->
        <a href="#" aria-label="Telegram" class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-telegram"></i>
        </a>

        <!-- YouTube -->
        <a href="#" aria-label="YouTube"
          class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-youtube"></i>
        </a>

        <!-- Viber -->
        <a href="#" aria-label="Viber"
          class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-viber"></i>
        </a>

        <!-- TikTok -->
        <a href="#" aria-label="TikTok" class="px-3 py-1 text-white border-gray-800/70">
          <i class="text-2xl fa-brands fa-tiktok"></i>
        </a>
        </div>
      
    </div>


    <div class="flex mt-3 gap-60 px-15 ">

      <div class="grid gap-7">
        <p class="font-bold text-yellow-400">About Us</p>
        <p class="font-bold text-white">Who We Are</p>
        <p class="font-bold text-white">News</p>
        <p class="font-bold text-white">Careers</p>
        <p class="font-bold text-white">Find a Job</p>
      </div>

      <div class="grid gap-3">
        <p class="font-bold text-yellow-400">MPT Services</p>
        <p class="font-bold text-white">Mobile Services</p>
        <p class="font-bold text-white">Value Added Services</p>
        <p class="font-bold text-white">Fiber Internet</p>
        <p class="font-bold text-white">Other Fixed Services</p>
      </div>

      <div class="">
        <p class="font-bold text-yellow-400">Get Benefits with</p>
        <p class="mt-5 font-bold text-white">MPT4U</p>
        <p class="mt-5 font-bold text-white">MPT Pay</p>
      </div>

      <div class="grid gap-3">
        <p class="font-bold text-yellow-400">Support</p>
        <p class="font-bold text-white">FAQs</p>
        <p class="font-bold text-white">Contact Us</p>
        <p class="font-bold text-white">MPT Shops</p>
        <p class="font-bold text-white">Self-Service Codes</p>
      </div>

    </div>

    <div class="mt-8 px-15">
      <p class="mb-5 text-xl font-bold text-white">Download MPT4U App</p>

      <div class="flex gap-5">
        <img src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/03/23235352/appstore-e1678377674955.webp" alt="">
        <img src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/03/23235352/googleplay-e1678377662337.webp" alt="">
        <img src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/03/23235352/googleplay-e1678377662337.webp" alt="">
        <img src="https://mpt-aws-wp-bucket.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/03/23235352/appgallery-e1678377648433.webp" alt="">
      </div>
    </div>

    <!-- Faded bottom border -->
    <div class="h-px px-5 mx-10 mt-5 bg-gradient-to-r from-white/30 via-white/20 to-white/30"></div>

    <div class="px-10 mt-5">
      <p class="text-white">© 2026 MPT Myanmar</p>
      
      <div class="flex gap-5 mt-2 text-sm">

        <p class="text-white">Terms and Conditions</p>
        <p class="text-white">Privacy Policy</p>

      </div>
      
    </div>

  </div>

</template>
