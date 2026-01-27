import css from '../app/assets/svg/skills/css.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import nuxtJS from '../app/assets/svg/skills/nuxtJS.svg';
import react from '../app/assets/svg/skills/react.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import git from '../app/assets/svg/skills/git.svg';
import tailwind from '../app/assets/svg/skills/tailwind-css.svg';
import reduxtoolkit from '../app/assets/svg/skills/redux-toolkit.svg';
import scssSvg from '../app/assets/svg/skills/scss.svg';
import shadcn from '../app/assets/svg/skills/shadcn.svg';
import tanstack from '../app/assets/svg/skills/tanstack.svg';
import antd from '../app/assets/svg/skills/ant-design.svg';
import zustand from '../app/assets/svg/skills/zustand.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'scss':
      return scssSvg;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'redux toolkit':
      return reduxtoolkit;
    case 'tailwind-css':
      return tailwind;
    case 'git':
      return git;
    case 'material-ui':
      return materialui;
    case 'shadcn-ui':
      return shadcn;
    case 'tanstack query':
      return tanstack;
    case 'antd design':
      return antd;
    case 'zustand':
      return zustand;
    default:
      break;
  }
};
