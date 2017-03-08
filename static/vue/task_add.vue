<template>
      <div class='list-5'>
            <div class="addr">
                  <a href="#">课程管理</a>
                  <span>/</span>
                  <span>课程添加</span>
            </div>
            <div class="content">
                  <div class="title">
                        <h4>创建课程<small>CREATE A COURSE</small></h4>
                  </div>
                  <div class="body">
                        <form>
                              <div>
                                    <label for="">课程标题：</label>
                                    <input type="text" placeholder='请填写课程标题'>
                              </div>
                              <input type="submit" value='创建课程'>
                        </form>
                        <div class="info">
                              <h5>从视频专辑导入课程</h5>
                              <p>已支持优酷、腾讯视频、网易公开课、爱奇艺教育的视频专辑导入。</p>
                        </div>
                  </div>
            </div>
      </div>
</template>

<style lang="less">
      .list-5{
            >.addr{
                  padding:8px 15px;
                  background-color:white;
                  border:1px solid #eee;
                  margin-bottom:20px;
                  >span{
                        padding:0 5px;
                  }
            }
            >.content{
                  min-height:500px;
                  background-color:white;
                  padding:10px;
                  >.title{
                        font-size:16px;
                        border-bottom:1px solid #eee;
                        >h4{
                              padding:10px 15px;
                              >small{
                                    padding-left:5px;
                                    color:#666;
                              }
                        }
                  }
                  >.body{
                        margin-top:30px;
                        >form{
                              margin-right:30px;
                              width:60%;
                              float:left;
                              >div{
                                    padding:20px 10px;
                                    text-align:center;
                                    >label{
                                          color:#666;
                                          display:inline-block;
                                          width:20%;
                                    }
                                    >input{
                                          width:70%;
                                          padding:5px 10px;
                                          border:1px solid #ccc;
                                    }
                              }     
                              >input{
                                    padding:5px 10px;
                                    border-radius:5px;
                                    background-color:#5cb85c;
                                    color:white;
                                    float:right;
                                    margin-right:40px;
                              }
                        }
                        >.info{
                              height:240px;
                              border-left:1px solid #eee;
                              padding:0 40px;
                              float:left;
                              width:30%;
                              >h5{
                                    font-size:14px;
                                    font-weight:normal;
                                    margin:10px 0;
                              }
                              >p{
                                    color:#999;
                              }
                        }
                  }
            }
      }
</style>