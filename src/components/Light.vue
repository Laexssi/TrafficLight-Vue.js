<template>
  <div class="light" v-bind:class="active? 'active':''">
    <span v-if="active" class="time"  >{{time}}</span>
  </div>
</template>

<script>
export default {
  name: "Light",
  props: {
    time: Number,
    active: Boolean
  }
};
</script>

<style>
.light {
  display: flex;
  margin-bottom: 100px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 5px solid black;
  opacity: 0.2;
}

.light:nth-last-of-type(1) {
  margin-bottom: 0px;
}

.time {
  display: block;
  align-self: center;
  margin: 0 auto;
  font-size: 64px;
}

.active {
  opacity: 1;
}
</style>