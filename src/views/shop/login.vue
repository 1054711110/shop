<template>
  <div class="zgj_login">
    <div class="login_box">
      <div class="zgj_box">
        <img src="../../assets/logo.png" alt />
      </div>

      <el-form :rules="rules" :model="users" ref="loginFrom" status-icon label-width="100px" class="demo-ruleForm">
        <el-form-item prop="username" label="密码" label-width="130px">
          <el-input type="text" v-model="users.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" label-width="130px" label="密码">
          <el-input type="password" v-model="users.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label-width="130px">
          <el-button type="primary" @click="zgj_log('loginFrom')">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      users: {
        username: "",
        password: ""
      },

      rules: {
        username: [{ required: true, message: "请输入账号", tirgger: "blur" }],
        password: [{ required: true, message: "请输入密码", tirgger: "blur" }]
      }
    };
  },
  mounted() {},
  components: {},
  computed: {},
  methods: {
    async  zgj_log(formName) {
    await  this.$refs[formName].validate(valid => {
        if (valid) {
         
          // alert("submit!");
          this.$axios
            .post(`https://www.liulongbin.top:8888/api/private/v1/login`, {
              username: this.users.username,
              password: this.users.password
            })
            .then(res => {
             console.log(res);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.zgj_login {
  height: 100%;
  background: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.zgj_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px #ddd;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #eee;
  }
}
.demo-ruleForm {
  position: absolute;
  bottom: 20px;
}
</style>
