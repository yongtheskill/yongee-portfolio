const fs = require('fs');
const path = require('path');

const aboutView = `<script setup>
import ScrollReveal from '../components/ScrollReveal.vue';
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();

const experience = [
  {
    title: 'chips.chat',
    period: 'Since 2025',
    description: 'Founded a pay-per-use LLM app. Currently leading an amazing team of 4 to bring state-of-the-art AI to everyone.',
    current: true,
  },
  {
    title: 'WEDDLL',
    period: '2025',
    description: 'System design, costing models and prototyping for a IoT & blockchain based traceability startup.',
  },
  {
    title: 'National University of Singapore',
    period: 'Since 2024',
    description: 'Studying Computer Science.',
    current: true,
  },
  {
    title: 'Phluid Worldwide',
    period: '2022 \\u2013 2025',
    description: "Working on the AI behind the company's products. Led the team to build the company's mobile application.",
  },
  {
    title: 'Freelance Full-Stack Developer',
    period: 'Since 2019',
    description: 'Led teams to complete multiple projects including educational web games, database systems for Non-Profit Organisations, and a Learning Management System for the Singapore Government.',
  },
  {
    title: 'DSO National Laboratories',
    period: '2020 \\u2013 2021',
    description: 'Built an AI-enabled drone capable of locating casualties in disaster scenarios and delivering aid to them.',
  },
  {
    title: 'LiveStudios Photography',
    period: '2019',
    description: "Built the company's website and its accompanying backend.",
  },
];

const skills = [
  'TypeScript', 'Python', 'ReactJS', 'VueJS', 'C++', 'Rust',
  'Full-Stack Development', 'AI & Machine Learning',
  'Game Development', 'Embedded Systems', 'Project Management'
];
<\/script>

<template>
  <section class="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div class="max-w-4xl mx-auto">

      <!-- Hero Section -->
      <ScrollReveal>
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mb-16 sm:mb-24">
          <img
            src="/me.webp"
            alt="Photo of Yong Ee"
            class="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover flex-shrink-0 animate-float"
            style="box-shadow: 0 0 30px rgba(139,92,246,0.3)"
          />
          <div class="text-center sm:text-left">
            <h1
              class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 glow-text glitch-text"
              :style="{ color: 'var(--text-primary)' }"
            >
              Hey, I'm Yong Ee
            </h1>
            <p class="font-body text-base sm:text-lg leading-relaxed max-w-lg" :style="{ color: 'var(--text-secondary)' }">
              I'm from Singapore
              <img src="/sg.svg" alt="Singapore Flag" class="inline-block h-4 sm:h-5 mb-0.5 rounded-sm overflow-clip" />.
              I love problem-solving and building solutions. I believe in the power of software to change the world.
            </p>
            <p class="font-body text-base sm:text-lg mt-3" :style="{ color: 'var(--text-secondary)' }">
              Currently building
              <a href="https://chips.chat/" target="_blank" class="accent-link">chips.chat</a>.
              <br />
              When I'm not coding, I'm making music and doing photography.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <!-- Skills Section -->
      <ScrollReveal :delay="0.1">
        <div class="mb-16 sm:mb-24">
          <h2
            class="font-display text-2xl sm:text-3xl font-bold mb-6 glow-text"
            :style="{ color: 'var(--text-primary)' }"
          >
            <span v-if="theme === 'cyber'" class="crt-glow">&gt; Skills</span>
            <span v-else>What I Can Do</span>
          </h2>
          <p class="font-body text-base sm:text-lg mb-6 leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
            My expertise lies in TypeScript, Python, ReactJS, VueJS and C++.
            I'm experienced in full-stack development, AI, game development, embedded development and project management.
            Although I have my favourites, I love learning and am always open to using the best tool for the job.
          </p>
          <div class="flex flex-wrap gap-2 sm:gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="tech-pill text-xs sm:text-sm"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </ScrollReveal>

      <!-- Experience Timeline -->
      <ScrollReveal :delay="0.1">
        <h2
          class="font-display text-2xl sm:text-3xl font-bold mb-10 glow-text"
          :style="{ color: 'var(--text-primary)' }"
        >
          <span v-if="theme === 'cyber'" class="crt-glow">&gt; Experience</span>
          <span v-else>What I Have Done</span>
        </h2>
      </ScrollReveal>

      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-4 sm:left-6 top-0 bottom-0 w-px"
          :style="{ background: 'linear-gradient(to bottom, var(--accent-1), var(--accent-2), transparent)' }"
        />

        <!-- Timeline items -->
        <div class="space-y-8 sm:space-y-10">
          <ScrollReveal
            v-for="(item, index) in experience"
            :key="item.title"
            :delay="0.05 * index"
          >
            <div class="relative pl-12 sm:pl-16">
              <!-- Timeline dot -->
              <div
                class="absolute left-[10px] sm:left-[18px] top-[22px] w-3 h-3 rounded-full border-2"
                :class="{ 'animate-pulse-glow': item.current }"
                :style="{
                  background: item.current ? 'var(--accent-1)' : 'var(--bg-primary)',
                  borderColor: 'var(--accent-1)',
                }"
              />

              <div class="glass-card p-5 sm:p-6">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3
                    class="font-display text-lg sm:text-xl font-semibold"
                    :style="{ color: 'var(--text-primary)' }"
                  >
                    {{ item.title }}
                  </h3>
                  <span
                    class="text-xs sm:text-sm font-body flex-shrink-0"
                    :style="{ color: 'var(--accent-2)' }"
                  >
                    {{ item.period }}
                  </span>
                </div>
                <p class="font-body text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

    </div>
  </section>
</template>
`;

