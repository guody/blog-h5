<template>
    <p class="blog-info">
        <ul>
            <li class="lmname">
                <a href="">目录1</a>
            </li>
            <li class="public-time">2018-07-15</li>
            <li class="comment-nums">0</li>
            <li class="like-nums">0</li>
            <li class="view-nums">0</li>
        </ul>
    </p>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .blog-info{
        overflow: hidden;
        ul li {
            float: left;
            font-size: 12px;
            padding: 0 0 0 20px;
            margin: 0 15px 0 0;
            color: #748594;
            line-height: 1.5;
            display: inline-block;
            a{
                color: #748594;
            }
            a:hover{
                color: #333;
            }
        }
        @media screen and (max-width: 480px) {
            .lmname{
                display: none;
            }
        }                 
        .lmname{
            background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -23px left;
        }
        .public-time{
            background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -44px left;
        }
        .comment-nums{
                background: url('../assets/imgs/icons/comment.png') no-repeat left;
                background-size:48% auto; 
        }
        .like-nums{
            background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -85px left;
        }
        .view-nums{
            background: url('../assets/imgs/icons/auicon.jpg') no-repeat top -64px left;
        }
    }
</style>


