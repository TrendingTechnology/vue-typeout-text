<template>
    <div>{{ actualText }}</div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      required: false,
      default: 2
    }
  },
  mounted() {
    this.text = this.content;

    let int = setInterval(() => {
      this.actualText += this.text.charAt(this.index);
      this.index++;

      if (this.index >= this.text.length) {
        clearInterval(int);
      }
    }, this.speed * 100);
  },
  data() {
    return {
      actualText: "",
      text: "",
      index: 0
    };
  }
};
</script>

<style>
</style>