const projectsView = `<script setup>
import ScrollReveal from '../components/ScrollReveal.vue';
import { useTheme } from '../composables/useTheme';
import FlutterIcon from '../icons/FlutterIcon.vue';
import AwsIcon from '../icons/AwsIcon.vue';
import BunIcon from '../icons/BunIcon.vue';
import DjangoIcon from '../icons/DjangoIcon.vue';
import FirebaseIcon from '../icons/FirebaseIcon.vue';
import MariadbIcon from '../icons/MariadbIcon.vue';
import NodeIcon from '../icons/NodeIcon.vue';
import PythonIcon from '../icons/PythonIcon.vue';
import ReactIcon from '../icons/ReactIcon.vue';
import RustIcon from '../icons/RustIcon.vue';
import TypescriptIcon from '../icons/TypescriptIcon.vue';
import VuejsIcon from '../icons/VuejsIcon.vue';
import ConvexIcon from '../icons/ConvexIcon.vue';

const { theme } = useTheme();

const projects = [
  {
    title: 'chips.chat',
    description: 'An LLM app that reduces costs by 80% through a pay-per-use model.',
    image: '/chipschat.webp',
    imageAlt: 'chips.chat Website',
    tech: [
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'ReactJS', icon: 'ReactIcon' },
      { name: 'Convex', icon: 'ConvexIcon' },
    ],
  },
  {
    title: 'Phluid Worldwide',
    description: 'A mobile app that links domestic helpers with employers through the use of AI.',
    image: '/phluid.webp',
    imageAlt: 'Phluid Worldwide Application',
    tech: [
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'MariaDB', icon: 'MariadbIcon', invert: true },
      { name: 'Bun', icon: 'BunIcon' },
      { name: 'VueJS', icon: 'VuejsIcon' },
      { name: 'Firebase', icon: 'FirebaseIcon' },
      { name: 'AWS', icon: 'AwsIcon' },
    ],
  },
  {
    title: 'HG-DB',
    description: 'Database software used by non-profit organisations to manage and consolidate their data.',
    image: '/hgdb.webp',
    imageAlt: 'HG-DB Database',
    tech: [
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'Rust', icon: 'RustIcon', invert: true },
      { name: 'VueJS', icon: 'VuejsIcon' },
    ],
  },
  {
    title: 'CGPSDO Training',
    description: 'A Learning Management System used by the Singapore Government.',
    image: '/cgpsdo.webp',
    imageAlt: 'CGPSDO Training website',
    tech: [
      { name: 'Django', icon: 'DjangoIcon', invert: true },
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'ReactJS', icon: 'ReactIcon' },
      { name: 'AWS', icon: 'AwsIcon' },
    ],
  },
  {
    title: 'Keys',
    description: 'A system to streamline the management of physical keys.',
    image: '/keys.webp',
    imageAlt: 'Keys website',
    tech: [
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'VueJS', icon: 'VuejsIcon' },
      { name: 'Firebase', icon: 'FirebaseIcon' },
    ],
  },
  {
    title: 'Emotions.ml',
    description: 'A website that allows users to use AI to analyse emotions in real time. Awarded first place in the YDSP AI Competition 2019.',
    image: '/emotions.webp',
    imageAlt: 'Emotions.ml Website',
    tech: [
      { name: 'Python', icon: 'PythonIcon' },
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'ReactJS', icon: 'ReactIcon' },
    ],
  },
  {
    title: 'EduPass',
    description: 'An all-in-one hardware and software system for managing students. Awarded first place in the Build On, Singapore 2020 Hackathon.',
    image: '/edupass.webp',
    imageAlt: 'EduPass Website',
    tech: [
      { name: 'TypeScript', icon: 'TypescriptIcon' },
      { name: 'Rust', icon: 'RustIcon', invert: true },
      { name: 'VueJS', icon: 'VuejsIcon' },
    ],
  },
];

const iconComponents = {
  TypescriptIcon,
  ReactIcon,
  ConvexIcon,
  MariadbIcon,
  BunIcon,
  VuejsIcon,
  FirebaseIcon,
  AwsIcon,
  RustIcon,
  DjangoIcon,
  PythonIcon,
  FlutterIcon,
  NodeIcon,
};
<\/script>

<template>
  <section class="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div class="max-w-7xl mx-auto">

      <ScrollReveal>
        <h1
          class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 glow-text glitch-text"
          :style="{ color: 'var(--text-primary)' }"
        >
          <span v-if="theme === 'cyber'" class="crt-glow">&gt; Projects</span>
          <span v-else>My Projects</span>
        </h1>
        <p class="font-body text-base sm:text-lg mb-10 sm:mb-14" :style="{ color: 'var(--text-secondary)' }">
          A selection of things I've built over the years.
        </p>
      </ScrollReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 stagger-children">
        <ScrollReveal
          v-for="(project, index) in projects"
          :key="project.title"
          :delay="0.06 * index"
          animation="reveal-scale"
        >
          <div class="glass-card overflow-hidden h-full flex flex-col group">
            <!-- Image -->
            <div class="h-44 sm:h-48 overflow-hidden relative">
              <img
                :src="project.image"
                :alt="project.imageAlt"
                class="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                :style="{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }"
              />
            </div>

            <!-- Content -->
            <div class="p-5 sm:p-6 flex-1 flex flex-col">
              <h3
                class="font-display text-lg font-semibold mb-2"
                :style="{ color: 'var(--text-primary)' }"
              >
                {{ project.title }}
              </h3>
              <p
                class="font-body text-sm leading-relaxed mb-4 flex-1"
                :style="{ color: 'var(--text-secondary)' }"
              >
                {{ project.description }}
              </p>

              <!-- Tech stack pills -->
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.tech"
                  :key="tech.name"
                  class="tech-pill"
                >
                  <component
                    :is="iconComponents[tech.icon]"
                    :class="{ invert: tech.invert }"
                    class="w-4 h-4"
                  />
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

    </div>
  </section>
</template>
`;

