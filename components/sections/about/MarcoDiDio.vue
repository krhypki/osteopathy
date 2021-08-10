<template>
  <Section>
    <Column lg="6">
      <SectionHeading>
        {{ $t('about.marco.heading') }}
      </SectionHeading>
      <TextAnim v-for="i in 3" :key="i" class="mb-32">
        {{ $t(`about.marco.text${i}`) }}
      </TextAnim>
    </Column>
    <Column lg="5">
      <img
        src="~/assets/images/osteopatia-technika-2.png"
        :alt="$t('images.technique2')"
        :title="$t('images.technique2')"
        class="img-fluid img-mobile-full mt-lg-64"
      />
    </Column>
  </Section>
</template>

<script>
import Column from '../../global/grid/Column'
import SectionHeading from '../../global/SectionHeading'
import TextAnim from '../../global/TextAnim'
import Section from '../../global/Section'
export default {
  components: { Column, SectionHeading, TextAnim, Section }
}
</script>

<style scoped></style>
