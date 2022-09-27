<template>
  <div class="dashboard-container">
    <!--@ 上半结构 -->
    <el-row style="margin-left: -50px; margin-top: -30px;" :gutter="20">
      <!--? 工单统计/销售统计/销售数据区域 -->
      <el-col :span="18"><div class="grid-content bg-purple-dark" />
        <el-row :gutter="20">
          <!-- 工单统计 -->
          <el-col :span="13">
            <el-container class="home-user-task-stats bg1 box">
              <el-header height="18px">工单统计 <span class="sub-title">2022.09.01 ~ 2022.09.27</span> </el-header>
              <el-main>
                <div class="stats">
                  <div class="item">
                    <div class="num color1 text-shadow1">150</div>
                    <div class="text color2">工单总数（个）</div>
                  </div>
                </div>
                <div class="stats">
                  <div class="item">
                    <div class="num color1 text-shadow1">0</div>
                    <div class="text color2">工单总数（个）</div>
                  </div>
                </div>
                <div class="stats">
                  <div class="item">
                    <div class="num color1 text-shadow1">150</div>
                    <div class="text color2">工单总数（个）</div>
                  </div>
                </div>
                <div class="stats">
                  <div class="item">
                    <div class="num color1 text-shadow1">150</div>
                    <div class="text color2"><span class="tac">工单总数(个)</span></div>
                  </div>
                </div>
              </el-main>
            </el-container>
          </el-col>
          <!-- 销售统计 -->
          <el-col :span="11">
            <el-container class="home-user-task-stats bg2 box">
              <el-header height="18px">销售统计 <span class="sub-title">2022.09.01 ~ 2022.09.27</span> </el-header>
              <el-main>
                <div class="stats">
                  <div class="item">
                    <div class="num color3 text-shadow2">12991</div>
                    <div class="text color2">订单量（个）</div>
                  </div>
                </div>
                <div class="stats">
                  <div class="item">
                    <div class="num color3 text-shadow2">8.35</div>
                    <div class="text color2">销售额（万元）</div>
                  </div>
                </div>
              </el-main>
            </el-container>
          </el-col>
        </el-row>
        <!-- 销售数据区域 -->
        <div class="box sku-sale-collect">
          <div class="header">销售数据区域</div>
          <div class="charts">图表</div>
        </div>
      </el-col>
      <!--? 商品热榜区域 -->
      <el-col :span="6" style="padding-left: 10px; padding-right: 10px;">
        <div class="box sku-sale-rank">商品热榜区域</div>
      </el-col>
    </el-row>
    <!--@ 下半结构 -->
    <el-row style="margin-left: -50px; margin-top: 20px;" :gutter="20">
      <el-col :span="14">
        <div class="box partner-node-collect">合作商点位数TOP5</div>
      </el-col>
      <el-col :span="10">
        <div class="box partner-node-collect">异常设备监控</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

}
.el-header {
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;

    .sub-title {
      margin-left: 10px;
      font-size: 12px;
      font-family: PingFangSC-Regular,PingFang SC;
      font-weight: 400;
      color: #999;
    }
}
.el-main{
  padding: 0;
  display: flex;
  .stats {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .item {

      .num {
        text-align: center;
        height: 50px;
        font-size: 36px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight: 600;
        line-height: 50px;
        // text-shadow: 2px 4px 7px rgb(85 132 255 / 50%);
      }
      .text {
        height: 17px;
        margin-top: 3px;
        font-size: 12px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: #91a7dc;
        line-height: 17px;
        padding-left: 8px;
      }
    }
  }
}
.color1 {
  color: #072074;
}
.color2 {
  color: #91a7dc;
}
.color3 {
  color: #ff5757;
}
.text-shadow1 {
  text-shadow: 2px 4px 7px rgb(85 132 255 / 50%);
}
.text-shadow2 {
  text-shadow: 2px 4px 7px rgb(255 99 85 / 50%);
}

  .box {
    padding: 20px;
  }
  // 工单统计
  .home-user-task-stats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: calc(20vh - 24px);
    min-height: 166px;
    background: #e9f3ff;
    border-radius: 20px;
  }
  .bg1 {
    background: #e9f3ff;
    background-repeat: no-repeat,no-repeat;
    background-image: url(~@/assets/common/circle.png);
    background-position: 0 0,calc(100% - 12px) 100%;
  }

  .sku-sale-collect {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: calc(40vh - 68px);
    min-height: 352px;
    margin-top: 20px;
    background: #fff;
    border-radius: 20px;
  }
  .bg2 {
    background: #fbefe8 url(~@/assets/common/pinkpig.png) no-repeat calc(100% - 12px) 100%;
  }

  .sku-sale-rank {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    // height: calc(40vh - 68px);
    // min-height: 352px;
    // margin-top: 20px;
    height: 538px;
    background: #fff;
    border-radius: 20px;
  }

  .partner-node-collect {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: calc(40vh - 48px);
    min-height: 353px;
    background: #fff;
    border-radius: 20px;
  }
</style>
