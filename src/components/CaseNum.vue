<template>
  <div>
    <div class="case-num">
      <div class="info">
        <p class="title">
          <i></i>
          病例统计
        </p>
      </div>
      <div class="container">
        <div class="title">
          <span>截至 {{ formatDate(infoChina.modifyTime) }} 全国数据统计</span>
        </div>
      </div>
      <div class="num">
        <ul class="count">
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(247, 76, 49)">{{
                    formatNum(infoChina.currentConfirmedIncr)
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(247, 76, 49)">{{
                infoChina.currentConfirmedCount
              }}</strong>
              <span>现存确诊</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(247, 130, 7)">{{
                    formatNum(infoChina.confirmedIncr)
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(247, 130, 7)">{{
                infoChina.confirmedCount
              }}</strong>
              <span>累计确诊</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(162, 90, 78)">{{
                    formatNum(infoChina.suspectedIncr)
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(162, 90, 78)">{{
                infoChina.suspectedCount
              }}</strong>
              <span>累计境外输入</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(174, 33, 44)">{{
                    formatNum(infoChina.curedIncr)
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(174, 33, 44)">{{
                infoChina.curedCount
              }}</strong>
              <span>累计治愈</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(93, 112, 146)">{{
                    formatNum(infoChina.deadIncr)
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(93, 112, 146)">{{
                infoChina.deadCount
              }}</strong>
              <span>累计死亡</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(40, 183, 163)">{{
                    formatNum(infoChina.seriousIncr)
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(40, 183, 163)">{{
                infoChina.seriousCount
              }}</strong>
              <span>现存无症状</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseNum",
  props: ["infoChina"],
  methods: {
    // 格式化日期
    formatDate(date) {
      let time = new Date(date);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      let day = time.getDate();
      day = day < 10 ? "0" + day : day;
      let hours = time.getHours();
      hours = hours < 10 ? "0" + hours : hours;
      let minutes = time.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let seconds = time.getSeconds();
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    // 格式化较昨日数据
    formatNum(num) {
      return num >= 0 ? "+" + num : num;
    },
  },
};
</script>

<style scoped lang="less">
.case-num {
  padding: 0.16rem;
  background: #fff;
  .info {
    background: #fff;
    margin-bottom: 0.1333rem;
    .title {
      font-size: 0.17rem;
    }
    .title i {
      display: inline-block;
      width: 0.04rem;
      height: 0.16rem;
      margin-right: 0.03rem;
      vertical-align: middle;
      background: #4169e2;
    }
  }

  .container {
    margin: -0.16rem 0 0;
    font-size: 0.12rem;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.08rem 0 0.07rem;
      line-height: 0.24rem;
      span {
        color: #666;
      }
      em {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 0.24rem;
        margin-right: -0.16rem;
        padding: 0 0.08rem;
        color: #666;
        font-style: normal;
        background-color: #f7f7f7;
        border-radius: 0.12rem 0 0 0.12rem;
        img {
          width: 0.123rem;
          height: 0.123rem;
          margin-right: 0.037rem;
        }
      }
    }
  }

  .num {
    position: relative;
    text-align: center;
    background: #fff;
    font-style: normal;
    ul {
      flex-flow: wrap;
      position: relative;
      display: flex;
      margin: 0;
      padding: 0.08rem 0 0.12rem;
      li {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 33.3333333%;
        margin: 10px 0;
        .create-item {
          position: relative;
          text-align: center;
          .create-count {
            display: flex;
            align-items: center;
            height: 0.12rem;
            margin-bottom: 0.02rem;
            color: #666;
            font-weight: 400;
            font-size: 0.09rem;
            em {
              font-weight: 400;
            }
          }
        }
        strong {
          margin-bottom: 0.01rem;
          font-weight: 700;
          font-size: 0.2rem;
          line-height: 0.25rem;
        }
        span {
          display: block;
          color: #333;
          font-weight: 700;
          font-size: 0.11rem;
          line-height: 0.15rem;
        }
      }
    }
    .num::after {
      position: absolute;
      top: -0.01rem;
      left: -0.01rem;
      display: block;
      width: 200%;
      height: 200%;
      border: 0.01rem solid #ebebeb;
      border-radius: 0.08rem;
      box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
      transform: scale(0.5);
      transform-origin: 0 0;
      content: "";
    }
  }
}
</style>
