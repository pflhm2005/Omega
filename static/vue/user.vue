<template>
      <div class="list-2">
            <div class="addr">
                  <a href="#">用户管理</a>
                  <span>/</span>
                  <a href="#">用户列表</a>
            </div>
            <div class="main">
                  <div class="select">
                        <form action="">
                              <select name="" id="">
                                    <option value="">按年龄</option>
                                    <option value="">按性别</option>
                                    <option value="">按地区</option>
                                    <option value="">按日期</option>
                              </select>
                              <button class='btn-sort'>筛选</button>
                        </form>
                        <div>
                              <input type="text">
                              <button class='sear'>搜索</button>
                        </div>
                  </div>
                  <table>
                        <thead>
                              <tr>
                                    <th>编号</th>
                                    <th>注册账号</th>
                                    <th>昵称</th>
                                    <th>年龄</th>
                                    <th>性别</th>
                                    <th>地区</th>
                                    <th>手机号码</th>
                                    <th>积分</th>
                                    <th>注册时间</th>
                                    <th>登录时间</th>
                                    <th>操作</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>1</td>
                                    <td>botue@sina.com</td>
                                    <td>布头儿</td>
                                    <td>28</td>
                                    <td>男</td>
                                    <td>河北省</td>
                                    <td>15901256171</td>
                                    <td>24</td>
                                    <td>2016/05/01 10:12:32</td>
                                    <td>2016/05/10 12:16:19</td>
                                    <td>
                                          <a href="javascript:" class="btn-check">查看</a>
                                          <a href="javascript:" class="btn-lock">锁定</a>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <ul>
                  <li><a href="#">上一页</a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">下一页</a></li>
            </ul>
      </div>
</template>
<style lang="less">
      .list-2{
            >.addr{
                  padding:8px 15px;
                  background-color:white;
                  border:1px solid #eee;
                  margin-bottom:20px;
                  >a{

                  }
                  >span{
                        padding:0 5px;
                  }
            }
            >.main{
                  margin-bottom:20px;
                  >.select{
                        padding:15px;
                        background-color:#fff;
                        border:1px solid #eee;
                        >form{
                              display:inline-block;
                              >select{
                                    border: 1px solid #ccc;
                                    border-radius:4px;
                                    font-size:12px;
                                    padding:5px 10px;
                              }
                              .btn-sort{
                                    padding:5px 10px;
                                    background-color:#5cb85c;
                                    font-size:12px;
                                    color:white;
                                    border-color: #398439;
                                    border-style: none;
                              }
                        }
                        >div{
                              float:right;
                              font-size:0;
                              >input{
                                    border-radius:3px 0 0 3px; 
                                    border:1px solid #ccc;
                                    font-size:12px;
                                    padding:5px 10px;
                              }
                              >.sear{
                                    padding:5px 10px;
                                    font-size:13px;
                                    border-radius:0 3px 3px 0; 
                                    border-style: none;
                                    background-color:#5cb85c;
                                    color:white;
                              }
                        }  
                  }
                  >table{
                        width:100%;
                        >thead{
                              >tr{
                                    >th{
                                          padding:8px;
                                          border:1px solid #ddd;
                                          background-color:#fff;
                                    }
                              }
                        }
                        >tbody{
                              >tr{
                                    >td{
                                          text-align:center;
                                          padding:8px;
                                          border:1px solid #ddd;
                                          background-color:#fff;
                                          >a{
                                                padding:1px 5px;
                                                font-size:12px;
                                                border-radius:3px;
                                                color:white;
                                          }
                                          >.btn-check{
                                                background-color:#31b0d5;
                                          }
                                          >.btn-lock{
                                                background-color:#f0ad4e;
                                          }
                                    }
                              }
                        }
                  }
            }
            >ul{
                  float:right;
                  >li{
                        float:left;
                        >a{
                              margin-left:-1px;
                              background-color:white;
                              border:1px solid #eee;
                              padding:6px 12px;
                              &:hover{
                                    background-color:#eee;
                              }
                        }
                  }
            }
      }
</style>