<template>
    <div class="edit-article-box">
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
</template>
<script>
import mceEditor from '@/components/editor'
export default {
    data(){
        return {
            Config:{
                theme: 'modern',
                titleContent:''
            }
        }
    },
    components:{
        mceEditor
    },
    mounted () {

    }    

}
</script>
<style lang="scss">
.edit-article-box{
    background: #fff;
    padding: 30px 0;
    .title-box{
        min-height: 60px;
        width: 60%;
        margin: auto;
        margin-bottom:30px; 
    }
    .edit-wrap{
        width: 60%;
        margin: 0 auto;
        // margin-top:20px;
    }
    .el-textarea__inner{
        padding: 0;
        border: none;
        height: 60px;
    }
    .el-textarea__inner::-webkit-input-placeholder {color:#666;font-weight:600;font-size:22px;}
    .el-textarea__inner:-moz-placeholder {color:#666; font-weight:600; font-size:22px;}
    .el-textarea__inner::-moz-placeholder {color:#666;font-weight:600;font-size:22px;}
    .el-textarea__inner:-ms-input-placeholder {color:#666;font-weight:600;font-size:22px;}
}

</style>

