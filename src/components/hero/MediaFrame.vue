<script setup>
// Image group — 649 × 538 in Figma. A 508 × 380 photo is inset inside the group
// (70px left / 79px top), framed by four quarter-circles pinned to the group's
// corners so they overhang the photo:
//   • top-right & bottom-left → green, behind the photo (167px)
//   • top-left → green, in front (112px)
//   • bottom-right → black, in front (112px)
// The circles are decorative, so they're hidden from assistive tech.
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
})
</script>

<template>
  <div
    class="relative h-[538px] w-[649px] shrink-0
           laptop:h-[388px] laptop:w-[468px]"
  >
    <!-- Quarter-circles BEHIND the photo (larger) -->
    <span
      aria-hidden="true"
      class="absolute right-0 top-0 z-0 h-[167.65px] w-[167.46px] rounded-br-full bg-brand
             laptop:h-[121px] laptop:w-[121px]"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-0 h-[167.65px] w-[167.46px] rounded-bl-full bg-brand
             laptop:h-[121px] laptop:w-[121px]"
    />

    <!-- Photo -->
    <img
      :src="src"
      :alt="alt"
      class="absolute left-[70px] top-[79px] z-10 h-[380px] w-[508px] rounded-media object-cover
             laptop:left-[51px] laptop:top-[57px] laptop:h-[274px] laptop:w-[366px]"
    />

    <!-- Quarter-circles IN FRONT of the photo (smaller) -->
    <span
      aria-hidden="true"
      class="absolute left-0 top-0 z-20 h-[112px] w-[112px] rounded-tr-full bg-brand
             laptop:h-[81px] laptop:w-[81px]"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-0 right-0 z-20 h-[112px] w-[112px] rounded-bl-full bg-black
             laptop:h-[81px] laptop:w-[81px]"
    />
  </div>
</template>
