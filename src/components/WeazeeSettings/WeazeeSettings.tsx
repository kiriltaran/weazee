import { useState } from 'react';
import type { Location } from 'api';
import { openWeatherAPI } from 'api';
import { WeazeeSuggestionsInput } from 'components/WeazeeSuggestionsInput';

import styles from './WeazeeSettings.module.scss';

export const WeazeeSettings = () => {
  const [isVisibleLocationInput, setLocationInputVisibility] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);

  const handleManualLocationClick = () => {
    setLocationInputVisibility(true);
  };

  const handleSuggestionSelection = (suggestion: Location) => {
    setLocation(suggestion);
    setLocationInputVisibility(false);
  };

  const fetchLocationSuggestions = async (value: string) => {
    try {
      const locations = await openWeatherAPI.getLocationByLocationName(value);

      return locations;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getLocationSuggestionLabel = (suggestion: Location) => (
    <div className={styles.weazeeLocationSuggestionLabel}>
      <div className={styles.weazeeLocationSuggestionCountry}>
        {suggestion.country}
      </div>
      <div className={styles.weazeeLocationSuggestionName}>
        {suggestion.name}
        {suggestion.state && `(${suggestion.state})`}
      </div>
    </div>
  );

  return (
    <div className={styles.weazeeSettings}>
      <div className={styles.weazeeSettingsItem}>
        <div className={styles.weazeeSettingsItemKey}>Location</div>
        <div className={styles.weazeeSettingsItemValue}>
          {isVisibleLocationInput ? (
            <div className={styles.weazeeLocationInput}>
              <WeazeeSuggestionsInput<Location>
                getSuggestionLabel={getLocationSuggestionLabel}
                fetchSuggestions={fetchLocationSuggestions}
                onSelectSuggestion={handleSuggestionSelection}
              />
            </div>
          ) : (
            <div className={styles.weazeeLocationActions}>
              {location?.name}
              <button onClick={handleManualLocationClick}>
                Set location manually
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
