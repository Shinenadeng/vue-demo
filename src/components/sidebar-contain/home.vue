<template>
	<el-container>
<el-header>Header</el-header>
  <el-container>
    <vAside></vAside>
    <el-main>
   <router-view/>
 </el-main>
  </el-container>

 <el-footer>footer</el-footer>
</el-container>

</template>
<style>
.el-header,{
  /*position: fixed;*/
}
</style>
<script>
// import vHeader from './header.vue'
import vAside from './sidebar.vue'
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
  }
  .el-footer{
    position:fixed;
    bottom:0;
    width:100%;
  }
  </style>