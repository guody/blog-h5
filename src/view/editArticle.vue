<template>
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
    class="edit-wrap"
  ></mce-editor>
</template>
<script>
import mceEditor from '../components/editor'
export default {
    data(){
        return {
            Config:{
                height:0.7*window.innerHeight  // 默认值
            }
        }
    },
    components:{
        mceEditor
    },
    mounted () {
        // this.Config.height = `${0.822*window.innerHeight}px`;
        const that = this
        window.onresize = () => {
            that.Config.height = `${0.822*window.innerHeight}`
            // console.log(that.Config.height)
        }
        
    }    

}
</script>
<style lang="scss" scoped>
.edit-wrap{
    width: 92%;
    margin: 0 auto;
    // margin-top:20px;
}
</style>

