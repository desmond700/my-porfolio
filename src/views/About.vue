<script>
export default {
  name: "AboutItem",
};
</script>
<script setup lang="ts"></script>

<template>
  <div id="about-container">
    <div id="about-info">
      <p id="about-label">Hi, I'm Desmond</p>
      <p id="about-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nulla
        itaque! Autem natus cumque eaque, eos ab quisquam quam fugit vero quas
        recusandae maiores dolore. Delectus, ullam nobis non illo dolorem
        nesciunt quis suscipit commodi dignissimos adipisci laudantium
        consequuntur numquam, earum nisi. Iste id repudiandae vero, dignissimos
        earum ipsam vitae?
      </p>
    </div>
    <img id="about-img" src="/images/about/about-img.png" />
  </div>
</template>

<style lang="scss" scoped>
#about-container {
  display: flex;
  // align-items: flex-start;
  // width: 80%;
  margin: 100px 0 30px 0;

  #about-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    #about-label {
      margin: 0 0 20px 0;
      font-size: 3.2em;
      font-weight: bold;
      color: var(--primary-color);
    }

    #about-content {
      text-align: left;
    }
  }

  #about-img {
  }
}
</style>
