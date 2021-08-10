<template>
  <Section :primary="false">
    <Row>
      <Column offset-lg="1">
        <h2>
          {{ $t('contact.faqHeading') }}
        </h2>
        <TextAnim class="mb-40">
          {{ $t('contact.faqLead1') }}
          <br />
          {{ $t('contact.faqLead2') }}
        </TextAnim>

        <div v-for="i in 6" :key="i" class="mb-24">
          <Collapse @click="onClick(i)" :show="i === active">
            <template v-slot:default>
              <span>
                {{ $t(`contact.faqQuestion${i}`) }}
              </span>
            </template>
            <template v-slot:content>
              <div v-if="answers[i - 1] > 1">
                <p class="small" v-for="j in answers[i - 1]" :key="j">
                  {{ $t(`contact.faqAnswer${i}${j}`) }}
                </p>
              </div>
              <small v-else class="d-block pt-16">
                {{ $t(`contact.faqAnswer${i}`) }}
              </small>
            </template>
          </Collapse>
        </div>
      </Column>
    </Row>
  </Section>
</template>

<script>
import TextAnim from '../../global/TextAnim'
import Collapse from '../../global/Collapse'
import Column from '../../global/grid/Column'
import Row from '../../global/grid/Row'
import Section from '../../global/Section'
export default {
  components: { TextAnim, Column, Collapse, Row, Section },
  data() {
    return {
      active: null,
      answers: [1, 1, 1, 1, 5, 4]
    }
  },
  methods: {
    onClick(i) {
      this.active = i === this.active ? null : i
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  height: auto;
}
</style>
