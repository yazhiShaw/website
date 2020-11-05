<template>
  <div class="nav_wrap">
    <div class="nav" :class="navClass">
      <div class="nav_mobi">
        <div class="nav_icon" @click="toggleMobiNav"></div>
        <div class="mobi_list" :style="{'max-height':showMobiNav ? '1000px':'0'}">
          <div class="nav_close">
            <div class="nav_icon" @click="toggleMobiNav"></div>
          </div>
          <a class="mobi_list_title" href="index.html">首页</a>
          <div class="mobi_list_title" @click="showMobiBrancd(1)">
            关于格乐立
            <span class="down_icon"></span>
          </div>
          <div class="mobi_branch" :style="{'max-height':toggleIndex == 1 ? '300px':'0'}">
            <a class="mobi_branch_title" href="bigNews.html">格乐立大事件</a>
            <a class="mobi_branch_title" href="productDescritption.html">产品说明书</a>
            <a class="mobi_branch_title" href="usePage.html">用法用量指引</a>
            <a class="mobi_branch_title" href="injectVideo.html">注射视频操作</a>
          </div>

          <div class="mobi_list_title" @click="showMobiBrancd(2)">
            医生专栏
            <span class="down_icon"></span>
          </div>
          <div class="mobi_branch" :style="{'max-height':toggleIndex == 2 ? '300px':'0'}">
            <a class="mobi_branch_title" href="handbook.html">指南推荐</a>
            <a class="mobi_branch_title" href="literature.html">相关文献</a>
          </div>

          <div class="mobi_list_title" @click="showMobiBrancd(3)">
            患者专栏
            <span class="down_icon"></span>
          </div>

          <div class="mobi_branch" :style="{'max-height':toggleIndex == 3 ? '500px':'0'}">
            <a class="mobi_branch_title" href="article.html?type=0">强直性脊柱炎康复百科</a>
            <a class="mobi_branch_title" href="article.html?type=1">类风湿关节炎康复百科</a>
            <a class="mobi_branch_title" href="article.html?type=3">银屑病康复百科</a>
            <a class="mobi_branch_title" href="article.html?type=4">克罗恩病康复百科</a>
            <a class="mobi_branch_title" href="article.html?type=5">葡萄膜炎康复百科</a>
            <a class="mobi_branch_title" href="lecture.html">名医乐讲堂</a>
          </div>

          <div class="mobi_list_title" @click="showMobiBrancd(4)">
            联系我们
            <span class="down_icon"></span>
          </div>

          <div class="mobi_branch" :style="{'max-height':toggleIndex == 4 ? '300px':'0'}">
            <a class="mobi_branch_title" href="http://www.bio-thera.com/" target="blank">关于百奥泰</a>
            <a class="mobi_branch_title" href="contact.html?type=0">患者交流群</a>
            <a class="mobi_branch_title" href="contact.html?type=1">咨询热线</a>
          </div>
        </div>
      </div>
      <a href="index.html" class="logo" v-if="navBarFixed || selectIndex != 0">
        <img :src="logoSrc"/>
      </a>
      <a href="index.html" class="logo" v-else>
        <img :src="logoSrc"/>
      </a>
      <div class="nav_list nav_pc">
        <a :style="{'color':selectIndex == 0 ? '#00478c':''}" class="nav_title" href="index.html">
          <div class="nav_title_text">
            首页
            <span id="line"></span>
          </div>
        </a>
        <div
          :style="{'color':selectIndex == 1 ? '#00478c':''}"
          class="nav_title"
          @mouseover="showNavBranch(1)"
          @mouseout="hideNavBranch"
        >
          <div class="nav_title_text">
            关于格乐立
            <span id="line"></span>
          </div>
          <div class="nav_branch_wrap animated fadeIn" v-show="hoverIndex == 1">
            <div class="nav_branch">
              <a class="nav_branch_title" href="bigNews.html">
                <div class="nav_branch_title_text">
                  格乐立大事件
                  <span id="line"></span>
                </div>
              </a>

              <a class="nav_branch_title" href="productDescritption.html">
                <div class="nav_branch_title_text">
                  产品说明书
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="usePage.html">
                <div class="nav_branch_title_text">
                  用法用量指引
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="injectVideo.html">
                <div class="nav_branch_title_text">
                  注射视频操作
                  <span id="line"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          :style="{'color':selectIndex == 2 ? '#00478c':''}"
          class="nav_title"
          @mouseover="showNavBranch(2)"
          @mouseout="hideNavBranch"
        >
          <div class="nav_title_text">
            医生专栏
            <span id="line"></span>
          </div>
          <div class="nav_branch_wrap animated fadeIn" v-show="hoverIndex == 2">
            <div class="nav_branch">
              <a class="nav_branch_title" href="handbook.html">
                <div class="nav_branch_title_text">
                  指南推荐
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="literature.html">
                <div class="nav_branch_title_text">
                  相关文献
                  <span id="line"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          :style="{'color':selectIndex == 3 ? '#00478c':''}"
          class="nav_title"
          @mouseover="showNavBranch(3)"
          @mouseout="hideNavBranch"
        >
          <div class="nav_title_text">
            患者专栏
            <span id="line"></span>
          </div>
          <div class="nav_branch_wrap animated fadeIn" v-show="hoverIndex == 3">
            <div class="nav_branch">
              <a class="nav_branch_title" href="article.html?type=0">
                <div class="nav_branch_title_text">
                  强直性脊柱炎康复百科
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="article.html?type=1">
                <div class="nav_branch_title_text">
                  类风湿关节炎康复百科
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="article.html?type=2">
                <div class="nav_branch_title_text">
                  银屑病康复百科
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="article.html?type=3">
                <div class="nav_branch_title_text">
                  克罗恩病康复百科
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="article.html?type=4">
                <div class="nav_branch_title_text">
                  葡萄膜炎康复百科
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="lecture.html">
                <div class="nav_branch_title_text">
                  名医乐讲堂
                  <span id="line"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          :style="{'color':selectIndex == 4 ? '#00478c':''}"
          class="nav_title"
          @mouseover="showNavBranch(4)"
          @mouseout="hideNavBranch"
        >
          <div class="nav_title_text">
            联系我们
            <span id="line"></span>
          </div>
          <div class="nav_branch_wrap animated fadeIn" v-show="hoverIndex == 4">
            <div class="nav_branch">
              <a class="nav_branch_title" href="http://www.bio-thera.com/" target="blank">
                <div class="nav_branch_title_text">
                  关于百奥泰
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="contact.html?type=0">
                <div class="nav_branch_title_text">
                  患者交流群
                  <span id="line"></span>
                </div>
              </a>
              <a class="nav_branch_title" href="contact.html?type=1">
                <div class="nav_branch_title_text">
                  咨询热线
                  <span id="line"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoSrc from "../assets/images/logo.png"
