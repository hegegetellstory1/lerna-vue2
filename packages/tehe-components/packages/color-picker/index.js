import colorPicker from "./color-picker.vue";

colorPicker.install = function (Vue) {
  Vue.component(colorPicker.name, colorPicker);
}


export default colorPicker;