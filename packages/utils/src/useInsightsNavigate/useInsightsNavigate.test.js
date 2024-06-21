import { renderHook } from '@testing-library/react';
import useInsightsNavigate from './useInsightsNavigate';
import { useNavigate } from 'react-router-dom';
import useChrome from '@ausuliv/frontend-components/useChrome';
jest.mock('@ausuliv/frontend-components/useChrome');

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

useChrome.mockImplementation(() => ({
  isBeta: () => false,
  getApp: () => 'compliance',
  getBundle: () => 'insights',
}));

describe('useInsightsNavigate', () => {
  it('should return a function', () => {
    useNavigate.mockImplementation(() => {});
    const { result } = renderHook(() => useInsightsNavigate());

    expect(typeof result.current).toEqual('function');
  });

  it('should work', () => {
    const navigateMock = jest.fn();
    useNavigate.mockImplementation(() => navigateMock);
    const { result } = renderHook(() => useInsightsNavigate());

    result.current('/path');

    expect(navigateMock).toHaveBeenCalled();
  });
});
