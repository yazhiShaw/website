<template>
  <div class="news_list">
    <div class="list_item" v-for="(item, index) in list" :key="index">
      <div class="news_click_wrap" @click="clickListHandle(item)">
        <div class="left_wrap">
          <img :style="{'width': width+'rem','height': height+'rem'}" :src="item.pic" />
        </div>
        <div class="right_wrap">
          <div class="title">{{item.title}}</div>
          <div class="des">{{item.des}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newList",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 1.9
    },
    height: {
      type: Number,
      default: 2.46
    },
    picType: {
      type: String,
      default: "pdf"
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    this.list.forEach(item => {
      // 如果是pdf
      if (this.picType == "article") {
        item.pic =
          item.pic ||
          "https://maiduote.oss-cn-shenzhen.aliyuncs.com/mdt/gll/image/article_pic.png";
      } else {
        item.pic =
          item.pic ||
          "https://maiduote.oss-cn-shenzhen.aliyuncs.com/mdt/gll/image/pdf.png";
      }
    });
  },
  methods: {
    clickListHandle(item) {
      this.$emit("clickList", item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.list_item {
  display: flex;
  padding: 1.4rem 0.7rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  .news_click_wrap {
    display: flex;
  }
  .left_wrap img {
    width: 1.9rem;
    height: 2.46rem;
    margin-right: 1.2rem;
  }
  .right_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    .title {
      font-size: 1rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 1.4rem;
      margin-bottom: 0.6rem;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title:hover {
      color: #3554aa;
    }
    .des {
      font-size: 0.9rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 1.25rem;

      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
