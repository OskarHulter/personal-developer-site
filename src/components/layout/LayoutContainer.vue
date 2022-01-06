<template>
  <div class="flex flex-col h-full" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
    <HeaderContainer />
    <main class="container mx-auto p-4">
      <div class="flex flex-col p-4 content-center">
        <slot />
        <NextPageButton />
      </div>
    </main>
    <FooterContainer />
  </div>
</template>
