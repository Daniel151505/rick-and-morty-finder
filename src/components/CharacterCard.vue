<template>
        <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"> 
        <a class="c-card block shadow-md hover:shadow-xl rounded-lg overflow-hidden" :class="character.status === 'Alive' ? 'bg-green-700' : character.status === 'Dead' ? 'bg-red-700' : character.status === 'unknown' ? 'bg-gray-700': '' ">
          <div class="relative pb-48">
            <img class="absolute inset-0 h-full w-full object-cover" :src="character.image" :alt="character.name">
          </div>
          <div class="p-4 text-white">
            <p class="text-sm">{{ character.status }} - {{ character.species }}</p>
            <h2 class="mt-2 mb-2  font-bold"> {{ character.name }} </h2>
          </div>
          <div class="p-4 border-t border-b text-xs text-white flex flex-col justify-center items-center" >

            <span class="flex items-center text-center content-center mb-1">
             <b>Last Know Location: </b>  {{ character.location.name }}
            </span>
            <span class="flex items-center text-center mb-1">
              <b>First seen in: </b>  {{ character.origin.name }}
            </span>        
            <span class="flex items-center text-center">
              <b>Type: </b> {{ character.type ? character.type : "Secret" }}
            </span>       
          </div>
        </a>
      </div>

</template>

<script>
export default {
  props: ["character"],
};
</script>