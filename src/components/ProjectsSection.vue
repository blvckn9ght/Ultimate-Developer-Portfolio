<script setup>
    const projects = [
      {
        name: 'Quantum Simulator',
        description: 'A high-performance quantum computing simulator written in Rust',
        tech: ['Rust', 'CUDA', 'OpenCL'],
        link: '#'
      },
      {
        name: 'Linux Kernel Module',
        description: 'Custom kernel module for advanced process scheduling',
        tech: ['C', 'Linux Kernel'],
        link: '#'
      },
      {
        name: 'Reverse Engineering Toolkit',
        description: 'Collection of tools for binary analysis and reverse engineering',
        tech: ['Python', 'C++', 'IDA Pro'],
        link: '#'
      }
    ]
    </script>

    <template>
      <section class="py-20 bg-terminal-black/60">
        <h2 class="text-4xl font-orbitron text-center mb-12 glow-text">PROJECTS</h2>
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.name"
            class="cyber-card"
          >
            <h3 class="text-2xl font-orbitron mb-4 text-cyber-purple">{{ project.name }}</h3>
            <p class="text-matrix-green mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.tech" 
                :key="tech"
                class="px-2 py-1 bg-cyber-purple text-terminal-black rounded text-sm font-mono"
              >
                {{ tech }}
              </span>
            </div>
            <a 
              :href="project.link" 
              class="text-neon-pink hover:text-cyber-purple transition-colors duration-300 font-bold"
            >
              View Project →
            </a>
          </div>
        </div>

        <!-- View More Section -->
        <div class="mt-12 text-center">
          <a 
            href="/projects" 
            class="inline-flex items-center px-8 py-4 border-2 border-matrix-green rounded-lg text-matrix-green hover:bg-matrix-green hover:text-terminal-black transition-all duration-300 group"
          >
            <span class="font-orbitron text-lg">View All Projects</span>
            <svg 
              class="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </template>
