<template>
  <div id="app">
    <button @click="onShowComponent('TABLE')">表格 demo</button>
    <br />
    <button @click="onShowComponent('BUTTON')">Button demo</button>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
const ButtonDemo = () => import('./components/ButtonDemo.vue');
const EditTableDemo = () => import('./components/EditTableDemo.vue');
// const AwesomeTableListDemo = () => import('./components/AwesomeTableListDemo.vue');

export default {
  data() {
    return {
      currentComponent: null,
    };
  },
  methods: {
    onShowComponent(componentType) {
      switch (componentType) {
        case 'TABLE':
          this.currentComponent = EditTableDemo;
          break;
        case 'BUTTON':
          this.currentComponent = ButtonDemo;
          break;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
