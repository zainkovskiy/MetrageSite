import { SVGMotionProps } from 'framer-motion';
export interface IPathBurgerStyleProp {
  $color?:
    | 'black'
    | 'white'
    | 'grey'
    | 'greyDark'
    | 'primary'
    | 'primaryLite'
    | 'primaryDark';
}

export interface IPathBurgerProps extends SVGMotionProps<SVGPathElement> {
  color?:
    | 'black'
    | 'white'
    | 'grey'
    | 'greyDark'
    | 'primary'
    | 'primaryLite'
    | 'primaryDark';
}
