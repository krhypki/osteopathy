<template>
  <Section :primary="false">
    <Row>
      <Column lg="11" offset-lg="1">
        <SectionHeading center>
          {{ $t('about.experience.heading') }}
        </SectionHeading>
        <Column lg="5" class="px-0 mx-auto">
          <p class="text-center">
            {{ $t('about.experience.lead') }}
          </p>
        </Column>
      </Column>
    </Row>

    <Row overflow overflow-link v-for="(link, i) in boxes" :key="i">
      <Column cols="12">
        <h3 class="text-primary mb-32">
          {{ $t(`about.experience.subheading${i + 1}`) }}
        </h3>
      </Column>
      <Column cols="12" class="px-0">
        <Slider
          :breakpoints="[
            [576, 2],
            [768, 3],
            [992, 4]
          ]"
        >
          <slide v-for="j in 4" :key="j">
            <div class="h-100 px-16">
              <Box class="h-100">
                <strong
                  class="d-block small mb-32"
                  v-html="$t(`about.experience.boxHeading${i + 1}${j}`)"
                >
                </strong>
                <small>
                  {{ $t(`about.experience.boxText${i + 1}${j}`) }}
                </small>
              </Box>
            </div>
          </slide>
        </Slider>
      </Column>
      <Column cols="12" class="text-center text-sm-right mt-24">
        <Button
          v-if="link"
          :text="$t('about.experience.boxBtn')"
          link
          :href="link"
          target="_blank"
          size="sm"
          class="ml-auto"
        />
      </Column>
    </Row>
  </Section>
</template>

<script>
import Button from '@/components/global/Button'
import Section from '../../global/Section'
import Row from '../../global/grid/Row'
import Column from '../../global/grid/Column'
import Slider from '../../global/Slider'
import SectionHeading from '../../global/SectionHeading'
import Box from '../../global/Box'
export default {
  components: { Button, Section, Row, Column, Slider, SectionHeading, Box },
  data() {
    return {
      boxes: [
        '',
        'https://www.facebook.com/pg/twojosteopatamarcodidio/photos/?tab=album&album_id=798654630314973'
      ]
    }
  }
}
</script>

<style scoped></style>
