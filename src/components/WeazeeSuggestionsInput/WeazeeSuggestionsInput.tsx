import type { ReactNode } from 'react';
import { useState } from 'react';
import { useDebounce, useUpdateEffect } from 'usehooks-ts';

import styles from './WeazeeSuggestionsInput.module.scss';

interface WeazeeSuggestionsInputProps<T> {
  fetchDebounceDelay?: number;
  fetchSuggestions: (value: string) => Promise<T[]>;
  onSelectSuggestion?: (suggestion: T) => void;
  getSuggestionLabel?: (suggestion: T) => ReactNode;
}

export const WeazeeSuggestionsInput = <T,>({
  fetchDebounceDelay = 200,
  fetchSuggestions,
  getSuggestionLabel,
  onSelectSuggestion,
}: WeazeeSuggestionsInputProps<T>) => {
  const [suggestions, setSuggestions] = useState<T[]>([]);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, fetchDebounceDelay);

  useUpdateEffect(() => {
    const defineSuggestions = async () => {
      if (debouncedQuery === '') {
        setSuggestions([]);
        return;
      }

      const suggestions = await fetchSuggestions(debouncedQuery);

      setSuggestions(suggestions);
    };

    defineSuggestions();
  }, [debouncedQuery, fetchSuggestions]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setQuery(value);
  };

  const handleSuggestionClick = (suggestion: T) => () => {
    onSelectSuggestion?.(suggestion);
    setQuery('');
  };

  const getLabel = (suggestion: T) =>
    getSuggestionLabel?.(suggestion) ?? suggestion;

  return (
    <div className={styles.weazeeSuggestionsInput}>
      <div className={styles.weazeeInputWrapper}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          className={styles.weazeeInput}
        />
      </div>
      <div className={styles.weazeeSuggestions}>
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            className={styles.weazeeSuggestionsItem}
            onClick={handleSuggestionClick(suggestion)}
          >
            {getLabel(suggestion)}
          </button>
        ))}
      </div>
    </div>
  );
};
