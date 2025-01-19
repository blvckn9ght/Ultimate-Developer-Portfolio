<script setup>
    import { ref } from 'vue'

    const contactInfo = {
      email: 'dev@0xDEVELOPER.com',
      phone: '+1-555-H4CK3R',
      matrix: '@0xDEVELOPER:matrix.org',
      pgp: '0xDEADBEEF',
      ssh: 'ssh-rsa AAAAB3NzaC1yc2E...'
    }

    const isHacking = ref(false)
    const hackProgress = ref(0)
    const isContactRevealed = ref(false)
    const showAccessGranted = ref(false)

    const startHack = () => {
      if (isContactRevealed.value) return
      
      isHacking.value = true
      const interval = setInterval(() => {
        hackProgress.value += Math.random() * 10
        if (hackProgress.value >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            isHacking.value = false
            showAccessGranted.value = true
            setTimeout(() => {
              showAccessGranted.value = false
              isContactRevealed.value = true
            }, 2000)
          }, 1000)
        }
      }, 100)
    }
    </script>

    <template>
      <section class="py-20 bg-terminal-black/50">
        <h2 class="text-4xl font-orbitron text-center mb-12 glow-text">CONTACT</h2>
        <div class="max-w-6xl mx-auto">
          <!-- macOS Terminal Window -->
          <div class="rounded-lg overflow-hidden shadow-2xl">
            <!-- Terminal Header -->
            <div class="flex items-center justify-between bg-gray-800 px-4 py-2">
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="text-gray-400 text-sm">
                root@portfolio: ~
              </div>
              <div class="w-12"></div>
            </div>

            <!-- Terminal Body -->
            <div class="bg-terminal-black p-6 font-mono text-lg leading-relaxed">
              <!-- Initial Message -->
              <div class="text-matrix-green">
                [root@portfolio ~]# ./initiate_contact.sh
              </div>

              <!-- Access Granted Animation -->
              <div 
                v-if="showAccessGranted"
                class="text-center my-8 text-2xl font-orbitron text-matrix-green animate-pulse"
              >
                ACCESS GRANTED
              </div>

              <!-- Contact Information -->
              <div v-if="isContactRevealed" class="mt-4 space-y-4">
                <div class="flex items-center space-x-2">
                  <span class="text-cyber-purple">[root@portfolio ~]#</span>
                  <span class="text-matrix-green">echo "EMAIL" | base64</span>
                </div>
                <div class="text-neon-pink pl-8">{{ contactInfo.email }}</div>
                
                <div class="flex items-center space-x-2">
                  <span class="text-cyber-purple">[root@portfolio ~]#</span>
                  <span class="text-matrix-green">phone --decode +1-555-H4CK3R</span>
                </div>
                <div class="text-neon-pink pl-8">{{ contactInfo.phone }}</div>
                
                <div class="flex items-center space-x-2">
                  <span class="text-cyber-purple">[root@portfolio ~]#</span>
                  <span class="text-matrix-green">matrix-cli --send @0xDEVELOPER</span>
                </div>
                <div class="text-neon-pink pl-8">{{ contactInfo.matrix }}</div>
                
                <div class="flex items-center space-x-2">
                  <span class="text-cyber-purple">[root@portfolio ~]#</span>
                  <span class="text-matrix-green">gpg --import 0xDEADBEEF</span>
                </div>
                <div class="text-neon-pink pl-8">{{ contactInfo.pgp }}</div>
                
                <div class="flex items-center space-x-2">
                  <span class="text-cyber-purple">[root@portfolio ~]#</span>
                  <span class="text-matrix-green">ssh-add ~/.ssh/id_rsa</span>
                </div>
                <div class="text-neon-pink pl-8">{{ contactInfo.ssh }}</div>
              </div>

              <!-- Hack Button -->
              <div v-if="!isContactRevealed" class="mt-8">
                <div class="text-matrix-green mb-4">
                  [*] To reveal contact information, initiate secure connection:
                </div>
                <button 
                  @click="startHack"
                  class="cyber-button relative overflow-hidden"
                  :disabled="isHacking"
                >
                  <span class="relative z-10">
                    {{ isHacking ? 'Hacking...' : './initiate_contact.sh' }}
                  </span>
                  <div 
                    v-if="isHacking"
                    class="absolute inset-0 bg-matrix-green/20"
                    :style="{ width: `${hackProgress}%` }"
                  ></div>
                </button>

                <!-- Hack Progress -->
                <div v-if="isHacking" class="mt-4">
                  <div class="text-matrix-green">
                    [*] Establishing secure connection...
                  </div>
                  <div class="mt-2 bg-terminal-black p-2 rounded">
                    <div class="h-1 bg-matrix-green rounded-full" :style="{ width: `${hackProgress}%` }"></div>
                  </div>
                  <div class="text-sm text-matrix-green/50 mt-2">
                    Bypassing firewalls... {{ hackProgress.toFixed(0) }}%
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

    .cyber-button {
      @apply px-8 py-4 rounded-lg transition-all duration-300 relative overflow-hidden;
      background: linear-gradient(45deg, #8a2be2, #ff00ff);
    }

    .cyber-button:disabled {
      @apply opacity-50 cursor-not-allowed;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .animate-pulse {
      animation: pulse 1s infinite;
    }
    </style>
