<template>
  <Section :primary="false">
    <Row>
      <Column lg="11" offset-lg="1">
        <SectionHeading class="mb-8" center>
          {{ $t('home.indication.heading') }}
        </SectionHeading>
        <TextAnim class="text-center mb-0">
          {{ $t('home.indication.lead') }}
        </TextAnim>
      </Column>
    </Row>

    <Row overflow>
      <SliderBox :amount="4">
        <template slot="content" scope="props">
          <strong
            class="d-block text-primary mb-16"
            v-html="$t(`home.indication.boxHeading${props.index}`)"
          >
          </strong>
          <small>
            {{ $t(`home.indication.boxText${props.index}`) }}
          </small>
        </template>
      </SliderBox>
    </Row>
    <div class="d-flex justify-content-center">
      <Button
        :text="$t('home.indication.btn')"
        :to="localePath('offer')"
        outline
        class="mb-lg-48"
      />
    </div>
  </Section>
</template>

<script>
import SliderBox from '@/components/SliderBox'
import Button from '@/components/global/Button'
import Row from '../../global/grid/Row'
import Column from '../../global/grid/Column'
import Section from '../../global/Section'
import TextAnim from '../../global/TextAnim'
import SectionHeading from '../../global/SectionHeading'
export default {
  components: {
    SliderBox,
    Button,
    Row,
    Column,
    SectionHeading,
    Section,
    TextAnim
  }
}
</script>

<style scoped lang="scss"></style>
