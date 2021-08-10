<template>
  <Column lg="8" offset-lg="1" xl="6" offset-xl="0" class="px-0">
    <Slider
      :breakpoints="[
        [576, 1],
        [768, 2]
      ]"
    >
      <slide v-for="(box, i) in boxes" :key="i">
        <a :href="box.link" target="_blank" class="d-flex px-16 mx-auto">
          <Box class="px-0 pt-0 box-img" link>
            <img
              :src="getImgSrc(box.img)"
              :alt="$t(`images.contact${i + 1}`)"
              :title="$t(`images.contact${i + 1}`)"
            />
            <div class="d-flex flex-column px-24 py-16">
              <p class="text-primary montserrat text-bold">
                {{ $t(`sections.letsTalk.boxHeading${i + 1}`) }}
              </p>
              <small>
                {{ $t(`sections.letsTalk.boxText${i + 1}1`) }}
              </small>
              <small>
                {{ $t(`sections.letsTalk.boxText${i + 1}2`) }}
              </small>
            </div>
          </Box>
        </a>
      </slide>
    </Slider>
  </Column>
</template>

<script>
import Column from './global/grid/Column'
import Slider from './global/Slider'
import Box from './global/Box'
export default {
  components: { Column, Slider, Box },
  data() {
    return {
      boxes: [
        {
          link: 'https://goo.gl/maps/Ctv4xxXD69muYzw5A',
          img: 'lokalizacja-osteopata-wroclaw'
        },
        {
          link: 'https://goo.gl/maps/b6iayH3ZYNdYmu2Y7',
          img: 'lokalizacja-osteopata-zielonagora'
        }
      ]
    }
  },
  methods: {
    getImgSrc(name) {
      const images = require.context('../assets/images', false, /\.png$/)
      return images('./' + name + '.png')
    }
  }
}
</script>

<style scoped lang="scss">
.box-img {
  max-width: 260px;
  margin: 0 auto;
}
</style>
