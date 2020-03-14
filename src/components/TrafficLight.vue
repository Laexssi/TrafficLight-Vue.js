<template>
  <div class="trafficlight">
    <Light v-for="color in colors" :key="color" :class="color" :time="time" :active="color === currentColor"/>
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
    color: {
      type: String
    },
    duration: {
      type: Number
    }
  },
  created: function() {
    this.time = this.duration;
    this.startTimer();
    this.currentColor = this.$route.name;
  },
computed: {
  isOn() {
    return this
  }
},
  watch: {
    $route: function() {
      this.time = this.duration;
    }
  },

  methods: {
    startTimer() {
      const timerId = setInterval(this.countDown, 1000);
    },
    countDown() {
      this.time--;
      console.log(this.currentColor);
      if (this.time === 0) {
        this.setNextColor(this.currentColor);
        this.$router.push(this.currentColor);
      }
    },
    setNextColor(currentColor) {
      if (this.currentColor === "red") this.isAscending = false;
      if (this.currentColor === "green") this.isAscending = true;
      const nextAscendingColor = color => {
        switch (color) {
          case "green":
            return "yellow";
          case "yellow":
            return "red";
        }
      };
      const nextDescendingColor = color => {
        switch (color) {
          case "red":
            return "yellow";
          case "yellow":
            return "green";
        }
      };
      
      this.currentColor = this.isAscending
        ? nextAscendingColor(currentColor)
        : nextDescendingColor(currentColor);
    }
  }
};
</script>

<style>
.trafficlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border: 5px solid black;
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