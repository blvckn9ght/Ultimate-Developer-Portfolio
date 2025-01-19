<script setup>
    import HeroSection from './components/HeroSection.vue'
    import AboutSection from './components/AboutSection.vue'
    import SkillsSection from './components/SkillsSection.vue'
    import ProjectsSection from './components/ProjectsSection.vue'
    import ExperienceSection from './components/ExperienceSection.vue'
    import ContactSection from './components/ContactSection.vue'
    </script>

    <template>
      <main class="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        
        <!-- Easter Egg -->
        <div class="easter-egg fixed bottom-4 right-4 text-xs">
          <span class="text-cyber-purple">01001000 01101001 00100001</span>
        </div>
      </main>
    </template>
