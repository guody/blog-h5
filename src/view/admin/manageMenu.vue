<template>
    <div class="menu-box">
        <el-button @click="createFirstMenu" type="primary" size="small" style="margin-bottom:40px;" icon="el-icon-plus">添加一级菜单</el-button>
        <el-table
            :data="menuList"
            border
            stripe
            style="width: 100%;">
            <el-table-column type="expand">
                <template slot-scope="scope" v-if="scope.row.children.length>0">
                    <el-table :row-class-name="getRowClass" :data="scope.row.children">
                        <el-table-column
                            width="100">
                            <template slot-scope="scope">{{scope.row.id}}</template>
                        </el-table-column>            
                        <el-table-column
                            width="180">
                            <template slot-scope="scope">{{scope.row.menuName}}</template>
                        </el-table-column>
                        <el-table-column
                            width="100">
                            <template slot-scope="scope">{{scope.row.sortNo}}</template>
                        </el-table-column>
                        <el-table-column
                            width="180">
                            <template slot-scope="scope">{{scope.row.routeName}}</template>
                        </el-table-column>           
                        <el-table-column>
                            <template slot-scope="scope">
                                <el-button
                                size="small"
                                type="warning"
                                plain
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button
                                size="small"
                                type="primary"
                                plain
                                @click="handleEdit(scope.$index, scope.row)">新增</el-button>
                                <el-button
                                size="small"
                                type="danger"
                                plain
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                        </el-table-column>                        
                    </el-table>
                </template>
            </el-table-column>                      
            <el-table-column
                label="菜单ID"
                width="100">
                <template slot-scope="scope">{{scope.row.id}}</template>
            </el-table-column>            
            <el-table-column
                label="菜单名称"
                width="180">
                <template slot-scope="scope">{{scope.row.menuName}}</template>
            </el-table-column>
            <el-table-column
                label="排序"
                width="100">
                <template slot-scope="scope">{{scope.row.sortNo}}</template>
            </el-table-column>
            <el-table-column
                label="路由名称"
                width="180">
                <template slot-scope="scope">{{scope.row.routeName}}</template>
            </el-table-column>           
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="small"
                    type="warning"
                    plain
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="small"
                    type="primary"
                    plain
                    @click="handleEdit(scope.$index, scope.row)">新增</el-button>
                    <el-button
                    size="small"
                    type="danger"
                    plain
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
        getRowClass:function(row,rowIndex){
            if(row.row.children.length==0){
                return 'row-expand-cover'
            }
        },
        // 获取文章菜单
       async getMenuList(){
          var menuData = await $api.findAllMenu();
          if(menuData.code=='0' && menuData.data){
              console.log(menuData)
              this.menuList = menuData.data 
          }
        },
        // 创建一级菜单
        createFirstMenu(){
            this.$prompt('', '', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            }).then(({ value }) => {
            this.$message({
                type: 'success',
                message: '你的邮箱是: ' + value
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消输入'
            });       
            });            
        }       
    }
}
</script>
<style lang="scss" scoped>
.row-expand-cover td:last-child .el-icon-arrow-right{visibility: hidden;}  
</style>


