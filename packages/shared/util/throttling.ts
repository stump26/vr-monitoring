let timer = {}
const throttling = (hash: string, callback: () => Promise<void>, interval) => {
  if (timer[hash]) {
    clearTimeout(timer[hash])
  }
  timer[hash] = setTimeout(async () => {
    await callback()
    timer[hash] = 0
  }, interval)
}

export default throttling
