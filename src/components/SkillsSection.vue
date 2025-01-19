<script setup>
    const skills = [
      { name: 'C/C++', level: 95 },
      { name: 'Rust', level: 85 },
      { name: 'Assembly', level: 90 },
      { name: 'Linux Kernel', level: 88 },
      { name: 'Reverse Engineering', level: 92 }
    ]
    </script>

    <template>
      <section class="py-20 bg-terminal-black/70">
        <h2 class="text-4xl font-orbitron text-center mb-12 glow-text">SKILLS</h2>
        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="skill in skills" 
            :key="skill.name" 
            class="cyber-card"
          >
            <div class="flex justify-between mb-2">
              <span class="text-matrix-green font-mono">{{ skill.name }}</span>
              <span class="text-cyber-purple font-bold">{{ skill.level }}%</span>
            </div>
            <div class="h-2 bg-terminal-black rounded-full">
              <div 
                class="h-full bg-gradient-to-r from-cyber-purple to-neon-pink rounded-full animate-progress" 
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </template>
