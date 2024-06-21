// @ts-ignore
import { LinkProps, useNavigate } from 'react-router-dom';
// @ts-ignore
import useChrome from '@ausuliv/frontend-components/useChrome';
import { buildInsightsPath } from '../helpers/urlPathHelpers';

const useInsightsNavigate = (app: string, forcePreview?: boolean) => {
  const navigate = useNavigate();
  const chrome = useChrome();

  return (to: LinkProps['to'], preview?: boolean) => navigate(buildInsightsPath(chrome, app, to, preview || forcePreview));
};

export default useInsightsNavigate;
