<template>
  <div class="flex-block gap-5 justify-center" >
      <div class=" items-center">
        <div class="block mb-5">
          <input 
            id="search"
            type="text"
            v-model="compQuery.name"
            placeholder="Enter the name"
            class="text-2xl font-bold rounded border-2 border-gray-400 text-gray-600 h-14 w-100 p-5 pr-10 bg-white hover:border-[#6CD55A] focus:outline-none appearance-none" />
        </div>
      </div>

    <div class="" v-if="query.name.length > 3">
      <div class="relative inline-flex self-center">
        <svg class="text-white bg-[#6CD55A] absolute top-0 right-0 m-2 pointer-events-none p-2 rounded" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 38 22" version="1.1">
              <g id="ZahnhelferDE—Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="ZahnhelferDE–Icon&amp;Asset-Download" transform="translate(-539.000000, -199.000000)" fill="#ffffff" fill-rule="nonzero">
                      <g id="Icon-/-ArrowRight-Copy-2" transform="translate(538.000000, 183.521208)">
                          <polygon id="Path-Copy" transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) " points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"/>
                      </g>
                  </g>
              </g>
          </svg>
        <select
          id="status"
          v-model="compQuery.status" 
          placeholder="Status"
          class="text-2xl font-bold rounded border-2 border-gray-400 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-[#6CD55A] focus:outline-none appearance-none">
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  </div>
</template>



<script>
    export default {
      props: {
            query: String
      },
      computed: {
        compQuery: {
          get () { return this.query },
          set (value) { this.$emit('update:query', value) },
        },
      },
    };
    </script>