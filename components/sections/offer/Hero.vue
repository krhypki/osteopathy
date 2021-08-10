<template>
  <Section>
    <Column lg="5" xl="4" class="order-1 order-lg-0">
      <SectionHeading size="h1" class="mb-16">
        {{ $t('offer.hero.heading') }}
      </SectionHeading>
      <Lead class="mb-80">
        {{ $t('offer.hero.lead') }}
      </Lead>
      <Button :text="$t('offer.hero.btn')" :to="localePath('contact')" />
    </Column>
    <Column md="10" lg="6" offset-xl="1">
      <img
        src="~/assets/images/osteopatia-technika-4.png"
        :alt="$t('images.technique4')"
        class="img-mobile-full mb-32 mb-lg-0"
      />
    </Column>
  </Section>
</template>

<script>
import Button from '@/components/global/Button'
import Column from '../../global/grid/Column'
import Section from '../../global/Section'
import SectionHeading from '../../global/SectionHeading'
import Lead from '../../global/Lead'
export default {
  components: { Button, Column, Section, SectionHeading, Lead }
}
</script>

<style scoped lang="scss">
img {
  @include media-breakpoint-up(sm) {
    max-width: 100%;
  }
  @include media-breakpoint-up(xl) {
    margin-top: -48px;
    margin-left: 3.5vw;
    max-width: initial;
  }
}
</style>
