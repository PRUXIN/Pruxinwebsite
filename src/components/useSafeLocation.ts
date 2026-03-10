import { useLocation } from 'react-router';

/**
 * Wraps useLocation() so components render safely when Figma Make previews
 * them in isolation (outside a RouterProvider). The hook is always called
 * unconditionally — only the invariant *error* is caught, so React's rules
 * of hooks are not violated.
 */
export function useSafeLocation() {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useLocation();
  } catch {
    // Fallback to the browser's native location when no router context exists
    return {
      pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
      search: typeof window !== 'undefined' ? window.location.search : '',
      hash: typeof window !== 'undefined' ? window.location.hash : '',
      state: null,
      key: 'default',
    };
  }
}
