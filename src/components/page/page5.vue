<template>
<el-collapse v-model="activeName" accordion v-if="articles.length">

<template v-for="item in articles">
<el-collapse-item title="可控 Controllability" name="item.index">
  	<img :src="item.thumbnail_pic_s">
    <div>{{item.author_name}}</div>
    <div>{{item.date}}</div>
  </el-collapse-item>
  </template>  
</el-collapse>
</template>
<style>
 .img{
	width: 100px;
	height: 100px;
}
</style>
<script>
import api from './../../axios/api.js'

  export default {
    data() {
      return {
        activeName: '1',
        articles :[]
      };
    }
    ,created(){
    	console.log("page5")
    	this.getdata()
 api.JH_news('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res);
        this.articles = res.articles;
      });
    
    },methods:{
getdata(){
	console.log(1);
}
    }
  }
</script>
