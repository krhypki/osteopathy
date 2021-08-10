<template>
  <Section :primary="false">
    <Row>
      <Column lg="11" offset-lg="1" class="text-center">
        <SectionHeading class="mb-8" center>
          {{ $t('offer.indication.heading') }}
        </SectionHeading>
        <TextAnim class="mb-0">
          {{ $t('offer.indication.lead') }}
        </TextAnim>
      </Column>
    </Row>

    <Row overflow>
      <SliderBox :amount="boxes" v-if="$mq !== 'lg' && $mq !== 'xl'">
        <template slot="content" scope="props">
          <strong class="d-block text-primary mb-16">
            {{ $t(`offer.indication.boxHeading${props.index}`) }}
          </strong>
          <small>
            {{ $t(`offer.indication.boxHeading${props.index}`) }}
          </small>
        </template>
      </SliderBox>

      <template v-else>
        <Column lg="3" v-for="i in boxes" :key="i" class="mb-32">
          <Box>
            <strong class="text-primary d-block mb-16">
              {{ $t(`offer.indication.boxHeading${i}`) }}
            </strong>
            <small>
              {{ $t(`offer.indication.boxText${i}`) }}
            </small>
          </Box>
        </Column>
      </template>
    </Row>
  </Section>
</template>

<script>
import SliderBox from '@/components/SliderBox'
import Column from '../../global/grid/Column'
import Row from '../../global/grid/Row'
import Section from '../../global/Section'
import SectionHeading from '../../global/SectionHeading'
import TextAnim from '../../global/TextAnim'

export default {
  components: { SliderBox, Column, Row, Section, SectionHeading, TextAnim },
  data() {
    return {
      boxes: 12
    }
  }
}
</script>

<style scoped></style>
