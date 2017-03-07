<template>
      <div class="list-3">
            <div class="addr">
                  <a href="#">讲师管理</a>
                  <span>/</span>
                  <a href="#">讲师列表</a>
            </div>
            <div class="main">
                  <div class="add"> 
                        <a href="#">添加讲师</a>
                  </div>
                  <div class="select">
                        <div>
                              <input type="text">
                              <button class='sear'>搜索</button>
                        </div>
                  </div>
                  <table>
                        <thead>
                              <tr>
                                    <th>编号</th>
                                    <th>姓名</th>
                                    <th>昵称</th>
                                    <th>年龄</th>
                                    <th>性别</th>
                                    <th>手机号码</th>
                                    <th>操作</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>1</td>
                                    <td>赵玉川</td>
                                    <td>布头儿</td>
                                    <td>28</td>
                                    <td>男</td>
                                    <td>15901256171</td>
                                    <td>
                                          <a href="#" class="btn-check">查 看</a>
                                          <a href="#" class="btn-edit">编 辑</a>
                                          <a href="#" class="btn-del">注 销</a>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>
<style lang="less">
      .list-3{
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
                  >.add{
                        margin:20px 0;
                        padding:10px 15px;
                        background-color:#fff;
                        overflow:hidden;
                        a{
                              float:right;
                              color:white;
                              padding:5px 10px;
                              background-color: #5cb85c;
                        }
                  }
                  >.select{
                        padding:15px;
                        background-color:#fff;
                        border:1px solid #eee;
                        >div{
                              font-size:0;
                              >input{
                                    border-radius:3px 0 0 3px; 
                                    border:1px solid #ccc;
                                    font-size:12px;
                                    padding:5px 10px;
                              }
                              >.sear{
                                    padding:5px 10px;
                                    font-size:14px;
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
                                          >.btn-check,.btn-edit{
                                                background-color:#31b0d5;
                                          }
                                          >.btn-del{
                                                background-color:#f0ad4e;
                                          }
                                    }
                              }
                        }
                  }
            }
      }
</style>