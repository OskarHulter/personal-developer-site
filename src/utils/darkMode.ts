// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// current implementation creates infinite loop.
export const defaultDarkMode = (): 'light' | 'dark' =>
  (localStorage.theme === 'dark'
    || (!('theme' in localStorage)
      && window.matchMedia('(prefers-color-scheme: dark)').matches))
    ? 'dark'
    : 'light'

export function toggleDarkMode() {
  if (localStorage.theme === 'light') localStorage.theme = 'dark'
  if (localStorage.theme === 'dark') localStorage.theme = 'light'
}

export function clearDarkMode() {
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')
}

export function useDarkMode() {
  const current = useStorage('theme', defaultDarkMode())

  function toggle() {
    if (current.value === 'light') current.value = 'dark'
    else current.value = 'light'
  }

  function toggleClass() {
    if (current.value === 'dark') document.documentElement.classList.add('dark')
    if (current.value === 'light') document.documentElement.classList.remove('dark')
  }

  const currentMode = computed({
    get: () => current.value,
    set: () => {
      toggle()
      toggleClass()
    },
  })

  return {
    currentMode,
    toggle,
  }
}
