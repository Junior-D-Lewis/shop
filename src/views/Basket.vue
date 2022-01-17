<template>
  <div id="basket">
      <fieldset>
        <legend> YOUR BASKET </legend>
        <ul v-for="element in elements" :key="element">
          <li> {{element}} </li>
        </ul>
        <br><br>
        <h1> Total à payer : {{total}} Euro(s)</h1>
      </fieldset>
  </div>
</template>

<script>
export default {
    name: 'Basket',
    data() {
      return {
        total: 0,
        elements : [
          "element 1",
          "element 5",
          "element 4",
          "element 2",
          "element 3",
          "element 6",
        ]
      } 
    }
}
</script>

<style scoped>
fieldset
{
  border: 2px dashed black;
  padding: 25px;
  margin: 50px 30px;
}
legend 
{
  font-size: 1.5em;
  text-align: center;
  width: 80%;
  margin: auto;
  background-color: black;
  color: white;
  padding: 30px;
}
</style>