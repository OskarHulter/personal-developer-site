<template>
  <div class="flex flex-col">
    <HeaderContainer />
    <MainContainer>
      <Sidebar />
      <ContentContainer>
        <slot />
      </ContentContainer>
    </MainContainer>
    <FooterContainer />
  </div>
</template>
