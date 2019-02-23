<template>
  <div>
    <!--用2個迴圈循環出影院-->
    <div v-for="row in seatRow" :key="row">
      <div v-for="col in seatCol" :key="col"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seatRow: 10,
      seatCol: 20
    };
  }
};
</script>
