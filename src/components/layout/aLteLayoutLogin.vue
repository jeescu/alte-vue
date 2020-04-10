<template>
  <alte-layout-page class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <slot name="header" />
      </div>
      <div class="card">
        <div class="card-body login-card-body">
          <slot />
        </div>
      </div>
    </div>
  </alte-layout-page>
</template>
