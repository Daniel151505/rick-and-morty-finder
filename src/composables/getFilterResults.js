import { ref } from "vue";
const getFilterResults = (url, results, info) => {
  const query = ref({ name: "", status: "" })
  const error = ref(false);
  const fetchQuery = async () => {
    try {
      if (query.value.name.length > 3) {
        error.value = false;
        const response = await fetch(
          url +
            "?name=" +
            query.value.name +
            "&status=" +
            query.value.status
        );
        if (!response.ok) throw Error("Is not found");
        const data = await response.json();

        results.value = data.results;
        info.value = data.info;
      } else {
        return;
      }
    } catch (e) {
      error.value = true;
      results.value = [];
      info.value = {};
      console.error(e.message);
    }
  };
  return { fetchQuery, query, results, error};
};

export default getFilterResults;