const contactView = `<script setup>
import { Envelope } from '@vicons/fa';
import { Linkedin, Github } from '@vicons/fa';
import { Icon } from '@vicons/utils';
import ScrollReveal from '../components/ScrollReveal.vue';
import { useTheme } from '../composables/useTheme';

const { theme } = useTheme();
<\/script>

<template>
  <section class="min-h-[calc(100dvh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
    <div class="max-w-2xl mx-auto text-center">

      <ScrollReveal>
        <h1
          class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text glitch-text"
          :style="{ color: 'var(--text-primary)' }"
        >
          <span v-if="theme === 'cyber'" class="crt-glow">&gt; Contact</span>
          <span v-else>Let's Talk</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal :delay="0.1">
        <p class="font-body text-base sm:text-lg mb-10 leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
          Have an interesting project, a question, or just want to say hi?
          <br class="hidden sm:block" />
          I'd love to hear from you.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="0.2">
        <a
          href="mailto:yongee2003@gmail.com"
          class="group inline-flex items-center gap-3 glass-card px-8 py-4 sm:px-10 sm:py-5 font-body text-base sm:text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
          :style="{ color: 'var(--accent-3)' }"
        >
          <Icon size="20"><Envelope /></Icon>
          <span>yongee2003@gmail.com</span>
          <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </ScrollReveal>

      <ScrollReveal :delay="0.3">
        <div class="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/yongee/"
            target="_blank"
            class="glass-card p-4 transition-all duration-300 hover:scale-110"
            :style="{ color: 'var(--text-secondary)' }"
          >
            <Icon size="24"><Linkedin /></Icon>
          </a>
          <a
            href="https://github.com/yongtheskill"
            target="_blank"
            class="glass-card p-4 transition-all duration-300 hover:scale-110"
            :style="{ color: 'var(--text-secondary)' }"
          >
            <Icon size="24"><Github /></Icon>
          </a>
        </div>
      </ScrollReveal>

    </div>
  </section>
</template>
`;

const basePath = path.join(__dirname, 'src', 'views');

fs.writeFileSync(path.join(basePath, 'AboutView.vue'), aboutView);
console.log('✓ AboutView.vue');

fs.writeFileSync(path.join(basePath, 'ProjectsView.vue'), projectsView);
console.log('✓ ProjectsView.vue');

fs.writeFileSync(path.join(basePath, 'ContactView.vue'), contactView);
console.log('✓ ContactView.vue');

console.log('All views written successfully!');
