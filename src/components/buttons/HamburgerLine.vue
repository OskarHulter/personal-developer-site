<template>
        <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
        <path class="line--2 translate-x-[30px]" d="M0 50h99" />
        <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
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
  input:checked+svg {
    path {
      transform: translateX(30px);
    }
    .line--1,
    .line--3 {
      --offset: -16.9705627485;
    }
    .line--2 {
      --offset: -20;
    }
  }
}


.cross input:checked+svg {
  .line--1 {
    --length: 22.627416998;
  }
  .line--3 {
    --length: 22.627416998;
  }
  .line--2 {
    --length: 0;
  }
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