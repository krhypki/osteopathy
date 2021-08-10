<template>
  <Section>
    <Column lg="6" xl="5" class="order-1 order-lg-0 mt-32 mt-lg-0">
      <SectionHeading>
        {{ $t('home.osteopathy.heading') }}
      </SectionHeading>
      <TextAnim>
        {{ $t('home.osteopathy.text') }}
      </TextAnim>
      <TextAnim class="mb-48">
        {{ $t('home.osteopathy.text2') }}
      </TextAnim>
      <Button
        outline
        :text="$t('home.osteopathy.btn')"
        :to="localePath('osteopathy')"
      />
    </Column>
    <Column lg="5">
      <img
        src="~assets/images/osteopatia-technika-1.png"
        :alt="$t('images.technique1')"
        class="img-fluid img-mobile-full"
      />
    </Column>
  </Section>
</template>

<script>
import SectionHeading from '../../global/SectionHeading'
import TextAnim from '../../global/TextAnim'
import Button from '@/components/global/Button'
import Column from '@/components/global/grid/Column'
import Section from '@/components/global/Section'
export default {
  components: { Section, Column, SectionHeading, TextAnim, Button }
}
</script>

<style scoped></style>
