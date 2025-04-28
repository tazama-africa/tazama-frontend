  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useClipboard } from '@vueuse/core'

  const props = defineProps<{
    playerNo: string
  }>()

  console.log(props.playerNo)

  const open = ref(false)
  const selectedIssue = ref('')
  const reportDetails = ref('')
  const matatuPhoneNumber = ref('+254712345678')
  const { copy, copied } = useClipboard({ source: matatuPhoneNumber })
  const selectedRoute = ref('')
  const phoneNumber = ref('') // New ref for phone number input

  const routes: Record<string, number> = {
    'Nairobi - Thika': 40,
    'Nairobi - Kasarani': 30,
    'Nairobi - Ruiru': 50
  }

  // Function to close modal on backdrop click
  const closeModal = () => {
    open.value = false
  }

  // Function to send data to API
  const payFare = async () => {
    if (!selectedRoute.value || !phoneNumber.value) {
      alert('Please select a route and enter your phone number.')
      return
    }

    alert(selectedRoute.value)

    const payload = {
      fleetNo: props.playerNo,
      plateNo: 'KAV 455W',
      route: selectedRoute.value,
      amount: routes[selectedRoute.value],
      phoneNumber: phoneNumber.value
    }
    console.log(payload)
  }
  </script>

  <template>
    <div class="relative">
      <!-- Open Modal Button -->
      <button @click="open = true" class="flex flex-col">
        <div class="flex items-start border border-green-600 bg-green-800 text-white rounded-full">
          <div class="px-3 py-2 text-xs">Pay Fare</div>
        </div>
      </button>

      <!-- Modal Backdrop & Container -->
      <transition name="fade">
        <div
          v-if="open"
          class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          @click.self="closeModal"
        >
          <!-- Modal Content -->
          <div
            style="background-color: rgb(34, 35, 38)"
            class="rounded-lg shadow-lg p-6 w-full max-w-md relative"
          >
            <!-- Modal Title -->
            <h2 class="text-lg font-semibold text-gray-100">Pay Fare</h2>
            <p class="text-xs text-gray-200 mb-4">Easily Pay and keep track of your payments.</p>

            <!-- Fleet Number -->
            <div class="flex">
              <div class="flex w-2/3">
                <div class="mb-4">
                  <label class="block text-sm text-left font-medium text-gray-200">Fleet No</label>
                  <input
                    type="text"
                    :value="playerNo"
                    readonly
                    class="mt-1 p-2 border text-xs text-gray-200 bg-transparent border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div class="flex flex-col w-1/3">
                <label class="block text-sm text-left font-medium text-gray-200">Plate No</label>
                <div
                  class="mt-1 p-2 border text-center text-xs text-gray-100 bg-transparent border-gray-500 rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  KAV 455W
                </div>
              </div>
            </div>

            <!-- Select Route -->
            <div class="mb-4">
              <label class="block text-sm text-left font-medium text-gray-200">Select Route</label>
              <select
                v-model="selectedRoute"
                class="w-full mt-1 p-2 border text-xs text-gray-200 bg-slate-800 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              >
                <option disabled value="" >Select route..</option>
                <option v-for="(amount, route) in routes" :key="route" :value="route">{{ route }}</option>
              </select>
            </div>

            <!-- Amount -->
            <div class="mb-4">
              <label class="block text-sm text-left font-medium text-gray-200">Amount</label>
              <h2
                class="text-lg mt-1 p-2 rounded-2xl shadow-xl bg-transparent w-12 text-center font-semibold"
              >
                <div v-if="selectedRoute">{{ routes[selectedRoute] }}</div>
                <div v-else>0.00</div>
              </h2>
            </div>

            <!-- Phone Number Input -->
            <div class="mb-4">
              <label class="block text-sm text-left font-medium text-gray-200">Your phone number</label>
              <input
                v-model="phoneNumber"
                type="text"
                placeholder="0722 *** ***"
                class="w-full mt-1 p-2 border text-xs text-gray-200 bg-transparent border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <!-- Buttons -->
            <div class="flex text-sm justify-end mt-4 space-x-2">
              <button
                @click="closeModal"
                class="px-4 py-2 text-xs bg-gray-200 text-gray-800 rounded-full hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                @click="payFare"
                class="px-4 py-2 text-xs font-bold bg-green-600 text-white rounded-full hover:bg-green-700"
              >
                Lipa Fare
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </template>

  <style scoped>
  /* Fade Animation */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>