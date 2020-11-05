<template>
  <footer class="footer">
    <div class="footer_wrap">
      <div class="menu">
        <div class="menu_item menu_pc">
          <div class="menu_title">
            <span class="menu_underline">关于格乐立</span>
          </div>
          <a class="menu_branch" href="bigNews.html">格乐立大事件</a>
          <a class="menu_branch" href="productDescritption.html">产品说明书</a>
          <a class="menu_branch" href="usePage.html">用法用量指引</a>
          <a class="menu_branch" href="injectVideo.html">注射视频操作</a>
        </div>
        <div class="menu_item menu_pc">
          <div class="menu_title">
            <span class="menu_underline">医生专栏</span>
          </div>
          <a class="menu_branch" href="handbook.html">指南推荐</a>
          <a class="menu_branch" href="literature.html">相关文献</a>
        </div>
        <div class="menu_item menu_pc">
          <div class="menu_title">
            <span class="menu_underline">患者专栏</span>
          </div>
          <a class="menu_branch" href="article.html">康复百科</a>
          <a class="menu_branch" href="lecture.html">名医乐讲堂</a>
        </div>
        <div class="menu_item menu_pc">
          <div class="menu_title">
            <span class="menu_underline">联系我们</span>
          </div>
          <a class="menu_branch" href="http://www.bio-thera.com/" target="blank">关于百奥泰</a>
          <a class="menu_branch" href="contact.html?type=0">患者交流群</a>
          <a class="menu_branch menu_phone_wrap" href="contact.html?type=1">
            <span class="menu_phone">咨询热线</span>
            <span class="menu_phone">400-9998-703</span>
          </a>
        </div>
        <div class="menu_item">
          <div class="menu_title menu_img">
            <img class="code_img" src="/assets/code.png" />
            <div class="code_text">微信公众号，阿达木单抗</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">Copyright © 百奥泰生物制药股份有限公司</div>
  </footer>
</template>

<script>
export default {
  name: "footerBar",
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer {
  background: #1b355e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5.15rem;
  padding-bottom: 2.2rem;
  a {
    padding-left: 0;
  }
  .right {
    margin-top: 1rem;

    font-size: 0.5rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1rem;
  }
  .footer_wrap {
    width: 65%;
    // border-bottom: 1px solid white;
    padding-bottom: 10px;
  }
  .menu {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .menu_item {
      flex-grow: 1;
      text-align: left;
      .menu_branch {
        margin-bottom: 0.9rem;
        cursor: pointer;

        font-size: 0.7rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 1.25rem;
      }
      .menu_branch:hover, .menu_phone_wrap:hover .menu_phone {
        color: #95c2f3;
      }
      .menu_phone_wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .menu_phone {
        margin-bottom: 0.2rem;
        font-size: 0.7rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 1.25rem;
      }
      .menu_img {
        text-align: center;
      }
      .menu_title {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 1.65rem;
        .code_img {
          width: 6.75rem;
          height: 6.75rem;
        }
        .code_text {
          margin-top: 0.65rem;
          font-size: 0.7rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 1rem;
        }
        .menu_underline {
          display: inline-flex;
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);;
          border-bottom-style: groove;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
@media screen and (min-width: 1600px) {
  .footer .footer_wrap {
    width: 55%;
  }
}
@media only screen and (max-width: 768px) {
  html {
    font-size: 8px !important;
  }
  .menu_pc {
    display: none;
  }
}
</style>
