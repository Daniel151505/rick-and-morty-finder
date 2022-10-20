<template>
  <div class="text-center justify-center align-middle">
    <div class="flex justify-center text-center">
          <img src="../assets/Rick-and-Morty.png" alt="logo-character" class="logo" />
    </div>


    <div class="relative w-full justify-center text-center">  
      <CharacterSearchBar v-model:query="query"/>    
    </div>

    <p class="pt-5 text-3xl font-bold justify-center text-center text-white" v-if="query.name.length < 4">
        Enter minimun 4 characters
    </p>
    <p class="pt-5 text-3xl font-bold justify-center text-center text-white" v-if="query.name.length > 20">
        Enter maximun 20 characters
    </p>
    
    <div v-if="query.name.length > 3 ||  query.name.length < 20">
      <div class=" container mx-auto">
        <div class="flex flex-wrap">
          <CharacterCard
            v-for="character in results"
            :key="character.id"
            :character="character"
          />
        </div>
      </div>
    </div>
    <div v-if="error">
      <p class="pt-5 text-3xl font-bold justify-center text-center text-white">
          Sorry, Don't have any result
      </p>

    </div>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue";
import CharacterSearchBar from "../components/CharacterSearchBar.vue";
import getData from "../composables/getData";
import { APISettings } from "../api/config";
import { watchEffect } from "vue";
import getFilterResults from "../composables/getFilterResults";
export default {
  components: { CharacterCard, CharacterSearchBar },
  setup() {
    const { charactersUrl } = APISettings;
    const { results, info } = getData(charactersUrl);
    const { fetchQuery, query, error } = getFilterResults(
      charactersUrl,
      results,
      info
    );

    watchEffect(fetchQuery);
    return { results, info, query, error};
  },
};
</script>
