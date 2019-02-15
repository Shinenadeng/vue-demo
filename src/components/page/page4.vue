<template>
    <el-row :gutter="20">
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple">

                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期"  :picker-options="pickerOptions1">
                    </el-date-picker>
                </div>
            </div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
           <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>2018年1</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
 <table cellspacing="0" cellpadding="0">
 	<tr>
 		<th v-for="(item,index) in weeks" :key="item.id">{{item.zh}}</th>
 	</tr>
 	<template  v-for=" i in 6">
 		<tr>
 <td>1</td>
 <td>2</td>
 <td>3</td>
 <td>4</td>
 <td>5</td>
 <td>6</td>
 <td>7</td>
 	</tr>
 	</template>
 	
 </table>
</el-card>
        </el-col>
    </el-row>

</template>
<script>
    export default {
        data() {
            return {
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                value1: '',
                value2: '',
                 weeks: [
          { id: '7', en: 'seven', zh: '日', checked: false, checkedNum: 0, checkedLen: 0 },
          { id: '1', en: 'one', zh: '一', checked: false, checkedNum: 0, checkedLen: 0 },
          { id: '2', en: 'two', zh: '二', checked: false, checkedNum: 0, checkedLen: 0 },
          { id: '3', en: 'three', zh: '三', checked: false, checkedNum: 0, checkedLen: 0 },
          { id: '4', en: 'four', zh: '四', checked: false, checkedNum: 0, checkedLen: 0 },
          { id: '5', en: 'five', zh: '五', checked: false, checkedNum: 0, checkedLen: 0 },
          { id: '6', en: 'six', zh: '六', checked: false, checkedNum: 0, checkedLen: 0 }
        ],
        days:[]
            };
        }
        ,mounted(){

        }
    };
</script>
<style>
	.el-picker-panel.el-date-picker.el-popper{
		display: inline-block;
	}
</style>