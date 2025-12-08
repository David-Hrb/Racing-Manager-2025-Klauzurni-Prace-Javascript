// Composable pro vytváření zpráv o závodních událostech
export function useRaceEvents() {
  function createEvent(eventType, data) {
    const raceinfo = {
      "overtake": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "z týmu",
        "3": "driver1Team",
        "4": "předjíždí jezdce",
        "5": "driver2Name",
        "6": "z týmu",
        "7": "driver2Team"
      },
      "leading": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "z týmu",
        "3": "driver1Team",
        "4": "nyní vede závod!"
      },
      "pitstop": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "z týmu",
        "3": "driver1Team",
        "4": "zajíždí do boxů a vyměnil pneumatiky na",
        "5": "tyre"
      },
      "retirement_engine": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "z týmu",
        "3": "driver1Team",
        "4": "končí díky poruše motoru"
      },
      "retirement_crash": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "z týmu",
        "3": "driver1Team",
        "4": "havaroval a musí odstoupit ze závodu"
      },
      "fastest_lap": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "z týmu",
        "3": "driver1Team",
        "4": "zajel nejrychlejší kolo v čase",
        "5": "time"
      },
      "position_gain": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "poskočil na",
        "3": "position",
        "4": "pozici"
      },
      "battle": {
        "0": "Jezdec",
        "1": "driver1Name",
        "2": "a",
        "3": "driver2Name",
        "4": "bojují o",
        "5": "position",
        "6": "místo"
      },
      "final_lap": {
        "0": "Poslední kolo!  Jezdec",
        "1": "driver1Name",
        "2": "vede před",
        "3": "driver2Name"
      },
      "contact": {
        "0": "Kontakt mezi jezdcem",
        "1": "driver1Name",
        "2": "a",
        "3": "driver2Name",
        "4": "v zatáčce",
        "5": "corner"
      }
    };
    
    const template = raceinfo[eventType];
    if (! template) {
      console.error(`Event type '${eventType}' not found in raceinfo`);
      return null;
    }

    const eventMessage = [];
    
    for (let i = 0; i < Object.keys(template).length; i++) {
      const key = i.toString();
      const value = template[key];
      
      // Pokud je hodnota klíč v data objektu, použij ji
      if (data. hasOwnProperty(value)) {
        eventMessage.push(data[value]);
      } else {
        // Jinak je to statický text
        eventMessage.push(value);
      }
    }
    
    return eventMessage;
  }

  return {
    createEvent
  };
}