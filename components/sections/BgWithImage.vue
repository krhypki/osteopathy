<template>
  <Section row-class="justify-content-center">
    <Column
      lg="5"
      xl="5"
      class="order-1 order-lg-0 mt-48 mt-lg-0"
      :class="center ? 'align-self-center' : 'align-self-start'"
    >
      <slot name="bg" />
    </Column>
    <Column
      sm="9"
      md="7"
      lg="6"
      class="d-flex d-lg-block justify-content-center position-relative"
    >
      <slot name="img" />
      <div class="bg"></div>
      <img
        src="~/assets/images/marco-di-dio.png"
        :alt="$t('images.marcoDiDio')"
        :title="$t('images.marcoDiDio')"
        class="align-self-center img-fluid"
        :class="{ mtn: !center }"
      />
    </Column>
  </Section>
</template>

<script>
import Column from '@/components/global/grid/Column'
import Section from '@/components/global/Section'
export default {
  components: { Column, Section },
  props: {
    center: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
  background: transparent linear-gradient(112deg, #00bd39 0%, #00cc81 100%) 0%
    0% no-repeat padding-box;
  opacity: 0.5;
  width: 100vw;
  margin-left: -90px;
  height: 100%;
  z-index: -1;
  @include media-breakpoint-down(md) {
    bottom: 0;
    max-height: 360px;
    margin-left: 0;
  }
  @include media-breakpoint-down(sm) {
    max-height: 320px;
  }
  @include media-breakpoint-down(xs) {
    max-height: 80vw;
  }
}
img {
  left: 40px;
  position: relative;
  @include media-breakpoint-up(lg) {
    position: absolute;
    bottom: 0px;
    z-index: 0;
    left: 80px;
  }
  @include media-breakpoint-only(md) {
    margin-top: -56px;
  }
  @include media-breakpoint-down(xs) {
    left: 20px;
  }
}
</style>