export default {
  name: "navBar",
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hoverIndex: -1,
      showMobiNav: false,
      toggleIndex: -1,
      navBarFixed: true,
      logoSrc
    };
  },
  computed: {
    selectIndex() {
      return this.activeIndex;
    },
    navClass() {
      return this.navBarFixed ? "fix_nav" : "init_nav";
    }
  },
  mounted() {

    // window.addEventListener("scroll", this.watchScroll);
  },
  methods: {
    showNavBranch(index) {
      this.hoverIndex = index;
    },
    hideNavBranch() {
      this.hoverIndex = -1;
    },
    toggleMobiNav() {
      this.showMobiNav = !this.showMobiNav;
    },
    showMobiBrancd(index) {
      this.toggleIndex = this.toggleIndex == index ? -1 : index;
    },
    watchScroll() {
      // 滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      // 容器的高度
      var offsetTop = document.querySelector(".nav").offsetHeight;

      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      if (scrollTop > offsetTop * 0.2) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" module>
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  // justify-content: center;
  color: #333;
  padding-left: 0.8rem;
}
.nav_wrap {
  padding-bottom: 6rem;
}
.nav {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  z-index: 9999;
  left: 0;
  #line {
    width: 0px;
    height: 2px;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 auto;
    position: absolute;
    top: 1.5rem;
    left: 0px;
    right: 0px;
    transition: width 0.4s linear;
    cursor: pointer;
  }
  .nav_title_text {
    position: relative;
  }
  .nav_mobi {
    display: none;
  }
  .nav_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav_title {
      font-size: 1.1rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      // color: #333333;
      line-height: 1.65rem;

      padding: 0 1.2rem;
      position: relative;
      cursor: pointer;
      height: 8rem;
      display: flex;
      align-items: center;
    }
    .active {
      color: #00478c;
    }
    .nav_branch_wrap {
      z-index: 9999;
      position: absolute;
      top: 7rem;
      left: 0;
      width: 17rem;
      text-align: center;
      // transition: all 0.4s;
      overflow: hidden;
      // padding-top: 2rem;
      box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background: transparent;
      .nav_branch {
        background: white;
        padding: 1.2rem 1rem 1.2rem 1.2rem;
        border: 1px solid #eee;
        border-radius: 10px;
      }
      .nav_branch_title:hover {
        color: #00478c;
        #line {
          width: 100%;
          background-color: #00478c;
        }
      }
      .nav_branch_title {
        padding-left: 0;
        // margin: 0 0.8rem;
        padding-bottom: 1.2rem;
        cursor: pointer;
        // border-bottom: 1px solid #dcdcdc;
        text-align: center;
        font-size: 0.9rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #606060;
        line-height: 1.25rem;
      }
      .nav_branch_title_text {
        position: relative;
        cursor: pointer;
      }
      .nav_branch_title:last-child {
        padding-bottom: 0;
      }
    }
  }
  .logo {
    margin: 0 5.25rem 0 0;
    img {
      width: 9.65rem;
      height: 3.6rem;
    }
  }
}

