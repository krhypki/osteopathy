<template>
  <BgWithImage>
    <template v-slot:bg>
      <SectionHeading class="mb-32 pt-16">
        {{ $t('sections.whoAmI.heading') }}
      </SectionHeading>
      <TextAnim class="a mb-24 mb-xl-32">
        {{ $t('sections.whoAmI.lead') }}
      </TextAnim>
      <TextAnim>
        {{ $t('sections.whoAmI.text') }}
      </TextAnim>
      <Button
        outline
        :text="$t('sections.whoAmI.btn')"
        :to="localePath('about-me')"
        class="mb-8 mb-xl-48 mt-40"
      />
    </template>
    <template v-slot:img v-if="$mq !== 'xs'">
      <Box class="note text-center text-lg-left" v-in-viewport.once>
        <p
          class="text-primary text-light montserrat mb-0"
          v-html="$t('sections.whoAmI.note')"
        ></p>
      </Box>
    </template>
  </BgWithImage>
</template>

<script>
import BgWithImage from './BgWithImage'
import SectionHeading from '../global/SectionHeading'
import TextAnim from '../global/TextAnim'
import Box from '../global/Box'
export default {
  components: {
    BgWithImage,
    SectionHeading,
    Box,
    TextAnim
  }
}
</script>

<style scoped lang="scss">
.note {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: auto !important;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease 0.2s;
  p {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: $light;
      z-index: 1;
      transition: transform 0.6s ease 0.5s;
      transform-origin: left;
    }
  }
  &.in-viewport,
  &.above-viewport {
    opacity: 1;
    p {
      &::before {
        transform: scaleX(0);
      }
    }
  }
}
</style>
