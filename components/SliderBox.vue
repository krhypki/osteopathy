<template>
  <Column cols="12" class="px-0">
    <Slider
      :breakpoints="[
        [576, 2],
        [768, 3],
        [992, 4]
      ]"
    >
      <slide v-for="i in amount" :key="i">
        <div class="px-16 h-100 mx-auto" style="max-width: 360px;">
          <Box class="h-100">
            <slot name="content" :index="i" />
          </Box>
        </div>
      </slide>
    </Slider>
  </Column>
</template>

<script>
import Column from './global/grid/Column'
import Box from './global/Box'
import Slider from './global/Slider'
export default {
  components: { Column, Box, Slider },
  props: {
    amount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped></style>
