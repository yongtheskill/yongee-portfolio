<script setup>
import { Envelope } from '@vicons/fa';
import { Icon } from '@vicons/utils';
</script>

<template>
  <main class="flex items-center justify-center h-full">
    <div>
      <div class="flex items-center">
        <Icon size="18">
          <Envelope></Envelope>
        </Icon>
        <div class="pl-2">Email Me</div>
      </div>

      <a href="mailto:yongee2003@gmail.com" class="text-orange-400 underline"
        >yongee2003@gmail.com</a
      >
    </div>
  </main>
</template>
