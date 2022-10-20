const { ref } = require("vue");

const getData = (url) => {
  const results = ref([]);
  const info = ref([]);
  let load
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Sorry, this page is not available");
      const data = await response.json();
      results.value = data.results;
      info.value = data.info;
    } catch (error) {
      console.error(error.message);
    }
  };

  return { results, info, load, fetchData };
};

export default getData;
