<template>
  <div id="app">
    <!-- 导航 -->
    <nav-bar :activeIndex="0"></nav-bar>
    <div class="banner banner_1">
      <div id="title" class="title">
        格乐立
        <span class="right_text">®</span>—— 首个国产阿达木单抗
      </div>
      <div class="des">
        格乐立，还生命活力。格乐立
        <span class="right_text">®</span>是中国首个获批的国产阿达木单抗，关键质量属性、临床疗效、安全性与原研药物高度一致。
      </div>
    </div>
    <div class="banner banner_2">
      <div class="title">获批适应症</div>
      <div class="des">
        截至2020年8月，格乐立
        <span class="right_text">®</span>在国内已获批强直性脊柱炎、类风湿关节炎、银屑病、克罗恩病、葡萄膜炎5个适应症。
      </div>
      <a href="productDescritption.html" class="btn">了解更多</a>
    </div>
    <!-- 四宫格 -->
    <div class="reg_box">
      <div class="reg_content">
        <!-- 第一行 -->
        <div class="col col1">
          <div
            class="row row1"
            @mouseover="addAnimate('icon_head', 'animated bounceIn')"
            @mouseout="removeAnimate('icon_head', 'animated bounceIn')"
          >
            <div id="icon_head" class="icon icon_1"></div>
            <div class="title">安全性高</div>
            <div class="des">
              格乐立
              <span class="right_text">®</span>（阿达木单抗）与原研阿达木单抗临床等效，<br/>安全性与其他生物制剂无差异
            </div>
          </div>
          <div
            class="row"
            @mouseover="addAnimate('icon_time', 'animated swing')"
            @mouseout="removeAnimate('icon_time', 'animated swing')"
          >
            <div id="icon_time" class="icon icon_2"></div>
            <div class="title">快速起效 疗效持久</div>
            <div class="des">
              格乐立
              <span class="right_text">®</span>（阿达木单抗）可快速缓解临床症状，<br/>降低炎性指标；长期治疗，可维持临床缓解
            </div>
          </div>
        </div>
        <!-- 第二行 -->
        <div class="col">
          <div
            class="row row1"
            @mouseover="addAnimate('icon_inject', 'animated flipInX')"
            @mouseout="removeAnimate('icon_inject', 'animated flipInX')"
          >
            <div id="icon_inject" class="icon icon_3"></div>
            <div class="title">先进配方</div>
            <div class="des">
              格乐立
              <span class="right_text">®</span>（阿达木单抗）不含柠檬酸盐，<br/>显著减轻注射疼痛
            </div>
          </div>
          <div
            class="row"
            @mouseover="addAnimate('icon_box', 'animated flash')"
            @mouseout="removeAnimate('icon_box', 'animated flash')"
          >
            <div id="icon_box" class="icon icon_4"></div>
            <div class="title">高性价比</div>
            <div class="des">
              格乐立
              <span class="right_text">®</span>（阿达木单抗）有效降低治疗负担
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 注射视频 -->
    <div class="video_box">
      <div class="video_content">
        <div class="video" @click="playVideo">
          <!-- <div class="video_tag"></div> -->
          <video
            id="injectVideo"
            src="http://qletli.maiduote.com/uploads/video/inject.mp4"
            class="video_tag"
            controls="controls"
            poster="/assets/video_bg.png"
          >当前浏览器不支持视频播放</video>
          <div v-if="!playing" class="video_play"></div>
        </div>
        <div class="video_text">
          <div class="video_title">
            <div class="green_line"></div>
            <div>使用方便</div>
            <div class="green_line"></div>
          </div>
          <div class="video_des">皮下注射，预充针剂型</div>
          <a class="video_btn" href="injectVideo.html">注射指南</a>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";
import footerBar from "./components/footerBar.vue";
import { addAnimate, removeAnimate } from "./util.js";
import { getRecordApi } from "./server.js";
export default {
  name: "app",
  data() {
    return {
      playing: false
    };
  },
  components: {
    navBar,
    footerBar
  },
  computed: {
    addAnimate() {
      return addAnimate;
    },
    removeAnimate() {
      return removeAnimate;
    }
  },
  mounted() {
    let param = {};
    getRecordApi(param).then(res => {
      console.log("res", res);
    });
  },
  methods: {
    openVideo() {
      window.open("http://qletli.maiduote.com/uploads/video/inject.mp4");
    },
    playVideo() {
      var video = document.getElementById("injectVideo");
      this.playing = true;
      video.play();
    }
  }
};
</script>


