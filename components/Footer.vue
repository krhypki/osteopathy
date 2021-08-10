<template>
  <footer>
    <Container>
      <Row>
        <Column
          lg="9"
          xl="7"
          offset-xl="2"
          class="d-flex flex-column justify-content-between"
        >
          <div class="links d-flex justify-content-between mb-16 mb-md-40">
            <Button
              v-for="link in links"
              :key="link.name"
              variant="secondary"
              link
              :text="$t(`navItems.${link.name}`)"
              :to="localePath(link.path.replace(' ', '-'))"
              class="montserrat"
            />
          </div>
        </Column>
        <Column lg="2" xl="2" offset-lg="1">
          <LangSwitcher
            sm
            v-if="$mq === 'xl' && $mq === 'lg'"
            class="mt-24 mt-lg-0"
          />
        </Column>
      </Row>
      <Row>
        <Column xl="10" offset-xl="2">
          <div
            class="contact d-flex justify-content-between align-items-center"
            v-if="$mq === 'xl' && $mq === 'lg'"
          >
            <Button
              :href="`mailto:${$t('sections.email')}`"
              :text="$t('sections.email')"
              variant="secondary"
              link
              size="sm"
            />
            <Button
              :to="localePath('policy-privacy')"
              text="Polityka prywatności"
              link
              variant="secondary"
              size="sm"
            />
            <span class="link">
              +48 693 251 044
            </span>
            <SocialMedia sm />
          </div>
          <div
            class="contact d-flex flex-column align-items-center text-center"
            v-else
          >
            <div>
              <Button
                :href="`mailto:${$t('sections.email')}`"
                :text="$t('sections.email')"
                variant="secondary"
                link
                class="d-block d-sm-inline mr-sm-16 mb-16"
                size="sm"
              />
              <span class="link">
                {{ $t('sections.phone') }}
              </span>
            </div>
            <div class="d-flex justify-content-between mt-24">
              <SocialMedia sm />
              <LangSwitcher sm />
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  </footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'
import LangSwitcher from '@/components/LangSwitcher'
import Container from './global/grid/Container'
import Row from './global/grid/Row'
import Button from './global/Button'
import Column from './global/grid/Column'

export default {
  components: {
    SocialMedia,
    LangSwitcher,
    Container,
    Row,
    Button,
    Column
  },
  data() {
    return {
      links: [
        { name: 'home', path: '/' },
        { name: 'about', path: 'about-me' },
        { name: 'offer', path: 'offer' },
        { name: 'contact', path: 'contact' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  background: #f5f5f5;
  padding: 40px 0;
  font-family: 'Montserrat', sans-serif;
  @include media-breakpoint-down(sm) {
    .link {
      font-size: 12px !important;
    }
  }
  .links {
    > * {
      text-transform: uppercase;
      @include media-breakpoint-down(sm) {
        font-size: 12px;
      }
    }
  }
  .contact {
    font-size: 16px;
    .link {
      @include media-breakpoint-down(sm) {
        font-size: 12px;
      }
    }
  }
}
</style>
