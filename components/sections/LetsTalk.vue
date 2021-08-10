<template>
  <Section>
    <Column lg="8" xl="5" class="mb-64 text-center text-md-left">
      <SectionHeading>
        {{ $t('sections.letsTalk.heading') }}
      </SectionHeading>
      <TextAnim class="mb-0">
        {{ $t('sections.letsTalk.lead') }}
      </TextAnim>
      <Button
        variant="secondary"
        :text="$t('sections.letsTalk.btn')"
        :to="localePath('contact')"
        class="mt-32"
      />
    </Column>
    <LocationBoxes />
  </Section>
</template>

<script>
import LocationBoxes from '@/components/LocationBoxes'
import Section from '../global/Section'
import SectionHeading from '../global/SectionHeading'
import Button from '../global/Button'
import TextAnim from '../global/TextAnim'
import Column from '../global/grid/Column'
export default {
  components: {
    LocationBoxes,
    SectionHeading,
    Section,
    Button,
    TextAnim,
    Column
  }
}
</script>
