<template>
  <div>
    <section>
      <cd-button @click="clickBtn">默认按钮</cd-button>
      <cd-button type="primary" @click="clickBtn">主要按钮</cd-button>
      <cd-button type="success" @click="clickBtn">成功按钮</cd-button>
      <cd-button type="info" @click="clickBtn">信息按钮</cd-button>
      <cd-button type="warning" @click="clickBtn">警告按钮</cd-button>
    </section>
    <br />
    <section>
      <cd-button plain>朴素按钮</cd-button>
      <cd-button type="primary" plain>主要按钮</cd-button>
      <cd-button type="success" plain>成功按钮</cd-button>
      <cd-button type="info" plain>信息按钮</cd-button>
      <cd-button type="warning" plain>警告按钮</cd-button>
    </section>
    <br />
    <section>
      <cd-button round>圆角按钮</cd-button>
      <cd-button type="primary" round>主要按钮</cd-button>
      <cd-button type="success" round>成功按钮</cd-button>
      <cd-button type="info" round>信息按钮</cd-button>
      <cd-button type="warning" round>警告按钮</cd-button>
    </section>
    <br />
    <section>
      <cd-button type="primary" circle></cd-button>
      <cd-button type="success" circle></cd-button>
      <cd-button type="info" circle></cd-button>
      <cd-button type="warning" circle></cd-button>
    </section>
    <br />
    <section>
      <cd-button plain disabled>朴素按钮</cd-button>
      <cd-button type="primary" plain disabled>主要按钮</cd-button>
      <cd-button type="success" plain disabled>成功按钮</cd-button>
      <cd-button type="info" plain disabled>信息按钮</cd-button>
      <cd-button type="warning" plain disabled>警告按钮</cd-button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    clickBtn(e) {
      console.log(e);
    },
  },
};
</script>
