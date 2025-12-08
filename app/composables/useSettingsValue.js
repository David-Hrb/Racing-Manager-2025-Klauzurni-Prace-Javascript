// Composable pro správu viditelnosti okna nastavení
export function useSettingsValue() {
    const settingsval = useState('settings-modal', () => false);
    
    const toggle = () => {
        settingsval.value = !settingsval.value;
    };
    
    return {
        settingsval,
        toggle
    };
}