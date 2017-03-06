<template>
      <div class='list-1'>
            <div class="survey">
                  <div>
                        <div class="money">
                              <span class='glyphicon glyphicon-usd'></span>
                              <p>我的收入</p>
                              <p>￥11.11</p>
                        </div>
                  </div>
                  <div>
                        <div class="task">
                              <span class='glyphicon glyphicon-th'></span>
                              <p>课程数量</p>
                              <p>12</p>
                        </div>
                  </div>
                  <div>
                        <div class="account">
                              <span class='glyphicon glyphicon-user'></span>
                              <p>用户数量</p>
                              <p>236</p>
                        </div>
                  </div>
                  <div>
                        <div class="watch">
                              <span class='glyphicon glyphicon-eye-open'></span>
                              <p>浏览量</p>
                              <p>22435</p>
                        </div>
                  </div>
            </div>
      </div>
</template>

<style lang="less">
      .list-1{
            >.survey{
                  height:80px;
                  >div{
                        height:100%;
                        width:25%;
                        padding:0 7.5px;
                        float:left;
                        >div{
                              border-radius:6px;
                              height:100%;
                              padding:15px;
                              color:white;
                              >span{
                                    float:left;
                                    font-size:50px;
                                    padding-right:15px;
                              }
                              >p{
                                    font-weight:bold;
                                    font-size:13px;
                                    line-height:25px;
                              }
                        }
                        >.money{
                              background-color:#FC8675;
                        }
                        >.task{
                              background-color:#5AB6DF;
                        }
                        >.account{
                              background-color:#65CEA7;
                        }
                        >.watch{
                              background-color:#EBC85E;
                        }
                  }
            }
      }
</style>
