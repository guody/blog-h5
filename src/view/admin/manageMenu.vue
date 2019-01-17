<template>
    <div class="menu-box">
        <el-button @click="addMenu()" type="primary" size="small" style="margin-bottom:40px;" icon="el-icon-plus">添加一级菜单</el-button>
        <el-dialog title="添加菜单" :visible.sync="dialogFormVisible" :before-close="closeDialog" width="35%">
            <el-form :model="form" status-icon :rules="rules" ref="menuForm">
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
                <el-button @click="cancelDialog('menuForm')">取 消</el-button>
                <el-button type="primary" @click="addConfirm('menuForm')">确 定</el-button>
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
                                width="120">
                                <template slot-scope="scope">{{scope.row.menuName}}</template>
                            </el-table-column>
                            <el-table-column
                                width="100">
                                <template slot-scope="scope">{{scope.row.sortNo}}</template>
                            </el-table-column>
                            <el-table-column
                                width="120">
                                <template slot-scope="scope">{{scope.row.routeName}}</template>
                            </el-table-column>           
                            <el-table-column>
                                <template slot-scope="scope">
                                    <el-button
                                    size="small"
                                    type="warning"
                                    plain
                                    @click="editCategory(scope.row,'02')">编辑</el-button>
                                    <el-button
                                    size="small"
                                    type="danger"
                                    plain
                                    @click="deleteMenu(scope.row.id,'02')">删除</el-button>
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
                    width="120">
                    <template slot-scope="scope">{{scope.row.menuName}}</template>
                </el-table-column>
                <el-table-column
                    label="排序"
                    width="100">
                    <template slot-scope="scope">{{scope.row.sortNo}}</template>
                </el-table-column>
                <el-table-column
                    label="路由名称"
                    width="120">
                    <template slot-scope="scope">{{scope.row.routeName}}</template>
                </el-table-column>           
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="small"
                        type="warning"
                        plain
                        @click="editMenu(scope.row,'01')">编辑</el-button>
                        <el-button
                        size="small"
                        type="primary"
                        plain
                        @click="addCategory(scope.row)">新增</el-button>
                        <el-button
                        size="small"
                        type="danger"
                        plain
                        @click="deleteMenu(scope.row.id,'01')">删除</el-button>
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
                subMenuId:'',
                menuName: '',
                sortNo: '',
                routeName: '',
                menuId:'' 
            },
            type:'', // 01-菜单； 02-分类
            operate:'',
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
          if(menuData.code==='00' && menuData.data){
              console.log(menuData)
              this.menuList = menuData.data 
          }
        },
        //添加一级菜单
        addMenu(){
            this.dialogFormVisible = true;
            this.operate = '01'
            this.type = '01';
        },
        //添加菜单
        addCategory(row){
            this.dialogFormVisible = true;
            this.operate = '01'
            this.type = '02';
            this.form.subMenuId= row.id
        },
        // 编辑菜单
        editMenu(row){
            this.type = '01';
            this.editBtn(row);
        },
        // 编辑分类
        editCategory(row){
            this.type = '02';
            this.editBtn(row);
        },
        editBtn(row){
            this.dialogFormVisible = true;
            this.operate = '02'
            this.form.menuId = row.id;
            this.form.menuName = row.menuName; 
            this.form.routeName = row.routeName
            this.form.sortNo = row.sortNo;
        },
        // 确认添加、编辑文章菜单、分类  type---01:菜单；02：分类    operate:01 -- 新建    02 -- 更新
        async addConfirm(formName){
            let that = this;
            if(this.operate == '01'){
                //验证校验规则是否通过
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let result;
                        if(this.type=='01'){
                            result = await $api.insertMenu(this.form);
                        }else{
                            result = await $api.insertCategory(this.form);
                        }
                        if(result.code==='00'){
                            this.$message({
                                message: '菜单添加成功',
                                type: 'success',
                                duration:2000,
                                center:true
                            }); 
                            // 弹窗消失
                            that.dialogFormVisible = false; 
                            // 重置表单
                            this.$refs[formName].resetFields();       
                            this.getMenuList();    
                        }
                    } else {
                        return false;
                    }
                });
            }else{
                // 编辑菜单信息
                let result;
                if(this.type=='01'){
                    result = await $api.editMenu(this.form);
                }else{
                    result = await $api.editCategory(this.form);
                }               
                if(result.code==='00'){
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration:2000,
                        center:true
                    }); 
                    // 弹窗消失
                    that.dialogFormVisible = false; 
                    // 重置表单
                    this.$refs[formName].resetFields();       
                    this.getMenuList();    
                }
            }
        },
        // 删除文章菜单
        deleteMenu(menuId,type){
            let msg = '';
            if(type == '01'){
                msg = '此操作将永久删除该菜单及其所有分类, 是否继续?'
            }else {
                msg = '此操作将永久删除该文章分类, 是否继续?'
            }
            this.$confirm(msg, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                let result;
                if(type == '01'){
                    result = await $api.deleteMenu({'menuId':menuId});
                }else {
                    result = await $api.deleteCategory({'id':menuId});
                }
                if(result.code==='00'){
                    this.getMenuList();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });                   
                }
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });            
        },
        cancelDialog(formName){
            this.dialogFormVisible = false;
            this.form = {}
            // this.$refs[formName].resetFields();  
        },
        closeDialog(done){
            // this.$refs['menuForm'].resetFields();
            this.form = {}
            done()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


