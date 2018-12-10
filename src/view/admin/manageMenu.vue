<template>
    <div class="menu-box">
        <el-button @click="dialogFormVisible = true" type="primary" size="small" style="margin-bottom:40px;" icon="el-icon-plus">添加一级菜单</el-button>
        <el-dialog title="添加菜单" :visible.sync="dialogFormVisible" width="35%">
            <el-form :model="form" status-icon :rules="rules" >
                <el-form-item label="菜单名称" :label-width="formLabelWidth" prop="menuName">
                    <el-input v-model="form.menuName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="菜单排序" :label-width="formLabelWidth" prop="sortNo">
                    <el-input v-model="form.sortNo" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="路由名称" :label-width="formLabelWidth" prop="routeName">
                    <el-input v-model="form.routeName" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addMenu">确 定</el-button>
            </div>
        </el-dialog>
        <div class="table-box">
            <el-table
                :data="menuList"
                border
                stripe
                style="width: 80%;">
                <el-table-column type="expand">
                    <template slot-scope="scope" v-if="scope.row.children.length>0">
                        <el-table :data="scope.row.children">
                            <el-table-column
                                width="100">
                                <template slot-scope="scope">{{scope.row.id}}</template>
                            </el-table-column>            
                            <el-table-column
                                width="150">
                                <template slot-scope="scope">{{scope.row.menuName}}</template>
                            </el-table-column>
                            <el-table-column
                                width="100">
                                <template slot-scope="scope">{{scope.row.sortNo}}</template>
                            </el-table-column>
                            <el-table-column
                                width="150">
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
                    width="150">
                    <template slot-scope="scope">{{scope.row.menuName}}</template>
                </el-table-column>
                <el-table-column
                    label="排序"
                    width="100">
                    <template slot-scope="scope">{{scope.row.sortNo}}</template>
                </el-table-column>
                <el-table-column
                    label="路由名称"
                    width="150">
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
    
    </div>    
</template>
<script>
export default {
    data(){
        return{
            menuList:[],
            loading:true,
            dialogFormVisible:false,
            form: {
                menuName: '',
                sortNo: '',
                routeName: ''
            },
            rules:{
                menuName:[
                    { required: true, message: '请输入菜单名称', trigger: 'blur' }
                ],
                sortNo:[      
                    { required: true, message: '排序值不能为空',trigger: 'blur'}
                ],
                routeName:[
                    { required: true, message: '请输入路由名称', trigger: 'blur' }
                ]
            },
            formLabelWidth: '100px'
        }
    },
    created(){
        this.getMenuList();
    },
    computed:{
        getRowClass:function(row,rowIndex){
            if(row.row.children.length==0){
                return 'row-expand-cover'
            }
        }
    },
    methods:{
        // 获取文章菜单
       async getMenuList(){
          var menuData = await $api.findAllMenu();
          if(menuData.code=='0' && menuData.data){
              console.log(menuData)
              this.menuList = menuData.data 
          }
        },
        // 添加文章目录
        async addMenu(){
            // 弹窗消失
            this.dialogFormVisible = false;
            // 提交数据
            var result = await $api.insertMenu(this.form);
            if(result.code=='0'){
                this.$message({
                    message: '目录添加成功',
                    type: 'success',
                    duration:2000,
                    center:true
                });         
                this.getMenuList();    
            }else{
                this.$message({
                    message: result.message,
                    type: 'error',
                    duration:2000,
                    center:true
                });                 
            }

        }      
    }
}
</script>
<style lang="scss" scoped>

</style>


