<script setup>
    const experiences = [
      {
        year: '2023 - Present',
        title: 'Quantum Systems Architect',
        company: 'QuantumCore Technologies',
        description: 'Leading the development of quantum computing architectures. Designed and implemented quantum error correction algorithms. Spearheaded the creation of a quantum simulation framework.',
        achievements: [
          'Developed Q-SIM: A high-performance quantum simulator',
          'Published 3 papers on quantum error correction',
          'Led a team of 15 quantum engineers'
        ],
        tech: ['Quantum Computing', 'Rust', 'C++', 'Qiskit', 'Linux'],
        glowColor: 'neon-pink'
      },
      {
        year: '2020 - 2023',
        title: 'Kernel Developer',
        company: 'Nova Systems',
        description: 'Specialized in real-time systems and performance optimization. Developed custom Linux kernel modules for high-frequency trading platforms. Implemented novel scheduling algorithms.',
        achievements: [
          'Reduced latency by 40% in trading systems',
          'Developed NOVA-SCHED: A real-time scheduler',
          'Optimized memory management for low-latency systems'
        ],
        tech: ['Linux Kernel', 'C', 'Assembly', 'Performance Tuning'],
        glowColor: 'cyber-purple'
      },
      {
        year: '2018 - 2020',
        title: 'Reverse Engineer',
        company: 'CodeBreakers Inc.',
        description: 'Specialized in binary analysis and malware reverse engineering. Developed automated tools for vulnerability detection and exploit analysis.',
        achievements: [
          'Created RE-Toolkit: A reverse engineering framework',
          'Identified 50+ critical vulnerabilities',
          'Developed automated malware analysis pipelines'
        ],
        tech: ['Reverse Engineering', 'Python', 'IDA Pro', 'Binary Analysis'],
        glowColor: 'hacker-blue'
      },
      {
        year: '2016 - 2018',
        title: 'Systems Developer',
        company: 'ByteForge',
        description: 'Worked on low-level system development and optimization. Contributed to the development of a custom operating system.',
        achievements: [
          'Developed ByteOS: A custom microkernel OS',
          'Optimized system calls by 30%',
          'Implemented custom memory allocator'
        ],
        tech: ['C', 'Assembly', 'Operating Systems', 'Low-level Programming'],
        glowColor: 'neon-orange'
      }
    ]
    </script>

    <template>
      <section class="py-20 bg-terminal-black/70">
        <h2 class="text-4xl font-orbitron text-center mb-12 glow-text">EXPERIENCE</h2>
        <div class="max-w-6xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 w-1 h-full bg-matrix-green/30 animate-pulse-glow"></div>

            <!-- Experience Items -->
            <div 
              v-for="(exp, index) in experiences" 
              :key="exp.title"
              class="mb-16"
            >
              <div class="flex flex-col md:flex-row items-center">
                <!-- Left Side -->
                <div 
                  class="w-full md:w-1/2 p-6"
                  :class="{'md:text-right md:pr-12': index % 2 === 0, 'md:text-left md:pl-12': index % 2 !== 0}"
                >
                  <div class="text-2xl font-orbitron text-cyber-purple mb-2">
                    {{ exp.year }}
                  </div>
                  <div class="text-xl font-orbitron text-matrix-green mb-2">
                    {{ exp.title }}
                  </div>
                  <div class="text-lg text-neon-pink mb-4">
                    @ {{ exp.company }}
                  </div>
                </div>

                <!-- Timeline Dot -->
                <div 
                  class="hidden md:block w-8 h-8 rounded-full border-4 border-terminal-black relative z-10 animate-pulse"
                  :class="`bg-${exp.glowColor}`"
                ></div>

                <!-- Right Side -->
                <div 
                  class="w-full md:w-1/2 p-6"
                  :class="{'md:text-left md:pl-12': index % 2 === 0, 'md:text-right md:pr-12': index % 2 !== 0}"
                >
                  <div class="cyber-card p-6">
                    <p class="text-matrix-green mb-4">
                      {{ exp.description }}
                    </p>
                    <div class="mb-4">
                      <h4 class="text-lg font-orbitron text-cyber-purple mb-2">Achievements:</h4>
                      <ul class="list-disc list-inside text-matrix-green">
                        <li v-for="achievement in exp.achievements" :key="achievement">
                          {{ achievement }}
                        </li>
                      </ul>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in exp.tech" 
                        :key="tech"
                        class="px-2 py-1 bg-cyber-purple text-terminal-black rounded text-sm font-mono"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <style scoped>
    .glow-text {
      text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41;
    }

    .cyber-card {
      @apply p-6 rounded-lg border-2 border-matrix-green/30 hover:border-neon-pink transition-all duration-300;
      background: rgba(13, 2, 8, 0.8);
      backdrop-filter: blur(10px);
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 5px #00ff41; }
      50% { box-shadow: 0 0 20px #00ff41, 0 0 30px #00ff41; }
    }

    .animate-pulse-glow {
      animation: pulse-glow 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    .animate-pulse {
      animation: pulse 1.5s infinite;
    }
    </style>
