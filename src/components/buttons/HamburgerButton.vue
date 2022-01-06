<script lang="ts" setup>

const props = defineProps<Line>()

type Line = {
  length?: number
  totalLength?: number
  offset?: number
  d?: string
}

const line: Line = {
  length: 0, 
  totalLength: 111.22813415527344,
  offset: -62.22813415527344,
  d: "M0 70l28-28c2-2 2-2 7-2h64"
}
const lineFactory = (options = line): Line => ({ 
  ...options 
  })
const activeLine: Line = {
  ...line,
  length: 22.627416998, 
  totalLength: 111.22813415527344,
  offset: 16.9705627485,
}

const middleLine = lineFactory({
  ...line,
  totalLength: 99,
  d: "M0 50h99"
})

const activeMiddleLine: Line = {
  ...middleLine,
  length: 0, 
  offset: -20,
}

const checkedLine = lineFactory({
  ...line,
  length: 22.627416998,
  offset: -16.9705627485,
})
  
const checkedMiddleLine = lineFactory({
  ...line,
  offset: -20,
  length: 0
})

console.log(middleLine)
console.log(checkedLine)
console.log(checkedMiddleLine)
 /*animated hamburgers
.cross input:checked+svg {
  .line--1,
  .line--3 {
    --length: 22.627416998;
  }
  .line--2 {
    --length: 0;
  }
}

//input { display: none; }

label {
  display: block;
  cursor: pointer;
  position: absolute;
  width: 50vw;
  height: 50vw;
  max-width: 150px;
  max-height: 150px;
}

@media (min-aspect-ratio: 1/1) {
  label {
    width: 50vh;
    height: 50vh;
  }
}

path {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 0;
  --offset: -50;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all .8s cubic-bezier(.645, .045, .355, 1);
}

circle {
  fill: #fff3;
  opacity: 0;
}

label:hover circle {
  opacity: 1;
}

.back input:checked+svg {
  .line--1,
  .line--3 {
    --length: 8.602325267;
  }
}
*/
</script>

<template>
   <div class="bg-[#0095f9]">
    <label class="block cursor-pointer absolute w-96 h-96 max-w-150px max-h-150px hover:opacity-100">
      <input type="checkbox" class="hidden">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle class=" opacity-0 hover:opacity-40" fill="#0095f9" cx="50" cy="50" r="30" />
        <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
        <path class="line--2" d="M0 50h99" />
        <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
      </svg>
    </label>
   </div>
 
</template>

<style>
  .line--1,
  .line--3 {
    --total-length: 111.22813415527344;
    --offset: -62.22813415527344;
  }
  .line--2 {
    --total-length: 99;
  }

@media (min-aspect-ratio: 1/1) {
  label {
    width: 50vh;
    height: 50vh;
  }
}

path {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 0;
  --offset: -50;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all .8s cubic-bezier(.645, .045, .355, 1);
}
</style>