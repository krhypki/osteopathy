<template>
  <main>
    <Section>
      <Column lg="7">
        <SectionHeading size="h1" class="mb-32">
          {{ $t('policy.heading1') }}
        </SectionHeading>
        <TextAnim>
          {{ $t('policy.text1') }}
        </TextAnim>
      </Column>
    </Section>

    <Section>
      <Column lg="11">
        <SectionHeading>
          {{ $t('policy.heading2') }}
        </SectionHeading>
        <TextAnim>
          {{ $t('policy.text2') }}
        </TextAnim>
      </Column>
    </Section>

    <Section>
      <Column lg="11">
        <SectionHeading>
          {{ $t('policy.heading3') }}
        </SectionHeading>
        <TextAnim>
          {{ $t('policy.text3BeforeGA') }}
          <Button
            link
            href="https://analytics.google.com/analytics/web/provision/#/provision"
            target="_blank"
            text="Google Analytics"
            size="sm"
          />
          {{ $t('policy.text3AfterGA') }}
          <Button
            link
            :href="`mailto:${$t('sections.email')}`"
            :text="$t('sections.email')"
            size="sm"
          />
        </TextAnim>
      </Column>
    </Section>
  </main>
</template>

<script>
import Button from '../components/global/Button'
import Section from '../components/global/Section'
import TextAnim from '../components/global/TextAnim'
import SectionHeading from '../components/global/SectionHeading'
import Column from '../components/global/grid/Column'
export default {
  components: { Button, Section, TextAnim, SectionHeading, Column },
  nuxtI18n: {
    paths: {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy',
      it: '/politica-sulla-privacy'
    }
  },
  head() {
    return {
      title: this.$t('meta.policyPrivacy.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.policyPrivacy.desc')
        }
      ]
    }
  }
}
</script>

<style scoped></style>
