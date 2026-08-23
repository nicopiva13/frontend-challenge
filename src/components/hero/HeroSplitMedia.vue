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
           laptop:rounded-[20px] laptop:px-6 laptop:py-8"
  >
    <!-- Logo — top-right of the banner (desktop only) -->
    <img
      v-if="logo"
      :src="logo"
      alt="Logo Salud & Bienestar"
      class="absolute right-14 top-12 h-10 w-10 laptop:hidden"
    />

    <div
      class="flex items-center gap-[85px] laptop:gap-[28px]"
      :class="align === 'right' ? 'flex-row-reverse' : 'flex-row'"
    >
      <MediaFrame :src="image" :alt="imageAlt" />

      <!-- Text container (584 × 278, gap 16px, radius 12px in Figma) -->
      <div class="relative flex w-[584px] flex-col gap-4 rounded-xl laptop:w-[553px] laptop:gap-4">
        <!-- Logo — inside the text container, top-right (1024 layout only) -->
        <img
          v-if="logo"
          :src="logo"
          alt="Logo Salud & Bienestar"
          class="absolute right-0 top-0 hidden h-10 w-10 laptop:block"
        />
        <CategoryBadge class="self-start">{{ category }}</CategoryBadge>

        <h1
          class="whitespace-pre-line font-display text-[56px] font-normal leading-[72px] tracking-[-0.02em] text-ink"
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
