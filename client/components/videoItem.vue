<template>
  <div class="video" v-if="list.length">
    <a
      v-for="(item, index) in list"
      :key="index"
      class="video_wrap"
      @click="openNewLink(item.link)"
    >
      <div class="video_item">
        <div class="video_tips">
          <div class="video_date_time">
            <div class="video_date">{{item.date}}</div>
            <div class="video_time">{{item.time}}</div>
          </div>
        </div>
        <div class="video_play"></div>
      </div>

      <div class="video_title">{{item.title}}</div>
      <div class="video_des">{{item.des}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "videoItem",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    console.log("list", this.list);
  },
  methods: {
    openNewLink(link) {
      window.open(link);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.video {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  .video_wrap {
    width: 30%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  .video_wrap:nth-child(n) {
    margin-right: 2rem;
  }
  .video_wrap:nth-child(2n) {
    margin-right: 2rem;
  }
  .video_wrap:nth-child(3n + 3) {
    margin-right: 0;
  }
  .video_item {
    width: 100%;
    height: 12rem;
    background-image: url("../assets/images/video_item_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem 0.4rem 0 0;
    .video_play {
      width: 3rem;
      height: 3rem;
      position: absolute;
      z-index: 999;
      background: url("../assets/images/reg_icon_play.png") no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .video_tips {
    // height: 1.3rem;
    background: rgba(0, 28, 142, 0.56);
    border-radius: 0rem 0rem 0.4rem 0.4rem;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0rem;
    padding: 0.35rem 1rem;
    box-sizing: border-box;
    font-size: 0.5rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 0.7rem;

    .video_date_time {
      display: flex;
      .video_date {
        margin-right: 0.6rem;
      }
    }
  }
  .video_title {
    margin: 0.8rem 0;
    font-size: 0.9rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 1.3rem;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  .video_title:hover {
    color: red;
  }
  .video_des {
    margin-bottom: 1rem;
    font-size: 0.6rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 1.2rem;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
