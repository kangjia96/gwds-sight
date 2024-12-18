import { ref } from 'vue'

/**
 * boolean组合式函数
 * @param initValue 初始值
 */
export function useBoolean(initValue = false) {
  const bool = ref(initValue)

  function setBool(value) {
    bool.value = value
  }
  function setTrue() {
    setBool(true)
  }
  function setFalse() {
    setBool(false)
  }
  function toggle() {
    setBool(!bool.value)
  }

  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle,
  }
}
