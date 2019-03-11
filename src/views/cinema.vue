<template>
  <div>
    <el-table
      :data="cinema"
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      size="medium"
    >
      <el-table-column fixed column-key="id" prop="cinema" label="影院" width="240"></el-table-column>
      <el-table-column prop="phone" label="電話" width="260"></el-table-column>
      <el-table-column fixed prop="add" label="地址" width="500"></el-table-column>
      <el-table-column fixed="right" prop="id" label="購票" width="160">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">購票</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //所有影院
      cinema: []
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    handleClick(row) {
      console.log(row.id);
    }
  },
  created: function() {
    this.cinema = this.$store.state.cinema
  }
};
</script>
