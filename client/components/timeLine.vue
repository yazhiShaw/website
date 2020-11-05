<template>
  <div class="time_line">
    <ul class="timeline-wrapper">
      <li class="timeline-item" v-for="t in timelineList" :key="t.id">
        <div class="timeline-box">
          <div class="out-circle">
            <div class="in-circle"></div>
          </div>
          <div class="long-line"></div>
        </div>
        <div class="timeline-content">
          <div class="timeline-date">{{t.date}}</div>
          <div class="timeline-desc">{{ t.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "timeLine",
  props: {
    timelineList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
ul.timeline-wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 时间线 */
.timeline-item {
  position: relative;

  .timeline-box {
    text-align: center;
    position: absolute;

    .out-circle {
      width: 0.8rem;
      height: 0.8rem;
      background: rgba(14, 116, 218, 0.1);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
      /*opacity: 0.1;*/
      border-radius: 50%;
      display: flex;
      align-items: center;

      .in-circle {
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
        background: rgba(14, 116, 218, 1);
        border-radius: 50%;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
      }
    }

    .long-line {
      width: 2px;
      height: 7rem;
      background: rgba(14, 116, 218, 1);
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
      opacity: 0.1;
      margin-left: 0.3rem;
    }
  }

  .timeline-content {
    box-sizing: border-box;
    margin-left: 1rem;
    height: 7rem;
    padding: 0 0 0 1rem;
    text-align: left;
    margin-bottom: 0.4rem;

    .timeline-title {
      font-size: 0.7rem;
      word-break: break-all;
      margin-bottom: 1rem;
      color: #333;
      font-weight: 500;
      /*display: inline;*/
    }

    .timeline-date {
      font-size: 1.2rem;
      color: #333;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }
    .timeline-desc {
      font-size: 0.8rem;
      color: #999999;
    }
  }
}

.timeline-item:last-of-type .timeline-content {
  margin-bottom: 0;
}
</style>
