<script setup>
// Mount point: renders the HeroSplitMedia component with sample data.
import HeroSplitMedia from './components/hero/HeroSplitMedia.vue'

const hero = {
  category: 'Salud & Bienestar',
  // Line break matches the Figma title layout (rendered with whitespace-pre-line).
  title: 'Entiende\ntu organismo',
  description:
    'Descubre el fascinante funcionamiento de tu cuerpo y cómo cada sistema trabaja en perfecta armonía. Conocer tu biología es el primer paso para cuidar de tu salud de manera consciente y efectiva.',
  image: '/assets/images/hero-photo.png',
  imageAlt: 'Mujer practicando una rutina de bienestar',
  logo: '/assets/logos/health-logo.svg',
}
</script>

<template>
  <main class="min-h-screen bg-white px-0 py-8">
    <div class="mx-auto max-w-[1440px]">
      <HeroSplitMedia
        :category="hero.category"
        :title="hero.title"
        :description="hero.description"
        :image="hero.image"
        :image-alt="hero.imageAlt"
        :logo="hero.logo"
      />
    </div>
  </main>
</template>
