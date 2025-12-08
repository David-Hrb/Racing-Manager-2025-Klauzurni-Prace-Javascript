// Composable pro správu a přepínání layoutů aplikace
export const useLayout = () => {
  const currentLayout = useState('app.layout', () => 'default')
  
  const switchLayout = (layoutName) => {
    currentLayout.value = layoutName
  }
  
  return {
    currentLayout: readonly(currentLayout),
    switchLayout
  }
}