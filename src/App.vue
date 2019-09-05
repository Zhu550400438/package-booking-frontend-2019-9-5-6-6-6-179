<template>
  <div id="app">
    包裹入库
    <br /><br /><br />
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="运单号："
      :label-col="{ span: 8}"
      :wrapper-col="{ span: 11 }"
    >
      <a-input
        v-decorator="[
          '运单号：',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
     <a-form-item
      label="收件人："
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 11 }"
    >
      <a-input
        v-decorator="[
          '收件人：',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item> <a-form-item
      label="电话： "
      :label-col="{ span:8 }"
      :wrapper-col="{ span: 11 }"
    >
      <a-input
        v-decorator="[
          '电话：',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item> <a-form-item
      label="重量： "
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 11 }"
    >
      <a-input
        v-decorator="[
          '重量：',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange (value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
