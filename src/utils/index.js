export const randomColor = seed => `hsl(${Math.random(seed) * 360}, 80%, 50%)`
export const leftPad = s => (s+'').length === 1 ? '0'+s : s
export const array = n => Array.from({length: n}, (v, i) => leftPad(i+1))
export const randomSize = s => Math.ceil(Math.random(s)*6)