<style lang="less">
// 初始化菜单样式
.init_nav {
  .nav_pc .nav_title:hover {
    color: #00478c;
  }
  .nav_pc .nav_title {
    color: #ffffff;
  }
}
.right_text {
  font-size: 1rem;
  position: relative;
  top: -1.1rem;
  left: -0.6rem;
}
.banner {
  width: 100%;
  height: 37rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    font-size: 2rem;
    font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei", "微软雅黑",
      STXihei, "华文细黑", sans-serif;
    font-weight: 500;
    color: #ffffff;
    line-height: 2.95rem;

    text-align: center;
    margin-bottom: 1.75rem;
  }

  .des {
    font-size: 1.4rem;
    font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei", "微软雅黑",
      STXihei, "华文细黑", sans-serif;
    font-weight: 400;
    color: #ffffff;
    line-height: 2.1rem;

    width: 65%;
    text-align: center;
    box-sizing: border-box;
    padding: 0 6rem;
    .right_text {
      font-size: 0.8rem;
      top: -0.8rem;
      left: -0.4rem;
    }
  }
  .banner_1 {
    .des {
      .right_text {
        font-size: 0.8rem;
        top: -0.8rem;
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 2.8rem;
    padding: 0.8rem 6rem;
    border-radius: 0.4rem;
    border: 0.1rem solid #ffffff;
    text-align: center;

    font-size: 1.4rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 2.1rem;
    cursor: pointer;
  }
}
.banner_1 {
  background-image: url("/assets/images/index_bg_1.png");
}
.banner_2 {
  background-image: url("/assets/images/index_bg_2.png");
}
.reg_box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.75rem auto;
  .reg_content {
    width: 65%;
  }
  .right_text {
    font-size: 0.8rem;
    top: -0.5rem;
    left: -0.3rem;
  }
  .col {
    width: 100%;
    display: flex;
    flex-direction: row;
    .row {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 5rem 1rem;
      .icon_1 {
        background-image: url(/assets/images/reg_icon_1.png);
      }
      .icon_2 {
        background-image: url(/assets/images/reg_icon_2.png);
      }
      .icon_3 {
        background-image: url(/assets/images/reg_icon_3.png);
      }
      .icon_4 {
        background-image: url(/assets/images/reg_icon_4.png);
      }
      .icon {
        width: 4.8rem;
        height: 4.15rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      .title {
        margin: 0.85rem auto 1.2rem;

        font-size: 1.4rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 2.5rem;
      }
      .des {
        text-align: center;
        font-size: 0.93rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #3f3f3f;
        line-height: 1.65rem;
      }
    }
  }
  .col1 {
    border-bottom: 1px solid #e1e1e1;
  }
  .row1 {
    border-right: 1px solid #e1e1e1;
  }
}
.video_box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/assets/images/inject_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 25rem;
  .video_content {
    width: 65%;
    display: flex;
    justify-content: space-between;
  }
  .video_text {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
    .video_title {
      display: flex;
      align-items: center;

      font-size: 1.6rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 2.5rem;
      .green_line {
        width: 4.45rem;
        height: 0.05rem;
        background: #333333;
        margin: 0 0.5rem;
      }
    }
    .video_des {
      margin-top: 0.45rem;
      font-size: 1.6rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #1b355e;
      line-height: 2.5rem;
    }
    .video_btn {
      margin-top: 0.9rem;
      // padding: 1rem 5.95rem;
      width: 18rem;
      height: 4.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #3554aa;
      border-radius: 0.4rem;
      cursor: pointer;

      border: 1px solid #eee;

      font-size: 1.3rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 2.1rem;
    }
  }
  .video {
    width: 34rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .video_tag {
      width: 100%;
      object-fit: fill;
    }
    .video_play {
      width: 5.55rem;
      height: 5.55rem;
      position: absolute;
      z-index: 999;
      background: url("/assets/images/reg_icon_play.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 1600px) {
  .video_box {
    .video_content {
      width: 55%;
    }
  }
  .reg_box .reg_content {
    width: 55%;
  }
  .banner {
    .title,
    .des {
      width: 55%;
    }
  }
}
@media only screen and (max-width: 768px) {
  .video_box {
    .video_content {
      width: 90%;
    }
  }
  .reg_box .reg_content {
    width: 90%;
  }
}
@media only screen and (max-width: 480px) {
  .banner {
    background-size: cover;
    .title {
      font-size: 1.7rem;
    }
    .des {
      padding: 0;
    }
  }
  .reg_box {
    .col {
      .row {
        .title {
          font-size: 1.5rem;
        }
      }
    }
    .reg_content {
      width: 100%;
    }
  }
  .video_box {
    background-size: cover;

    .video_text {
      display: none;
    }
    .video_content {
      width: 90%;
      .video {
        width: 100%;
      }
    }
  }
}
</style>

