<template>
  <div
    id="about"
    class="relative h-screen min-h-min w-full overflow-hidden bg-gradient-to-br max-sm:from-gray-50 from-[#fbfbfb] via-gray-50 to-gray-300 py-16"
  >
    <!-- Decorative Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Top decoration -->
      <svg
        class="absolute right-0 top-0 h-full w-1/2"
        viewBox="0 0 500 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="grad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style="stop-color:#14b8a6;stop-opacity:0.05"
            />
            <stop
              offset="100%"
              style="stop-color:#14b8a6;stop-opacity:0.1"
            />
          </linearGradient>
        </defs>

        <path
          d="M250,0 L500,0 L500,180 C400,150 300,140 250,0"
          fill="url(#grad1)"
        />
        <path
          d="M300,0 L500,0 L500,140 C420,120 350,100 300,0"
          fill="#14b8a6"
          fill-opacity="0.03"
        />

        <circle
          cx="450"
          cy="50"
          r="3"
          fill="#14b8a6"
          fill-opacity="0.1"
        />
        <circle
          cx="470"
          cy="70"
          r="2"
          fill="#14b8a6"
          fill-opacity="0.1"
        />
        <circle
          cx="430"
          cy="40"
          r="2"
          fill="#14b8a6"
          fill-opacity="0.1"
        />
      </svg>

      <!-- Bottom wave -->
      <svg
        class="absolute bottom-0 left-0 h-[200px] w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#14b8a6"
          fill-opacity="0.05"
          d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,112C672,139,768,181,864,176C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto md:max-w-xl lg:max-w-4xl px-6 ">
      <!-- Section Title -->
      <div class="flex items-center justify-start gap-2">
        <div class="h-7 w-[2.5px] rounded-md bg-teal-500" />
        <h2 class="font-VarelaRound text-3xl font-bold text-gray-800">
          About Me
        </h2>
      </div>

      <!-- Main Content -->
      <div class="mt-8 flex gap-8 justify-center items-center flex-wrap">
          <!-- Left Side Content -->
          <div class="space-y-6">
            <p class="leading-relaxed text-gray-600">
              I'm a lifelong learner and problem solver who thrives on tackling complex challenges in
              web development. With a strong foundation in <strong>Ruby on Rails</strong> and <strong>Vue.js</strong>, I create elegant,
              maintainable solutions that make a real impact.
            </p>
            <p class="leading-relaxed text-gray-600">
              When I'm not coding, you'll find me cheering at live sporting events, learning from the developer communities, and exploring new technologies. I enjoy helping others when I can, as I believe we grow better together.
            </p>
          </div>

          <!-- Right Side Content -->
        <div class="flex justify-center items-stretch gap-4 flex-wrap">
              <div class=" rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur w-[45%]">
                <div class="text-2xl font-bold text-teal-600">
                  2+ Years
                </div>
                <div class="text-sm text-gray-500">
                  Experience
                </div>
              </div>
              <div class="rounded-lg bg-[#fff]/90  p-4 shadow-sm backdrop-blur w-[45%] ">
                <div class="text-2xl font-bold text-teal-600">
                  Fu<span class="relative font-bold text-red-400/85">ll
                <span class="absolute left-[33%] top-1/2 size-[2px] bg-red-400/90" />
                <span class="absolute left-[33%] top-[38%] size-[2px] bg-red-400/90" />
                <span class="absolute left-[33%] top-2/3 size-[2px] bg-red-400/90" />
              </span> Stack
                </div>
                <div class="text-sm text-gray-500">
                  Developer
                </div>
              </div>
              <div class="rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur w-[45%]">
                <div class="text-2xl font-bold text-teal-600">
                  Problem
                </div>
                <div class="text-sm text-gray-500">
                  Solver
                </div>
              </div>
              <div class="rounded-lg bg-[#fff]/90 p-4 shadow-sm backdrop-blur w-[45%]">
                <div class="text-2xl font-bold text-teal-600">
                  Team
                </div>
                <div class="text-sm text-gray-500">
                  Player
                </div>
              </div>
          </div>
        </div>

      <!-- Skills Section -->
      <div class="mt-12">
        <h3 class="mb-6 text-xl font-semibold text-gray-800 text-center sm:text-left">
          Technical Skills
        </h3>
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <!-- Rails -->
          <div
            class="group flex items-center space-x-3 rounded-lg bg-[#fff7f7]/85 p-3 shadow-sm backdrop-blur transition-all hover:shadow-md"
          >
            <div class="flex size-10 items-center justify-center rounded-lg bg-red-50">
              <svg
                viewBox="0 0 24 24"
                class="size-6 text-red-600"
              >
                <!-- Ruby logo path (simplified) -->
                <path
                  fill="currentColor"
                  d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h-.016c.109-3.82 5.588-6.574 5.588-6.574l-2.557-7.902 9.285-1.354"
                />
              </svg>
            </div>
            <div>
              <div class="font-medium text-gray-900">
                Ruby on Rails
              </div>
              <div class="text-sm text-gray-500">
                Backend
              </div>
            </div>
          </div>

          <!-- Vue.js -->
          <div
            class=" group flex items-center space-x-3 rounded-lg bg-[#f9fff9]/80 p-3 shadow-sm backdrop-blur transition-all hover:shadow-md"
          >
            0
            <div class="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
              <svg
                viewBox="0 0 24 24"
                class="size-6 text-emerald-600"
              >
                <!-- Vue.js logo path -->
                <path
                  fill="currentColor"
                  d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                />
              </svg>
            </div>
            <div>
              <div class="font-medium text-gray-900">
                Vue.js
              </div>
              <div class="text-sm text-gray-500">
                Frontend
              </div>
            </div>
          </div>

          <!-- TypeScript -->
          <div
            class="group flex items-center space-x-3 rounded-lg bg-[#f5f5ff]/80 p-3 shadow-sm backdrop-blur transition-all hover:shadow-md"
          >
            <div class="flex size-10 items-center justify-center rounded-lg bg-blue-50">
              <svg
                viewBox="0 0 24 24"
                class="size-6 text-blue-600"
              >
                <!-- TypeScript logo path (simplified) -->
                <path
                  fill="currentColor"
                  d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"
                />
              </svg>
            </div>
            <div>
              <div class="font-medium text-gray-900">
                TypeScript
              </div>
              <div class="text-sm text-gray-500">
                Language
              </div>
            </div>
          </div>

          <!-- PostgreSQL -->
          <div
            class="group flex items-center space-x-3 rounded-lg bg-[#f5fefe]/80 p-3 shadow-sm backdrop-blur transition-all hover:shadow-md"
          >
            <div class="flex size-10 items-center justify-center rounded-lg bg-indigo-50">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 432.071 445.383"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="orginal"
                  style="fill-rule:nonzero;clip-rule:nonzero;stroke:#000000;stroke-miterlimit:4;"
                />
                <g
                  id="Layer_x0020_3"
                  style="fill-rule:nonzero;clip-rule:nonzero;fill:none;stroke:#FFFFFF;stroke-width:12.4651;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;"
                >
                  <path
                    style="fill:#000000;stroke:#000000;stroke-width:37.3953;stroke-linecap:butt;stroke-linejoin:miter;"
                    d="M323.205,324.227c2.833-23.601,1.984-27.062,19.563-23.239l4.463,0.392c13.517,0.615,31.199-2.174,41.587-7c22.362-10.376,35.622-27.7,13.572-23.148c-50.297,10.376-53.755-6.655-53.755-6.655c53.111-78.803,75.313-178.836,56.149-203.322    C352.514-5.534,262.036,26.049,260.522,26.869l-0.482,0.089c-9.938-2.062-21.06-3.294-33.554-3.496c-22.761-0.374-40.032,5.967-53.133,15.904c0,0-161.408-66.498-153.899,83.628c1.597,31.936,45.777,241.655,98.47,178.31    c19.259-23.163,37.871-42.748,37.871-42.748c9.242,6.14,20.307,9.272,31.912,8.147l0.897-0.765c-0.281,2.876-0.157,5.689,0.359,9.019c-13.572,15.167-9.584,17.83-36.723,23.416c-27.457,5.659-11.326,15.734-0.797,18.367c12.768,3.193,42.305,7.716,62.268-20.224    l-0.795,3.188c5.325,4.26,4.965,30.619,5.72,49.452c0.756,18.834,2.017,36.409,5.856,46.771c3.839,10.36,8.369,37.05,44.036,29.406c29.809-6.388,52.6-15.582,54.677-101.107"
                  />
                  <path
                    style="fill:#336791;stroke:none;"
                    d="M402.395,271.23c-50.302,10.376-53.76-6.655-53.76-6.655c53.111-78.808,75.313-178.843,56.153-203.326c-52.27-66.785-142.752-35.2-144.262-34.38l-0.486,0.087c-9.938-2.063-21.06-3.292-33.56-3.496c-22.761-0.373-40.026,5.967-53.127,15.902    c0,0-161.411-66.495-153.904,83.63c1.597,31.938,45.776,241.657,98.471,178.312c19.26-23.163,37.869-42.748,37.869-42.748c9.243,6.14,20.308,9.272,31.908,8.147l0.901-0.765c-0.28,2.876-0.152,5.689,0.361,9.019c-13.575,15.167-9.586,17.83-36.723,23.416    c-27.459,5.659-11.328,15.734-0.796,18.367c12.768,3.193,42.307,7.716,62.266-20.224l-0.796,3.188c5.319,4.26,9.054,27.711,8.428,48.969c-0.626,21.259-1.044,35.854,3.147,47.254c4.191,11.4,8.368,37.05,44.042,29.406c29.809-6.388,45.256-22.942,47.405-50.555    c1.525-19.631,4.976-16.729,5.194-34.28l2.768-8.309c3.192-26.611,0.507-35.196,18.872-31.203l4.463,0.392c13.517,0.615,31.208-2.174,41.591-7c22.358-10.376,35.618-27.7,13.573-23.148z"
                  />
                  <path d="M215.866,286.484c-1.385,49.516,0.348,99.377,5.193,111.495c4.848,12.118,15.223,35.688,50.9,28.045c29.806-6.39,40.651-18.756,45.357-46.051c3.466-20.082,10.148-75.854,11.005-87.281" />
                  <path d="M173.104,38.256c0,0-161.521-66.016-154.012,84.109c1.597,31.938,45.779,241.664,98.473,178.316c19.256-23.166,36.671-41.335,36.671-41.335" />
                  <path d="M260.349,26.207c-5.591,1.753,89.848-34.889,144.087,34.417c19.159,24.484-3.043,124.519-56.153,203.329" />
                  <path
                    style="stroke-linejoin:bevel;"
                    d="M348.282,263.953c0,0,3.461,17.036,53.764,6.653c22.04-4.552,8.776,12.774-13.577,23.155c-18.345,8.514-59.474,10.696-60.146-1.069c-1.729-30.355,21.647-21.133,19.96-28.739c-1.525-6.85-11.979-13.573-18.894-30.338    c-6.037-14.633-82.796-126.849,21.287-110.183c3.813-0.789-27.146-99.002-124.553-100.599c-97.385-1.597-94.19,119.762-94.19,119.762"
                  />
                  <path d="M188.604,274.334c-13.577,15.166-9.584,17.829-36.723,23.417c-27.459,5.66-11.326,15.733-0.797,18.365c12.768,3.195,42.307,7.718,62.266-20.229c6.078-8.509-0.036-22.086-8.385-25.547c-4.034-1.671-9.428-3.765-16.361,3.994z" />
                  <path d="M187.715,274.069c-1.368-8.917,2.93-19.528,7.536-31.942c6.922-18.626,22.893-37.255,10.117-96.339c-9.523-44.029-73.396-9.163-73.436-3.193c-0.039,5.968,2.889,30.26-1.067,58.548c-5.162,36.913,23.488,68.132,56.479,64.938" />
                  <path
                    style="fill:#FFFFFF;stroke-width:4.155;stroke-linecap:butt;stroke-linejoin:miter;"
                    d="M172.517,141.7c-0.288,2.039,3.733,7.48,8.976,8.207c5.234,0.73,9.714-3.522,9.998-5.559c0.284-2.039-3.732-4.285-8.977-5.015c-5.237-0.731-9.719,0.333-9.996,2.367z"
                  />
                  <path
                    style="fill:#FFFFFF;stroke-width:2.0775;stroke-linecap:butt;stroke-linejoin:miter;"
                    d="M331.941,137.543c0.284,2.039-3.732,7.48-8.976,8.207c-5.238,0.73-9.718-3.522-10.005-5.559c-0.277-2.039,3.74-4.285,8.979-5.015c5.239-0.73,9.718,0.333,10.002,2.368z"
                  />
                  <path d="M350.676,123.432c0.863,15.994-3.445,26.888-3.988,43.914c-0.804,24.748,11.799,53.074-7.191,81.435" />
                  <path
                    style="stroke-width:3;"
                    d="M0,60.232"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div class="font-medium text-gray-900">
                PostgreSQL
              </div>
              <div class="text-sm text-gray-500">
                Database
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Development Principles Section -->
      <div class="mt-20">
        <h3 class="mb-6 text-xl font-semibold text-gray-800 text-center sm:text-left">
          Development Principles
        </h3>
        <div class="grid gap-6 md:grid-cols-3">
          <principle-card title="Clean Code" icon-name="lightning" description="Writing maintainable, well-documented code that stads the test of time" icon-color="#0d9488" icon-bg-color="#f0fdfa"></principle-card>

          <principle-card title="Problem Solving" icon-name="setting" description="Breaking down complex challenges into manageable solutions." icon-color="#e11d48" icon-bg-color="#fff1f288"></principle-card>

          <principle-card title="Continuous Learning" icon-name="clock" description="Staying current with best practices and emerging technologies." icon-color="#2563eb" icon-bg-color="#dbeafe88"></principle-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseIcon from '@/components/base/BaseIcon.vue'
import PrincipleCard from '@/components/sections/PrincipleCard.vue'
</script>
