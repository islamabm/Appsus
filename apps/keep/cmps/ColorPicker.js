export default {
  template: `
  <div>
    <div class="color-picker">
      <div class="color" v-for="(color, index) in colors" :key="index" @click="selectColor(color)" :style="{ backgroundColor: color }"></div>
    </div>
  </div>
`,

  data() {
    return {
      colors: [
        '#F44336',
        '#E91E63',
        '#9C27B0',
        '#673AB7',
        '#3F51B5',
        '#2196F3',
        '#00BCD4',
      ],
    }
  },
  methods: {
    selectColor(color) {
      this.$emit('selected', color)
    },
  },
}
