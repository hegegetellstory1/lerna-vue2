import moduleTable from "./module-table.vue";
moduleTable.install =function (Vue) {
  Vue.component(moduleTable.name,moduleTable)
}
export default moduleTable;