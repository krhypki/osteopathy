<template>
  <BgWithImage :center="false">
    <template v-slot:bg>
      <div class="pb-24">
        <SectionHeading size="h1" class="mb-24">
          {{ $t('about.aboutMe.heading') }}
        </SectionHeading>
        <Lead
          v-for="i in 3"
          :key="i"
          :class="i === 3 ? 'mb-lg-48 mb-xl-80' : 'mb-0'"
        >
          {{ $t(`about.aboutMe.lead${i}`) }}
        </Lead>
        <Button
          :text="$t('about.aboutMe.btn')"
          class="mt-48 mb-xl-80"
          :to="localePath('contact')"
        />
      </div>
    </template>
  </BgWithImage>
</template>

<script>
import Button from '@/components/global/Button'
import Lead from '../../global/Lead'
import BgWithImage from '../BgWithImage'
import SectionHeading from '../../global/SectionHeading'
export default {
  components: {
    BgWithImage,
    Lead,
    Button,
    SectionHeading
  }
}
</script>

<style scoped></style>
