<template>
  <div class="trafficlight">
    <light
      v-for="color in colors"
      :key="color"
      :class="color"
      :time="time"
      :active="color === currentColor"
    />
  </div>
</template>

<script>
import Light from "./Light.vue";
export default {
  name: "TrafficLight",
  components: {
    Light
  },
  data: function() {
    return {
      colors: ["red", "yellow", "green"],
      currentColor: "red",
      isAscending: false,
      time: 0
    };
  },
  props: {
    color: String,
    duration: Number
  },
  created: function() {
    this.time = +localStorage.getItem("time") || this.duration;
    this.startTimer();
    this.currentColor = this.$route.name;
    this.isAscending = JSON.parse(localStorage.getItem("flag")) || false;
  },
  watch: {
    $route: function() {
      this.time = this.duration;
      //for manual changes in browser's adress line
      this.currentColor = this.$route.name;
    }
  },

  methods: {
    startTimer() {
      setInterval(this.countDown, 1000);
    },
    countDown() {
      this.time--;
      localStorage.setItem("time", this.time);
      if (this.time === 0) {
        this.setNextColor(this.currentColor);
        this.$router.push(this.currentColor);
      }
    },
    setNextColor(currentColor) {
      if (this.currentColor === "red") this.isAscending = false;
      if (this.currentColor === "green") this.isAscending = true;
      localStorage.setItem("flag", this.isAscending);
      const nextColor = (color, flag) => {
        switch (color) {
          case "green":
            return "yellow";
          case "red":
            return "yellow";
          case "yellow":
            return flag ? "red" : "green";
        }
      };
      this.currentColor = nextColor(currentColor, this.isAscending);
    }
  }
};
</script>

<style>
.trafficlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border: 5px solid rgb(24, 23, 23);
  width: 100px;
  margin: 0 auto;
  border-radius: 25px;
  background-color: rgb(24, 23, 23);
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}
</style>
