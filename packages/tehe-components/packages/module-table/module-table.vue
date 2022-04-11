<template>
  <div class="module-table">
    <!-- 表格标题部分 -->
    <fin-row class="header-row" v-if="isModuleTitle">
      <fin-col :span="12" class="module-title">
        <span>{{ title }}</span>
      </fin-col>
      <fin-col align="right" class="right" :span="12">
        <slot name="headerEnd"></slot>
      </fin-col>
    </fin-row>
    <!-- 表格 -->
    <!-- <fin-row class="table-row"> -->
    <fin-table
      :data="tableData"
      v-bind="tableBind"
      @select="select"
      @select-all="selectAll"
      @select-change="selectChange"
      ref="tableExample"
    >
      <template slot="empty">
        <!-- <img style="display: block; margin: auto" :src="emptyUrl" alt="" /> -->
        <span style="display: block; margin: 0 auto 20px; line-height: 20px"
          >暂无数据</span
        >
      </template>
      <!-- <fin-table-column v-if="isSelection" width="65" type="selection"> </fin-table-column>
        <fin-table-column v-if="isIndex" label="序号" width="60" type="index"> </fin-table-column> -->
      <template v-for="(config, i) in columns">
        <fin-table-column
          v-if="config.type == 'index'"
          v-bind="config"
          :key="i"
        >
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </fin-table-column>
        <fin-table-column v-else :key="i + config" v-bind="config">
          <template slot="header">
            <!-- 部分列表头右对齐 -->
            <span :class="alignMode(config)" v-text="config.label" />
          </template>
          <template slot-scope="scope">
            <slot
              v-if="config.slotName"
              :name="config.slotName"
              v-bind="scope"
            />
            <span
              v-else
              v-text="
                config.formatter
                  ? config.formatter(scope.row[config.prop])
                  : scope.row[config.prop]
              "
              :class="config.class"
              :style="{ color: config.color }"
            />
          </template>
        </fin-table-column>
      </template>
    </fin-table>
    <!-- </fin-row> -->
    <fin-row class="table-row" v-if="isPagination">
      <fin-col :span="12">&nbsp;</fin-col>
      <fin-col :span="12">
        <fin-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page.sync="currentPage"
          :page-sizes="pageSizes"
          :page-size.sync="pageSize"
          :total="total"
          v-bind="pageBind"
        >
        </fin-pagination>
      </fin-col>
    </fin-row>
  </div>
</template>
<script>
export default {
  name:'moduleTable',
  props: {
    title: String,
    tableData: {
      type: Array,
      default: () => [],
    },
    columns: {
      // 表格列配置信息
      type: Array,
      default: () => [],
    },
    isSelection: {
      type: Boolean,
      default: true,
    },
    isIndex: {
      type: Boolean,
      default: false,
    },
    isModuleTitle: {
      // 是否展示表格标题部分
      type: Boolean,
      default: false,
    },
    isPagination: {
      // 是否展示分页
      type: Boolean,
      default: true,
    },
    currentPage: {
      // 第几页
      type: Number,
      default: 1,
    },
    pageSizes: {
      // 每页显示个数选择器的选项设置
      type: Array,
      default: () => [5, 10, 20, 30, 40],
    },
    pageSize: {
      // 每页显示条目个数
      type: Number,
      default: 10,
    },
    total: {
      // 总条目数
      type: Number,
      default: 0,
    },
    tableBind: {
      // 表格bind
      type: Object,
      default: () => {},
    },
    pageBind: {
      // 分页bind
      type: Object,
      default: () => ({
        layout: "sizes, prev, pager, next",
        align: "right",
      }),
    },
  },
  data() {
    return {
      // emptyUrl: require("@/assets/data-null.png"),
      tableExample: {},
    };
  },
  mounted() {
    this.tableExample = this.$refs.tableExample;
    console.log(this.$refs.tableExample, "  this.$refs.tableExample");
  },
  methods: {
    alignMode({ align, sortable }) {
      if (align === "right" && !sortable) {
        return "header-align-right";
      }
      if (align === "right" && sortable) {
        return "header-align-right-sortable";
      }
      return "";
    },
    sizeChange(val) {
      this.updateInfo();
      this.$nextTick(() => {
        this.$emit("size-change", val);
      });
    },
    currentChange(val) {
      this.updateInfo();
      this.$nextTick(() => {
        this.$emit("current-change", val);
      });
    },
    updateInfo() {
      this.$emit("update:currentPage", this.currentPage);
      this.$emit("update:pageSize", this.pageSize);
    },
    select(selection, row) {
      this.$emit("select", selection, row);
    },
    selectAll(selection) {
      this.$emit("select-all", selection);
    },
    selectChange(selection) {
      this.$emit("select-change", selection);
    },
  },
};
</script>
<style lang="less" scoped>
.module-table {
  overflow: hidden;
  background: #fff;
  padding-top: 16px;
  .module-title {
    margin-bottom: 0;
  }
  .table-row {
    padding: 16px;
  }
  .right {
    padding: 0 20px 0 0;
  }
  /deep/ .fin-table th {
    background: #e8eaf0;
  }
  /deep/.fin-table__header-wrapper {
    th {
      background: #e8eaf0;
      font-weight: bold;
    }
  }
  .align-right {
    display: inline-block;
    width: 100%;
    text-align: right;
  }
  /deep/.cell {
    min-height: 16.8px;
  }
  .header-align-right-sortable {
    position: absolute;
    right: 30px;
  }
  .header-align-right {
    position: absolute;
    right: 16px;
  }
}
</style>
