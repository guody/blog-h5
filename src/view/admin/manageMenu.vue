<template>
    <div class="menu-box">
        <el-button type="primary" style="margin-bottom:40px;" icon="el-icon-plus">添加一级菜单</el-button>
        <el-table
            :data="menuList"
            border
            stripe
            style="width: 70%;height:100%;">
            <el-table-column
            prop="id"
            label="菜单ID"
            width="180">
            </el-table-column>            
            <el-table-column
            prop="menuName"
            label="菜单名称"
            width="180">
            </el-table-column>
            <el-table-column
            prop="sortNo"
            label="排序"
            width="100">
            </el-table-column>
            <el-table-column
            prop="routeName"
            label="路由名称"
            width="180">
            </el-table-column>           
            <el-table-column
            prop="opera"
            label="操作">
                <template slot-scope="scope">
                <el-button
                size="small"
                type="warning"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="small"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">新增</el-button>
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>        
    </div>    
</template>
<script>
export default {
    data(){
        return{
            menuList:[]
        }
    },
    created(){
        this.getMenuList();
    },
    methods:{
        // 获取文章菜单
       async getMenuList(){
          var menuData = await $api.findAllMenu();
          if(menuData.code=='0' && menuData.data){
              console.log(menuData)
              this.menuList = menuData.data 
          }
        }       
    }
}
</script>
<style lang="scss" scoped>
</style>


