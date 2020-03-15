<template>
  <div
    class="light"
    v-bind:class="[active ? 'active' : '', time <= 3 && active ? 'blink' : '']"
  >
    <span v-if="active" class="time">{{ time }}</span>
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
  margin-bottom: 50px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  opacity: 0.2;
}

.light:nth-last-of-type(1) {
  margin-bottom: 0px;
}

.time {
  display: block;
  align-self: center;
  margin: 0 auto;
  font-size: 32px;
}

.active {
  opacity: 1;
}

.blink {
  animation: 1s blink infinite linear;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
