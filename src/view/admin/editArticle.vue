<template>
    <div class="edit-article-box">
        <div class="article-header">
            <div class="head-wrap">
                <div class="back-btn"></div>
                <div class="header-right">
                    <i class="el-icon-more" style="color:#777;font-size:1.8rem;cursor:pointer"></i>
                    <el-popover
                        placement="top"
                        width="280"
                        v-model="visible">
                        <h3 class="pop-title">发布文章</h3>
                        <div class="pop-item">
                            <div class="pop-item-title">文章分类</div>
                            <el-cascader
                                :options="casecadeOptions"
                                v-model="ArticleCategory"
                                @change="handleChange">
                            </el-cascader>
                        </div>
                        <div class="pop-item">
                            <div class="pop-item-title">文章类型</div>
                            <template>
                                <el-select @change="typeChange" v-model="articleType" placeholder="请选择">
                                    <el-option
                                    v-for="item in typeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </template>
                        </div>
                        <div class="pop-item">
                            <div class="pop-item-title">标签</div>
                            <el-input v-model="articleTag" placeholder="添加1个标签"></el-input>
                        </div>
                        <div style="text-align: center; margin-top: 20px;">
                            <el-button type="primary" plain size="small" @click="visible = false">保存并发布</el-button>
                        </div>
                        <div class="public-box" slot="reference">
                            <span>发布</span>
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                    </el-popover>
                    <img class="avator" src="../../assets/imgs/admin/default-head.png" alt="avator">
                </div>
            </div>
        </div>
        <div class="edit-con-box">
            <div class="title-box">
                <el-input
                    type="textarea"
                    autosize
                    resize="none"
                    placeholder="请输入标题"
                    v-model="titleContent">
                </el-input>
            </div>
            <mce-editor 
                :config           = "Config"
                v-model          = "Value"
                :url              = "Url"
                :max-size         = "MaxSize"
                :accept           = "Accept"
                :with-credentials = false
                @on-ready         = "onEditorReady"
                @on-destroy       = "onEditorDestroy"
                @on-upload-success= "onEditorUploadComplete"
                @on-upload-fail   = "onEditorUploadFail"
                class="edit-wrap">
            </mce-editor>  
        </div>
     
    </div>
</template>
<script>
import mceEditor from '@/components/editor'
export default {
    data(){
        return {
            Config:{
                theme: 'modern'
            },
            titleContent:'',  // 文章标题
            visible:false,   //发布弹框显示
            ArticleCategory:'',  // 文章分类
            articleTag:'',  // 文章标签
            articleType:'',
            casecadeOptions:'',
            typeOptions:[
                {
                    value: '0',
                    label: '原创'
                },
                {
                    value: '1',
                    label: '转载'
                }
            ]
        }
    },
    components:{
        mceEditor
    },
    mounted () {

    },
    methods:{
        handleChange(value) {
            console.log(value);
        },
        typeChange(value) {
            console.log(value);
        }
    }   

}
</script>
<style lang="scss">
.el-popover{
    padding: 20px;
    .pop-title{
        font-size: 1.6rem;
        color: #888;
        font-weight: 600;
    }
    .pop-item{
        margin-top:15px;
    }
    .pop-item-title{
        font-size: 1.4rem;
        color: #909090;    
        margin-bottom:5px;     
    }

}
.edit-article-box{
    background: #fff;
    .article-header{
        background: #fff;
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        z-index: 99;
        border-bottom:1px solid #eee;
        .head-wrap{
            margin:0 auto;
            width: 75%;
            height: 100%;
            .back-btn{
                cursor: pointer;
                float: left;
                height: 60px;
                width: 60px;
                background: url('../../assets/imgs/admin/icons/back.png') no-repeat center;
            }
            .header-right{
                float: right;
                height: 60px;
                display: flex;
                align-items:center; 
                -webkit-align-items:center; 
                justify-content:center ; 
                .public-box{
                    cursor: pointer;
                    margin: 0 30px;
                    color: #007fff;
                    font-size: 1.7rem;
                }
                .avator{
                    width: 30px;
                    height: 30px;
                }
            }       
        } 
    }
    .edit-con-box{
        padding-top:80px; 
        margin:0 auto;
        width: 60%;
    }
    .title-box{
        min-height: 40px;
        margin-bottom:30px; 
    }
    .el-textarea__inner{
        padding-left: 0;
        border: none;
        font-size: 28px;
        // height: 60px;
    }
    .el-textarea textarea{
        height: 40px!important;
    }
    .el-textarea__inner::-webkit-input-placeholder {color:#666;font-weight:600;font-size:28px;}
    .el-textarea__inner:-moz-placeholder {color:#666; font-weight:600; font-size:28px;}
    .el-textarea__inner::-moz-placeholder {color:#666;font-weight:600;font-size:28px;}
    .el-textarea__inner:-ms-input-placeholder {color:#666;font-weight:600;font-size:28px;}
}

</style>

