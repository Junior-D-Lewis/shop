<template>
  <div id="header">
    <nav>
      <router-link class="logo" to="/"> SHOP </router-link>
      <ul>
        <li><input type="search" name="search" id="" placeholder="search" /></li>
        <li>
            <select name="categorie" id="1">
                <option value="" selected>all</option>
                <option value="">shoes</option>
                <option value="">short</option>
                <option value="">T-shirt</option>
            </select>
        </li>
        <li>
            <router-link to="/basket"><fa icon="shopping-cart" /></router-link>
        </li>
        <li>
          <router-link to="/mySpace" ><fa icon="user" /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped>
:root {
  --primary: aqua;
  --h2Size: 15px;
}

#header {
  background-color: rgba(0, 0, 0, 0.822);
}
.logo
{
  text-decoration: none;
  font-size: 2em;
}
nav {
  padding: 25px;
  display: grid;
  grid-template-columns: 60% 40%;
}

nav ul li {
  margin-left: 5%;
  display: inline-block;
  text-decoration: none;
}
input, select {
  padding: 13px;

}
a{
    font-size: 140%;
    color: white;
}


</style>>