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
      <!-- <p>Mobile & Frontend developer</p> -->
      <div class="about-content">
        <p id="paragraph-1">
          <span id="whoami">I'M A MOBILE DEVELOPER</span> from Canada who is
          very passionate about programming and problem solving, and making new
          things.<br />
          Highly determmine to accompllish a giving task and is willing to go the extra mile to achieve nothing less than Excellent.
        </p>
        <p id="paragraph-2">
          Driven and motivated to keep learning new things to stay up to date so my skills remain relevant.<br />
          Well-organise, motivated and eager to always improve where possible.
        </p>
      </div>
    </div>
    <!-- <img id="about-img" src="/images/about/about-img.png" /> -->
  </div>
</template>

<style lang="scss" scoped>
#about-container {
  display: flex;
  // justify-content: space-between;
  align-self: center;
  // align-items: flex-start;
  width: 80%;
  margin: 0 20px 0 50px;

  #about-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    margin-right: 20px;

    #about-label {
      margin: 0 0 20px 0;
      text-align: left;
      font-size: 4.1em;
      font-weight: bold;
      color: var(--primary-color);
    }

    .about-content {
      display: flex;
      width: 100%;
      text-align: left;
      margin-left: 3px;

      #paragraph-1 {
        margin-right: 10px;
        color: var(--primary-color);

        #whoami {
          font-weight: 700;
          font-size: 1.2em;
        }
      }

      #paragraph-2 {
        margin-left: 10px;
        color: var(--primary-color);
      }

      #paragraph-1,
      #paragraph-2 {
        width: 50%;
        font-size: 1.1em;
      }
    }
  }

  #about-img {
    max-height: 100%;
  }
}
</style>
