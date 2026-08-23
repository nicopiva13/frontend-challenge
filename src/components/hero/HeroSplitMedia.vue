<script setup>
// HeroSplitMedia — "split-media" variant.
// A two-column banner: the framed image group on one side and the content
// (badge + title + description) on the other, with the logo at the top right.
import MediaFrame from './MediaFrame.vue'
import CategoryBadge from './CategoryBadge.vue'

defineProps({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  logo: { type: String, default: '' },
  // Mirror the layout: image on the left (default) or on the right.
  align: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
})
</script>

<template>
  <section
    class="relative overflow-hidden rounded-[32px] bg-banner px-12 py-11
           laptop:rounded-[20px] laptop:px-8 laptop:py-8"
  >
    <!-- Logo, top-right on desktop -->
    <img
      v-if="logo"
      :src="logo"
      alt="Logo Salud & Bienestar"
      class="absolute right-14 top-12 h-10 w-10
             laptop:right-8 laptop:top-8 laptop:h-8 laptop:w-8"
    />

    <div
      class="flex items-center gap-[85px] laptop:gap-[60px]"
      :class="align === 'right' ? 'flex-row-reverse' : 'flex-row'"
    >
      <MediaFrame :src="image" :alt="imageAlt" />

      <!-- Text container (584 × 278, gap 16px, radius 12px in Figma) -->
      <div class="flex w-[584px] flex-col gap-4 rounded-xl laptop:w-[420px] laptop:gap-3">
        <CategoryBadge class="self-start">{{ category }}</CategoryBadge>

        <h1
          class="whitespace-pre-line font-display text-[56px] font-normal leading-[72px] tracking-[-0.02em] text-ink
                 laptop:text-[28px] laptop:leading-[34px]"
        >
          {{ title }}
        </h1>

        <p class="font-body text-base leading-6 text-muted">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>
