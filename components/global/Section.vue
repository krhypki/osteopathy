<template>
  <section :class="{ primary }">
    <template v-if="primary">
      <template v-if="rows > 1">
        <Row v-for="i in rows" :key="i" :class="rowClass">
          <Column lg="1" class="d-none d-lg-block" />
          <slot :name="`row-${i}`" />
        </Row>
        <slot name="after" />
      </template>
      <template v-else>
        <Row :class="rowClass">
          <Column lg="1" class="d-none d-lg-block" />
          <slot />
        </Row>
        <slot name="after" />
      </template>
    </template>
    <template v-else>
      <slot />
    </template>
  </section>
</template>

<script>
import Row from '@/components/global/grid/Row'
import Column from '@/components/global/grid/Column'
export default {
  components: { Row, Column },
  props: {
    primary: {
      type: Boolean,
      default: true
    },
    rows: {
      type: [String, Number],
      default: 1
    },
    rowClass: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-bottom: 180px;
  @include media-breakpoint-down(md) {
    padding-bottom: 110px;
  }
}
</style>
