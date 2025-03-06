<template>
    <div
      class="py-40 px-2 w-full lg:h-screen h-auto flex flex-col items-center bg-gradient-to-l from-yellow-50 to-yellow-400 via-yellow-400 lg:justify-center lg:py-20 lg:pt-40 lg:mb-0 mb-0"
    >
      <div class="carousel-slide h-20 w-full flex-shrink-0">
       
        <h2 class="text-center lg:text-4xl text-2xl pb-1 font-bold text-gray-800 mb-2 border-b border-red-500 w-full ">
          Advertise with Us
        </h2>
      </div>
      <div class="flex lg:flex-row-reverse flex-col  gap-10">
        <div class="flex lg:w-1/2">
          <div class="flex relative">
            <!-- Circle Background -->
            <div class="flex b items-center text-left justify-center">
              <div class="w-full mx-2 rounded-full">
                <div class="text-left space-y-6">
                  <div class='flex items-center justify-center flex-col'>
                    <h2 class="font-bold text-orange-600 lg:text-xl text-lg">
                      Get In Touch
                    </h2>
                    <div class="bg-orange-600 h-1 w-40 rounded-full"></div>
                  </div>

                  <p class="text-gray-800 text-sm">
                    Write us a message and we will get back to you in under 2 hours!
                  </p>

                  <form class="max-w-md mx-auto">
                    <div class="grid md:grid-cols-2 md:gap-6">
                      <div class="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white  dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_first_name"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >Company</label
                        >
                      </div>
                      <div class="relative z-0 w-full mb-5 group">
                        <input
                          type="text"
                          name="floating_last_name"
                          id="floating_last_name"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white  dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_last_name"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >Full name</label
                        >
                      </div>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white  dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Email address</label
                      >
                    </div>

                    <div class="grid md:grid-cols-2 w-full md:gap-6">
                      <div class="relative z-0 w-full mb-5 group">
                        <input
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          name="floating_phone"
                          id="floating_phone"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-orange-500 appearance-none dark:text-white  dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          for="floating_phone"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >Phone number</label
                        >
                      </div>
                      
                    </div>
                    <button
                      type="submit"
                      class="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 lg:block hidden relative">
          <!-- Image -->
          <div class=" ">
            <img
              src="https://img.freepik.com/free-photo/high-angle-smiley-male-with-sunglasses_23-2148467280.jpg"
              alt="Landing"
              class="  max-h-[160vh]  rounded-xl mt-5 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>