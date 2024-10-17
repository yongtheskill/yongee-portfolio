<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { Linkedin, Github, Bars } from '@vicons/fa';
import { Icon } from '@vicons/utils';
import { ref } from 'vue';
const location = useRoute();

const menuOpen = ref(false);

const links = [
  { label: 'hello!', to: '/' },
  { label: 'about-me', to: '/about' },
  { label: 'projects', to: '/projects' },
];

const mobileLinks = [
  { label: 'hello!', to: '/' },
  { label: 'about-me', to: '/about' },
  { label: 'projects', to: '/projects' },
  { label: 'contact-me', to: '/contact' },
];
</script>

<template>
  <div class="h-dvh w-dvw p-4 lg:px-9 lg:py-8">
    <div
      class="bg-slate-900 w-full h-full rounded-2xl border-slate-800 border text-slate-400 flex flex-col justify-between">
      <header class="w-full">
        <nav
          class="h-[3.5rem] md:h-12 border-slate-800 border-b flex items-stretch justify-between">
          <div class="flex">
            <RouterLink
              to="/"
              class="pl-8 text-lg md:text-base lg:pr-36 lg:border-slate-800 lg:border-r flex items-center rounded-tl-2xl hover:bg-slate-800 hover:text-slate-200 transition-colors">
              Yong Ee
            </RouterLink>
            <div class="flex-1 items-stretch hidden lg:flex">
              <RouterLink
                v-for="link in links"
                :to="link.to"
                class="px-8 border-slate-800 border-r flex items-center hover:bg-slate-800 hover:text-slate-200 transition-colors"
                :class="
                  location.path === link.to ? 'border-b-2 border-b-orange-600 text-slate-200' : ''
                ">
                {{ link.label }}
              </RouterLink>
            </div>
          </div>
          <div class="hidden lg:flex">
            <RouterLink
              to="/contact"
              class="px-8 border-slate-800 border-l flex items-center hover:bg-slate-800 hover:text-slate-200 transition-colors"
              :class="
                location.path === '/contact' ? 'border-b-2 border-b-orange-600 text-slate-200' : ''
              ">
              contact-me
            </RouterLink>
          </div>
          <div class="block border-l border-slate-800 lg:hidden">
            <button
              class="px-5 flex items-center h-full text-slate-400"
              @click="menuOpen = !menuOpen">
              <Icon size="23">
                <Bars />
              </Icon>
            </button>
          </div>
        </nav>
      </header>

      <div class="relative flex-1 overflow-hidden">
        <div class="overflow-y-auto max-h-full h-full min-h-full">
          <RouterView />
        </div>
        <div
          class="absolute top-0 left-0 w-full h-full bg-slate-900 transition-all"
          :class="{
            'scale-y-0 translate-y-[-50%]': !menuOpen,
            'scale-y-100 translate-y-0': menuOpen,
          }">
          <h1 class="text-xl text-white font-semibold px-10 py-5 border-b border-slate-800">
            Menu
          </h1>
          <RouterLink
            v-for="link in mobileLinks"
            :to="link.to"
            @click="menuOpen = false"
            class="px-10 py-3 border-slate-800 border-b flex items-center hover:bg-slate-800 hover:text-slate-200 transition-colors"
            :class="
              location.path === link.to ? 'border-l-2 border-l-orange-600 text-slate-200' : ''
            ">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>

      <footer class="w-full h-12 border-slate-800 border-t flex items-stretch">
        <div class="flex items-center px-6 border-r border-slate-800">find me at:</div>
        <a
          href="https://www.linkedin.com/in/yongee/"
          target="_blank"
          class="flex items-center px-4 border-r border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors">
          <Icon size="23">
            <Linkedin />
          </Icon>
        </a>
        <a
          href="https://github.com/yongtheskill"
          target="_blank"
          class="flex items-center px-4 border-r border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors">
          <Icon size="23">
            <Github />
          </Icon>
        </a>
      </footer>
    </div>
  </div>
</template>
