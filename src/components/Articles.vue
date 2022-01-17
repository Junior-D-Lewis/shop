<template>
  <div id="article">
    <br>
    <p>{{ nom }}</p>
    <br>
    <img :src="src" alt="" />
    <p>{{ description }}</p>
    <p>{{ prix }}£</p>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ["nom", "description", "src", "prix"],
  data() {
    return {};
  },
};
</script>

<style scoped>

#article{
  border: 1px solid transparent;
  box-shadow: 2px 5px 8px #ccc;
  height: 500px;
  width: 90%;
  margin: 20px auto;
  text-align: center;
}
img {
  height: 400px;
  width: 90%;
}

@media (min-width: 699px) {
  .article {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 699px) {
  .article {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>