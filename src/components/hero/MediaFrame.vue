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
           laptop:h-[323.29px] laptop:w-[390px]"
  >
    <!-- Quarter-circles BEHIND the photo (larger) -->
    <span
      aria-hidden="true"
      class="absolute right-0 top-0 z-0 h-[167.65px] w-[167.46px] rounded-br-full bg-brand
             laptop:h-[100.68px] laptop:w-[100.56px]"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-0 left-0 z-0 h-[167.65px] w-[167.46px] rounded-bl-full bg-brand
             laptop:h-[100.68px] laptop:w-[100.56px]"
    />

    <!-- Photo -->
    <img
      :src="src"
      :alt="alt"
      class="absolute left-[70px] top-[79px] z-10 h-[380px] w-[508px] rounded-[20px] object-cover
             laptop:left-[42.31px] laptop:top-[47.44px] laptop:h-[228.79px] laptop:w-[305.05px] laptop:rounded-[12.01px]"
    />

    <!-- Quarter-circles IN FRONT of the photo (smaller) -->
    <span
      aria-hidden="true"
      class="absolute left-0 top-0 z-20 h-[112px] w-[112px] rounded-tr-full bg-brand
             laptop:h-[67.26px] laptop:w-[67.26px]"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-0 right-0 z-20 h-[112px] w-[112px] rounded-bl-full bg-black
             laptop:h-[67.26px] laptop:w-[67.26px]"
    />
  </div>
</template>
