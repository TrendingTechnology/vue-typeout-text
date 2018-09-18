<template>
<div>
      <span v-for="(letter, idx) in actualText" :key="idx" style="display: inline-block; width: auto; margin: 0; padding: 0;" :class="anim">
        <span v-if="actualText.charCodeAt(idx) == 32">&nbsp;</span>
        <span v-else>{{ letter }}</span>
      </span>
</div>
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
    },
    animation: {
      type: String,
      required: false,
      default: ""
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
  },
  computed: {
    anim: function() {
      if(this.animation == "") return " ";

      return "animated " + this.animation
    }
  }
};
</script>

<style>
</style>
