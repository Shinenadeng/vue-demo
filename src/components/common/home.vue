<template>
	<el-container>
<el-header>Header</el-header>
<vAside></vAside>
 <!-- <el-main> -->
   <router-view/>
 <!-- </el-main> -->
 <el-footer>footer</el-footer>
</el-container>

</template>
<script>
// import vHeader from './header.vue'
import vAside from './aside.vue'
	 export default {
     components:{vAside}
	 }
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }</style>