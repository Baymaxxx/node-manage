<template>
  <div class="hello">
    <div class="login-wrap" v-if="!isCheckin">
      <div class="login-con">
        <h3>用户登录</h3>
        <input type="text" placeholder="请输入昵称" id="loginName" v-model.trim="uname" @keyup.13="login">
        <button class="login-btn" @click="login">登录</button>
      </div>
    </div>

    <div class="chat-wrap " v-else>
      <h1>多人聊天室（总人数：{{amount}}）</h1>
      <div class="chat-con clearfix" id="chat_con">
        <template v-for="item in msgList">
          <!-- {{item | json}} -->
          <template v-if="item.msgType==0">
            <p>{{item.message}}</p><br/>
          </template>

          <template v-else>
            <div class="chat-item item-right clearfix" v-if="uname == item.username ">
              <span class="img fr"></span>
              <span class="message fr">{{item.message}}</span>
            </div>
            <div class="chat-item item-left clearfix rela" v-else>
              <span class="abs uname">{{item.username}} ( {{item.msgDate | formatDate}} )</span>
              <span class="img fl"></span>
              <span class="fl message">{{item.message}}</span>
            </div>
          </template>
        </template>
      </div>
      <div class="bottom">
        <input type="text" id="sendtxt" v-model.trim="inputMsg" @keyup.13="sendMessage">
        <button class="sendBtn" @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      amount: 0, //聊天室总数人
      uname: 'baymax', //定义用户名
      inputMsg: '',
      socket: null, //定义socket实例
      isCheckin: false,
      msgList: [] //服务端返回的信息列表
    }
  },
  mounted: function() {
    var vm = this
    /*建立socket连接，使用websocket协议，端口号是服务器端监听端口号*/

    vm.socket = io('ws://localhost:3001')
    console.log(vm.socket)
    /*登录成功*/
    vm.socket.on('loginSuccess', function(data) {
      if (data.username === vm.uname) {
        // vm.checkin(data)
        vm.isCheckin = true
      } else {
        alert('用户名不匹配，请重试')
      }
    })

    /*登录失败*/
    vm.socket.on('loginFail', function() {
      alert('昵称重复')
    })

    /*监听人数*/
    vm.socket.on('amountChange', function(data) {
      vm.amount = data
    })

    /*接收消息*/
    vm.socket.on('receiveMessage', function(data) {
      console.log('接收到服务端返回：', data)
      vm.msgList.push(data)

      window.scrollTo(0, document.getElementById('chat_con').scrollHeight)

      //console.log('----',document.getElementById('chat_con').scrollHeight)
    })

    /*新人加入提示*/
    // vm.socket.on('add',function(data){
    //   console.log(data)

    // })
    /*退出群聊提示*/
    // vm.socket.on('leave',function(name){
    //   console.log('退出===',name)
    //   if(name != null){

    //   }
    // })
  },
  filters: {
    formatDate: function(data) {
      var date = data ? new Date(data) : new Date()
      var time =
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
        ':' +
        (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
      return time
    }
  },
  methods: {
    /*登录*/
    login: function() {
      var vm = this

      if (vm.uname) {
        /*向服务端发送登录事件*/
        vm.socket.emit('login', { username: vm.uname })
      } else {
        alert('请输入昵称')
      }
    },

    /*发送消息*/
    sendMessage: function() {
      var vm = this

      if (vm.inputMsg) {
        vm.socket.emit('sendMessage', {
          username: vm.uname,
          message: vm.inputMsg
        })
        vm.inputMsg = ''
      } else {
        alert('请输入……')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*公共样式*/
*{padding:0; margin:0;}
html,body{width:100%;height: 100%;}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}
.clearfix{*zoom:1}
.cred{color:#f03e3e;}
.cgreen{color:#459d36;}
.hide{display:none;}
.fr{float:right;}
.fl{float: left;}
.rela{position: relative;}
.abs{position:absolute;}
h1{position: fixed; z-index:20; width: 100%; height:50px; line-height:50px; font-size:20px; left: 0; top: 0; background: #000; color: #fff;}
/*登录界面*/
.login-wrap{background:#e7e7e7;width:100%;height:100%; text-align:center;}
.login-con{padding-top: 50px;}
.login-con h3{margin-bottom: 20px;}
.login-con input{width:60%; display:block; margin:0 auto; height: 40px; line-height: 40px; margin-bottom: 20px;}
.login-con button{width:60%;display:block; margin:0 auto; height: 40px; line-height:40px; border:none; background:#459d36; color:#fff; border-radius:5px;}
/*聊天界面*/
.chat-wrap{width: 100%; height: 100%;overflow-y:auto; background:#e7e7e7; text-align:center;}
.chat-con{padding: 50px 0 70px; background:#e7e7e7;}
.chat-con p{display:inline-block; padding:5px 10px; background:#999;border-radius:5px; color:#fff; margin:5px 0;}
.bottom{position:fixed;bottom:0; left: 0; width:100%; height: 50px; background: #fff;}
.bottom input{width: 78%; height: 50px; line-height: 50px; float:left;border:none;}
.bottom button{width: 20%;height: 50px; float: right; border:none; background:#459d36;color: #fff;}
.chat-item{width:100%; margin-top:20px;}
.item-right .message{background: #62b900;position: relative;}
.item-left .message{background: #fff; margin-top:20px; position: relative;}
.item-left .img{margin-right:10px;}
.item-left .uname{font-size:12px; left:50px; top:0;}
.chat-item .message{max-width:60%;display:block; padding:10px;border-radius:5px; margin-right:10px; text-align: justify;}
.chat-item .img{display:inline-block; width:40px; height:40px;  background-size:100% 100%;}
.item-right .message::after {
	content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    right: -14px;
    top: 7px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent rgb(98, 185, 0);
    border-image: initial;
}
.item-left .message::before {
	content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    left: -13px;
    top: 6px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent rgb(255, 255, 255) transparent transparent;
    border-image: initial;
}
</style>
