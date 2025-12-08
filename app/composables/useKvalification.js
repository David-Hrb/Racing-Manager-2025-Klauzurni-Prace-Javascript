// Composable pro ulopžení kvalifikačních časů pro závod
export const useKvalification = () => {
  const displayedLaptimes = useState('laptimes', () => [])
  
  return {
    displayedLaptimes
  }
}