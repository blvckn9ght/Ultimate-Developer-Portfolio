<script setup>
    const aboutText = `
    [root@portfolio ~]# whoami
    A passionate system developer with a knack for solving complex problems.
    Specializing in low-level programming, system architecture, and performance optimization.
    When I'm not coding, you'll find me exploring the latest in quantum computing or
    reverse engineering old systems for fun.
    `
    </script>

    <template>
      <section class="py-20 bg-terminal-black/80">
        <div class="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
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
            <pre class="text-matrix-green whitespace-pre-wrap">{{ aboutText }}</pre>
            <div class="flex items-center mt-4">
              <span class="text-cyber-purple">[root@portfolio ~]#</span>
              <span class="ml-2 text-matrix-green animate-blink">_</span>
            </div>
          </div>
        </div>
      </section>
    </template>

    <style>
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .animate-blink {
      animation: blink 1s step-end infinite;
    }
    </style>
