<script setup>
// Small outlined badge that labels the hero's category.
// Specs from Figma: Manrope 400 · 13/18px · 1px border · 8px radius ·
// padding 6px/12px · text #165F39 · border #65DB9E.
// Content comes through the default slot so it stays reusable.
</script>

<template>
  <span
    class="inline-flex items-center rounded-lg border border-[#65DB9E] bg-banner
           px-3 py-1.5 font-body text-[13px] font-normal leading-[18px] text-[#165F39]
           laptop:px-[10px] laptop:py-1 laptop:text-[12px]"
  >
    <slot />
  </span>
</template>
