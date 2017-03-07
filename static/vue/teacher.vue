<template>
      <div class="list-3">
            <div class="addr">
                  <a href="#">讲师管理</a>
                  <span>/</span>
                  <span>讲师列表</span>
            </div>
            <div class="main">
                  <div class="add"> 
                        <a @click='mask=true'>添加讲师</a>
                  </div>
                  <div class="select">
                        <div>
                              <input type="text" id='sear_text' v-tel>
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
                                                <a href="#" class="btn-check" @click.prevent='checkout(index)'>查 看</a>
                                                <a href="#" class="btn-edit">编 辑</a>
                                                <a href="#" class="btn-del" @click.prevent='del(index)'>注 销</a>
                                          </td>
                                    </tr>
                              </template>
                        </tbody>
                  </table>
            </div>
            <div class="mask" v-show='mask' @click.self='mask=false'>
                  <form class='add_teacher'>
                        <span class='close glyphicon glyphicon-remove' @click='mask=false'></span>
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
            <div class="mask" v-show='check' @click.self='check=false'>
                  <div class='check'>
                        <div class="head">
                              <h4>讲师信息</h4>
                              <span class='glyphicon glyphicon-remove' @click='check=false'></span>
                        </div>
                        <div class="body">
                        <template v-for="list in information">
                              <table>
                                    <tr>
                                          <th>姓名：</th>
                                          <td>{{list.name}}</td>
                                          <th>职位：</th>
                                          <td colspan='3'>{{list.job}}</td>
                                          <td rowspan='4' width='128'><img src="/images/default.png"></td>
                                    </tr>
                                    <tr>
                                          <th>花名：</th>
                                          <td>{{list.nickname}}</td>
                                          <th>出生日期：</th>
                                          <td colspan='3'>{{list.birth}}</td>
                                    </tr>
                                    <tr>
                                          <th>性别：</th>
                                          <td>{{list.sex}}</td>
                                          <th>注册日期：</th>
                                          <td colspan='3'>{{list.reg}}</td>
                                    </tr>
                                    <tr>
                                          <th>手机号码：</th>
                                          <td colspan='2'>{{list.tel}}</td>
                                          <th>邮箱：</th>
                                          <td colspan='2'>{{list.email}}</td>
                                    </tr>
                                    <tr>
                                          <th>籍贯：</th>
                                          <td colspan='6'>{{list.addr}}</td>
                                    </tr>
                                    <tr>
                                          <td colspan='7'>
                                                <div class="intro">
                                                      <p>豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。</p>
                                                      <p>时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得仙人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，列冈峦之体势。</p>
                                                      <p>披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦。</p>
                                                </div>
                                          </td>
                                    </tr>
                              </table>
                        </template>
                        </div>
                  </div>
            </div>
      </div>
</template>
<script>
      export default{
            data(){
                  return {
                        //提交表单所需数据
                        name:null,
                        nickname:null,
                        age:null,
                        sex:null,
                        tel:null,
                        //提交表单遮盖层
                        mask:false,
                        //查看信息遮盖层 
                        check:false,
                        //教师信息列表
                        teacher:[],
                        //教师信息
                        information:[]
                  }
            },
            methods:{
                  checkout:function(index){
                        var obj={id:index};
                        _.ajax({
                              url:'http://localhost:9000/data/check',
                              method:'post',
                              data:obj,
                              fn:(data)=>{
                                    //这样处理主要是方便
                                    data = JSON.parse(data);
                                    this.information.pop();
                                    this.information.push(data);
                                    this.check=true;
                              }
                        });
                  },
                  //搜索
                  sear:function(){
                        var input = _.el('#sear_text'),
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
                              nickname:this.nickname,
                              age:this.age,
                              sex:this.sex,
                              tel:this.tel
                        };
                        // this.$http.post('http://localhost:9000/index/add',newTeacher).then((res)=>{
                        //       if(res.data === 'success'){
                        //             this.teacher.push(newTeacher);
                        //       }
                        // });
                        this.mask = false;
                        _.ajax({
                              url:'http://localhost:9000/api/add',
                              method:'post',
                              data:newTeacher,
                              fn:(data)=>{
                                    if(data === 'success'){
                                          this.teacher.push(newTeacher);
                                    }
                              }
                        });
                  },
                  //为什么发不过去啊
                  del:function(index){
                        var delTeacher = {
                              id : index
                        };
                        // this.$http.post('http://localhost:9000/index/del',delTeacher).then((res)=>{
                        //       console.log(res.data);
                        //       this.teacher.splice(index-1,1);
                        // });
                        //邪门了 自己封装的ajax是OK的
                        _.ajax({
                              url:'http://localhost:9000/api/del',
                              method:'post',
                              data:delTeacher,
                              fn:(data) => {
                                    this.teacher.splice(data,1);
                              }
                        });
                  },
            },
            created(){
                  //初始化数据
                  _.ajax({
                        url:'http://localhost:9000/data/init',
                        method:'get',
                        fn:(data) => {
                              data = JSON.parse(data);
                              this.teacher.push(...data);
                        }
                  });
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
                  >.check{
                        position:relative;
                        width:56%;
                        margin:80px auto;
                        >.head{
                              border-radius:5px 5px 0 0;
                              border:1px solid #ddd;
                              background-color:#eee;
                              padding:10px 15px;
                              >h4{
                                    color:#333;
                                    font-size:16px;
                                    display:inline-block;
                              }
                              >span{
                                    float:right;
                                    color:#aaa;
                                    cursor:pointer;
                              }
                        }
                        >.body{
                              color:#333;
                              padding:15px;
                              background:#fff;
                              >table{
                                    width:100%;
                                    >tr{
                                          >th{
                                                text-align:left;
                                                padding:5px;
                                                border:1px solid #ddd;
                                          }
                                          >td{
                                                border:1px solid #ddd;
                                                padding:5px;
                                                >img{
                                                      width:117px;
                                                      height:117px;
                                                }
                                                >div{
                                                      padding:15px 10px;
                                                      >p{
                                                            margin-bottom:10px;
                                                      }
                                                }
                                          }
                                    }
                              }
                        }
                  }
                  >.add_teacher{
                        position:relative;
                        width:30%;
                        margin:100px auto;
                        background-color:white;
                        padding:20px 0;
                        border:1px solid #eee;
                        border-radius:5px;
                        >.close{
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