<template>
      <div class="list-3">
            <div class="addr">
                  <a href="#">讲师管理</a>
                  <span>/</span>
                  <a href="#">讲师列表</a>
            </div>
            <div class="main">
                  <div class="add"> 
                        <a @click='mask=true'>添加讲师</a>
                  </div>
                  <div class="select">
                        <div>
                              <input type="text" id='sear_text'>
                              <button class='sear' @click='sear'>搜索</button>
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
                              <template v-for="(list,index) in teacher">
                                    <tr>
                                          <td>{{index+1}}</td>
                                          <td>{{list.name}}</td>
                                          <td>{{list.nickname}}</td>
                                          <td>{{list.age}}</td>
                                          <td>{{list.sex}}</td>
                                          <td>{{list.tel}}</td>
                                          <td>
                                                <a href="#" class="btn-check">查 看</a>
                                                <a href="#" class="btn-edit">编 辑</a>
                                                <a href="#" class="btn-del">注 销</a>
                                          </td>
                                    </tr>
                              </template>
                        </tbody>
                  </table>
            </div>
            <div class="mask" v-show='mask' @click.self='mask=false'>
                  <form class='add_teacher'>
                        <span class='del glyphicon glyphicon-remove' @click='mask=false'></span>
                        <div>
                              <label>姓名</label>
                              <input type="text" v-model='name'>
                        </div>
                        <div>
                              <label>昵称</label>
                              <input type="text" v-model='nickname'>
                        </div>
                        <div>
                              <label>年龄</label>
                              <input type="text" v-model='age'>
                        </div>
                        <div>
                              <label>性别</label>
                              <input type="radio" value='男' v-model='sex'>男
                              <input type="radio" value='女' v-model='sex'>女
                        </div>
                        <div>
                              <label>手机号码</label>
                              <input type="text" v-model='tel'>
                        </div>
                        <div class='btn'>
                              <input type="reset">
                              <input type="submit" @click.prevent='add'>
                        </div>
                  </form>
            </div>
      </div>
</template>
<script>
      export default{
            data(){
                  return {
                        name:null,
                        nickname:null,
                        age:null,
                        sex:null,
                        tel:null,
                        mask:false, 
                        teacher:[
                              {'name':'赵玉川','nickname':'布头儿','age':28,'sex':'男','tel':'15901256171'},                       
                              {'name':'赵玉川2','nickname':'布头儿','age':28,'sex':'男','tel':'15901256171'},                       
                              {'name':'赵玉川3','nickname':'布头儿','age':28,'sex':'男','tel':'15901256171'},                       
                        ]
                  }
            },
            methods:{
                  //搜索
                  sear:function(){
                        var input = document.getElementById('sear_text'),
                        val = input.value,
                        len = this.teacher.length;
                        for(var i = 0; i < len; i++){
                              if(this.teacher[i].name === val){
                                    this.teacher.splice(0,len,this.teacher[i]);
                                    break;
                              }
                        }
                  },
                  //添加讲师
                  add:function(){
                        
                        var newTeacher = {
                              name:this.name,
                              nickname:this.name,
                              age:this.age,
                              sex:this.sex,
                              tel:this.tel
                        };
                        this.ajax({
                              url:'http://localhost:9000/index/add',
                              method:'post',
                              data:newTeacher,
                              fn:(data)=>{
                                    if(data === 'success'){
                                          this.teacher.push(newTeacher);
                                    }
                              }
                        });
                        this.mask = false;
                  },
                  //ajax请求
                  //应该不会用到get了
                  ajax:function(obj){
                        var url = obj.url,
                            method = obj.method.toLowerCase(),
                            fn = obj.fn,
                            data = obj.data,
                            Data = this.parseData(data);
                        var xhr = new XMLHttpRequest();
                        if(method === 'get'){
                              url = url + '?' + Data;
                              Data = null;
                        }
                        xhr.open(method,url);
                        if(method = 'post'){
                              xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        }
                        xhr.send(Data);
                        xhr.onreadystatechange = function(){
                              if(xhr.status == 200 && xhr.readyState == 4){
                                    var result = xhr.responseText;
                                    fn(result);
                              }
                        }
                  },
                  //用于get请求的参数转换
                  parseData:function(obj){
                        var finalData = '';
                        for(var key in obj){
                              finalData += key + '=' +obj[key] + '&';  
                        }
                        return finalData.slice(0,-1);
                  }
            }
      }
</script>
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
            >.mask{
                  position:fixed;
                  top:0;
                  left:0;
                  width:100%;
                  height:100%;
                  background-color:rgba(0,0,0,.5);
                  z-index:999;
                  >.add_teacher{
                        position:relative;
                        width:30%;
                        margin:100px auto;
                        background-color:white;
                        padding:20px 0;
                        >.del{
                              position:absolute;
                              right:10px;
                              top:10px;
                              cursor:pointer;
                              border:1px solid #ddd;
                              color:#aaa;
                        }
                        >div{
                              margin:20px 0 20px 20px;
                              >label{
                                    text-align:right;
                                    width:70px;
                                    display:inline-block;
                              }
                              >input{
                                    margin-left:10px;
                                    font-size:12px;
                                    height:30px;
                                    line-height:30px;
                                    padding:0 10px;
                              }
                              >input[type='text']{
                                    border:1px solid #ddd;
                                    width:60%;
                              }
                              >input[type='radio']{
                                    margin:0 10px;
                                    vertical-align:middle;
                              }
                        }
                        >.btn{
                              height:30px;
                              line-height:30px;
                              text-align:center;
                              margin:0;
                              >input[type='submit']{
                                    background-color:#31b0d5;
                                    color:white;
                              }
                        }
                  }
            }
            >.main{
                  margin-bottom:20px;
                  >.add{
                        margin:20px 0;
                        padding:10px 15px;
                        background-color:#fff;
                        overflow:hidden;
                        >a{
                              user-select:none;
                              cursor:pointer;
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