<script setup>
    const name = '0xDEVELOPER'
    const tagline = 'Crafting digital realities since 1999'
    </script>

    <template>
      <section class="min-h-screen flex flex-col justify-center items-center bg-terminal-black/90">
        <div class="text-center">
          <h1 class="text-6xl md:text-8xl font-orbitron glow-text">
            {{ name }}
          </h1>
          <p class="mt-4 text-2xl md:text-3xl font-press-start terminal-typing">
            {{ tagline }}
          </p>
          <div class="mt-8">
            <button class="cyber-button">
              <span class="text-terminal-black font-bold text-lg">EXPLORE</span>
            </button>
          </div>
        </div>
        <div class="absolute bottom-8 text-sm text-cyber-purple animate-pulse">
          [root@portfolio ~]# _
        </div>
      </section>
    </template>
