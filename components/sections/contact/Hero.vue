<template>
  <Section :primary="false">
    <Row>
      <Column offset-lg="1" xl="5">
        <SectionHeading size="h1" :before="false" class="mb-40">
          {{ $t('contact.heading') }}
        </SectionHeading>
        <Lead>
          {{ $t('contact.lead') }}
        </Lead>
        <Button
          :href="`mailto:${$t('sections.email')}`"
          :text="$t('sections.email')"
          link
          size="lg"
          class="d-inline-block mb-16"
        />
        <h3 class="text-primary">
          {{ $t('sections.phone') }}
        </h3>
      </Column>
      <LocationBoxes />
    </Row>
  </Section>
</template>

<script>
import Button from '@/components/global/Button'
import Column from '../../global/grid/Column'
import Section from '../../global/Section'
import Row from '../../global/grid/Row'
import SectionHeading from '../../global/SectionHeading'
import LocationBoxes from '@/components/LocationBoxes'
import Lead from '../../global/Lead'
export default {
  components: {
    LocationBoxes,
    Button,
    Column,
    Section,
    Row,
    SectionHeading,
    Lead
  }
}
</script>

<style scoped></style>
