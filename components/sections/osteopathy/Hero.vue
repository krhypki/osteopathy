<template>
  <Section>
    <Column lg="6">
      <SectionHeading size="h1" class="mb-16">
        {{ $t('osteopathy.heading') }}
      </SectionHeading>
      <Lead class="pr-xl-72 d-inline-block">
        {{ $t('osteopathy.lead') }}
      </Lead>
      <div class="mb-lg-48"></div>
      <Button
        :to="localePath('contact')"
        :text="$t('osteopathy.btn')"
        class="my-32 my-lg-80"
      />
      <img
        src="~/assets/images/osteopatia-technika-2.png"
        :alt="$t('images.technique2')"
        class="img-fluid img-mobile-full"
        v-if="$mq !== 'xl' && $mq !== 'lg'"
      />
      <div class="mb-64"></div>
      <TextAnim class="mb-32" v-for="i in 5" :key="i">
        {{ $t(`osteopathy.text${i}`) }}
      </TextAnim>
    </Column>
    <Column lg="5">
      <img
        src="~/assets/images/osteopatia-technika-2.png"
        :alt="$t('images.technique2')"
        :title="$t('images.technique2')"
        class="img-fluid sticky"
        v-if="$mq === 'xl' || $mq === 'lg'"
      />
    </Column>
  </Section>
</template>

<script>
import Button from '../../global/Button'
import TextAnim from '../../global/TextAnim'
import Column from '../../global/grid/Column'
import Section from '../../global/Section'
import Lead from '../../global/Lead'
import SectionHeading from '../../global/SectionHeading'
export default {
  components: { Button, TextAnim, Column, SectionHeading, Section, Lead }
}
</script>

<style scoped lang="scss">
.sticky {
  @include media-breakpoint-up(lg) {
    position: sticky;
    top: 200px;
  }
}
</style>
