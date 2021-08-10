<template>
  <Section :rows="2" class="mb-lg-48">
    <template v-slot:row-1>
      <Column lg="5" class="order-1 order-lg-0">
        <SectionHeading size="h1" class="mb-16">
          {{ $t('home.hero.heading') }}
        </SectionHeading>
        <Lead class="mb-32 mb-md-48 mb-lg-80">
          {{ $t('home.hero.lead') }}
        </Lead>
        <Button
          :text="$t('home.hero.btn')"
          :to="localePath('contact')"
          class="mt-lg-48 mb-48 mb-lg-80"
        />
      </Column>
      <Column md="7" lg="5" offset-lg="1" class="mb-24 mb-lg-0">
        <img
          src="~/assets/images/logo-medycyna-holistyczna.svg"
          :alt="$t('images.homeHero')"
          class="img-fluid img-hero"
        />
      </Column>
    </template>

    <template v-slot:row-2>
      <Column sm="6" md="5" class="mb-32 mb-md-0">
        <span class="d-block mb-8 mb-md-24">
          {{ $t('home.hero.socialMedia') }}
        </span>
        <SocialMedia />
      </Column>
      <Column
        sm="6"
        lg="5"
        offset-lg="1"
        class="d-md-flex flex-column align-items-center"
      >
        <p class="montserrat text-light">
          {{ $t('home.hero.rating') }}
        </p>
        <div class="rating" v-in-viewport.once>
          <span
            v-for="i in rating"
            :key="i"
            class="icon-star text-primary mr-8"
          ></span>
        </div>
      </Column>
    </template>
  </Section>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'
import Section from '../../global/Section'
import Column from '../../global/grid/Column'
import Button from '../../global/Button'
import SectionHeading from '../../global/SectionHeading'
import Lead from '../../global/Lead'

export default {
  components: {
    SocialMedia,
    SectionHeading,
    Section,
    Column,
    Button,
    Lead
  },
  data() {
    return {
      rating: 5
    }
  }
}
</script>

<style lang="scss" scoped>
.img-hero {
  @include media-breakpoint-up(xl) {
    padding-bottom: 48px;
    margin-top: -48px;
  }
}
h1 {
  @include media-breakpoint-up(xl) {
    white-space: nowrap;
  }
}
.rating {
  .icon-star {
    opacity: 0;
    transition: opacity 0.2s ease;
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        transition-delay: 0.1s * $i;
      }
    }
  }
  &.in-viewport,
  &.above-viewport {
    .icon-star {
      opacity: 1;
    }
  }
}
</style>
