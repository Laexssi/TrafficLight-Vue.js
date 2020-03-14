import TrafficLight from "./components/TrafficLight.vue";

export default [
  {
    path: "/red",
    name: "red",
    props: {
      color: "red",
      duration: 10
    },
    component: TrafficLight
  },
  {
    path: "/yellow",
    name: "yellow",
    props: {
      color: "yellow",
      duration: 3
    },
    component: TrafficLight
  },
  {
    path: "/green",
    name: "green",
    props: {
      color: "green",
      duration: 15
    },
    component: TrafficLight
  },
  {
    path: "/",
    redirect: "/red"
  }
];