// 初始化菜单样式
.init_nav {
  .nav_pc .nav_title:hover {
    color: #00478c;
  }
  .nav_pc .nav_title {
    color: #333333;
  }
  .nav_list .nav_branch_wrap {
    top: 6.5rem;
  }
}

// 吸顶菜单样式
.fix_nav {
  position: fixed;
  background: #ffffff;
  border-bottom: 1px solid #d8d8d8;
  .nav_pc .nav_title:hover {
    color: #00478c;
    .nav_title_text #line {
      width: 100%;
      background-color: #00478c;
      top: 2.3rem;
    }
  }
  .nav_pc .nav_title {
    color: #333333;
  }
}

@media screen and (min-width: 1600px) {
  .nav {
    width: 100%;
  }
}

@media only screen and (max-width: 992px) {
  .nav {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  html {
    font-size: 10px !important;
  }
  .nav {
    width: 100%;
    padding: 0 1rem;
    justify-content: space-between;
    box-sizing: border-box;

    .logo {
      margin: 1.75rem 0.8rem 1.11rem 0;
    }
    .nav_pc {
      display: none;
    }
    .nav_mobi {
      display: flex;
      .nav_icon {
        width: 2rem;
        height: 2rem;
        display: flex;
        background-image: url("../assets/images//menu.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .nav_close {
        display: flex;
        align-items: center;
        padding: 1rem;
        .nav_icon {
          background-image: url("../assets/images//menu_close.png");
        }
        // position: absolute;
      }
      .mobi_list {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #00478c;
        color: white;
        overflow: hidden;
        transition: all 0.6s;
        z-index: 9999;
        .mobi_branch {
          background: #0a59a7;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.6s;
          .mobi_branch_title {
            color: white;
            padding: 0.5rem 1rem;
          }
        }
        .mobi_list_title {
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          .down_icon {
            width: 1rem;
            height: 0.8rem;
            display: flex;
            background-image: url("../assets/images//menu_down.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
