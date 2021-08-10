<template>
  <Section class="mb-lg-48">
    <Column lg="6" class="mb-40 mb-lg-0">
      <SectionHeading>
        {{ $t('about.help.heading') }}
      </SectionHeading>
      <TextAnim class="mb-32">
        {{ $t('about.help.text1') }}
      </TextAnim>
      <TextAnim class="mb-0">
        {{ $t('about.help.text2') }}
      </TextAnim>
      <Button
        :text="$t('about.help.btn')"
        outline
        class="mt-32"
        :to="localePath('offer')"
      />
    </Column>
    <Column lg="5">
      <img
        src="~/assets/images/osteopatia-technika-3.png"
        :alt="$t('images.technique3')"
        class="img-fluid img-mobile-full"
      />
    </Column>
  </Section>
</template>

<script>
import SectionHeading from '../global/SectionHeading'
import Section from '../global/Section'
import TextAnim from '../global/TextAnim'
import Column from '../global/grid/Column'
import Button from '../global/Button'
export default {
  components: { SectionHeading, Section, TextAnim, Column, Button }
}
</script>

<style scoped></style>
