let timer = {}
const throttling = (hash: string, callback: Function, interval) => {
  if (timer[hash]) {
    clearTimeout(timer[hash])
  }
  timer[hash] = setTimeout(callback, interval)
}

export default throttling
