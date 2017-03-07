<template>
      <div class="list-2">
            <div class="addr">
                  <a href="#">用户管理</a>
                  <span>/</span>
                  <span>用户列表</span>
            </div>
            <div class="main">
                  <div class="select">
                        <form action="">
                              <select id='sort'>
                                    <option value="age">按年龄</option>
                                    <option value="sex">按性别</option>
                                    <option value="area">按地区</option>
                                    <option value="score">按积分</option>
                              </select>
                              <a class='btn-sort' @click='sort'>筛选</a>
                        </form>
                        <div>
                              <input type="text" id='sear_text'>
                              <a class='sear' @click='sear'>搜索</a>
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
                              <template v-for="(list,index) in user">
                                    <tr>
                                          <td>{{index+1}}</td>
                                          <td>{{list.account}}</td>
                                          <td>{{list.name}}</td>
                                          <td>{{list.age}}</td>
                                          <td>{{list.sex}}</td>
                                          <td>{{list.area}}</td>
                                          <td>{{list.tel}}</td>
                                          <td>{{list.score}}</td>
                                          <td>{{list.reg_time}}</td>
                                          <td>{{list.log_time}}</td>
                                          <td>
                                                <a href="javascript:" class="btn-check">查看</a>
                                                <a href="javascript:" class="btn-lock">锁定</a>
                                          </td>
                                          </tr>
                              </template>
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
<script>
      export default{
            data(){
                  return {
                        user:[
                              {'account':'botue@sina.com','name':'布头儿','age':28,'sex':'男','area':'河北省','tel':'15901256171','score':'43','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                              {'account':'botue@sina.com','name':'布头儿2','age':25,'sex':'男','area':'河南省','tel':'15901256171','score':'21','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                              {'account':'botue@sina.com','name':'布头儿3','age':23,'sex':'女','area':'河东省','tel':'15901256171','score':'22','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                              {'account':'botue@sina.com','name':'布头儿4','age':25,'sex':'男','area':'河西省','tel':'15901256171','score':'66','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                              {'account':'botue@sina.com','name':'布头儿5','age':27,'sex':'女','area':'河上省','tel':'15901256171','score':'55','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                              {'account':'botue@sina.com','name':'布头儿6','age':22,'sex':'男','area':'河下省','tel':'15901256171','score':'11','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                              {'account':'botue@sina.com','name':'布头儿7','age':21,'sex':'女','area':'河左省','tel':'15901256171','score':'73','reg_time':'2016/05/01 10:12:32','log_time':'2016/05/10 12:16:19'},
                        ]
                  }
            },
            methods:{
                  //搜索
                  sear:function(){
                        var input = _('#sear_text'),
                        val = input.value,
                        len = this.user.length;
                        for(var i = 0; i < len; i++){
                              if(this.user[i].name === val){
                                    this.user.splice(0,len,this.user[i]);
                                    break;
                              }
                        }
                  },
                  //排序
                  sort:function(){
                        var arg = this.getSelected('#sort');
                        this.user.sort(function(a,b){
                              return a[arg]>b[arg];
                        });
                  },
                  getSelected:function(str){
                        var ele = _.el(str),
                        index= ele.selectedIndex;
                        return  ele.options[index].value;
                  },
            },
            created(){
                  //预留Ajax请求
            }
      }
</script>
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
                  user-select:none;
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
                                    cursor:pointer;
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
                                    cursor:pointer;
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