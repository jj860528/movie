<template>
  <div id="app" style = "font-family:Microsoft YaHei;"> 
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "app"
}
</script>
<style>
html{
    margin: 0; 
	  padding: 0;
    border: 0;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}
#app{
    /*保证footer是相对于container位置绝对定位*/
    margin: 0; 
	  padding: 0;
    border: 0;
    position:relative;  
    width:100%;
    min-height:100%; 
    /*设置padding-bottom值大于等于footer的height值，以保证main的内容能够全部显示出来而不被footer遮盖；*/  
    padding-bottom: 100px;  
    box-sizing: border-box;
}
</style>
