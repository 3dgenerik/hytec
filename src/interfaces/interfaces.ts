export interface ElementBoundingBox {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

export interface INavigationButton {
  activeBtnValue: number;
  activeBtnName: string;
}

export interface ILogoVariants {
  initial: {
    pathLength: number;
  };
  animate: {
    pathLength: number;
    transition: {
      duration: number;
      ease: string;
      repeatDelay: number;
    };
  };
}

export interface IHeroDetails {
  id: number;
  smallTitle: string;
  titleNormalBefore: string;
  titleAccent: string;
  titleNormalAfter:string;
  text: string;
  image: string;
}

export interface IResponseGenerator {
  config?: string;
  data: IHeroDetails[];
  headers?: string;
  request?: string;
  status?: string;
  statusText?: string;
}