import { LangConstants } from '@/types/types';
import enHeader from '@/locale/header/enResource';
import enWelcome from '@/locale/welcome/enResource';
import enFooter from '@/locale/footer/enResource';
import enErrors from '@/locale/errors/enResource';
import enButton from '@/locale/buttons/enResource';
import enAuth from '@/locale/auth/enResource';

const engConstants: LangConstants = {
  ...enHeader,
  ...enWelcome,
  ...enFooter,
  ...enErrors,
  ...enButton,
  ...enAuth,
};

export default engConstants;
