import {createUseStyles} from "react-jss";
import cn from "classnames"

import {ButtonI} from "./types.ts";
import styles from "./styles.ts";
import AnimationDelayContext from "../AnimationDelayContext/AnimationDelayContext.tsx";
import {useContext} from "react";
import withRetroFont from "../../hocs/withRetroFont.tsx";

const useStyles = createUseStyles({...styles});

const RetroButton = ({
                         id,
                         className,
                         text,
                         onClick,
                         type = 'button',
                         disableAnimations = false,
                         ...restProps
                     }: ButtonI) => {
    const {horizonAnimationDelayInSecs} = useContext(AnimationDelayContext);

    const classes = useStyles({animationDelayInSecs: horizonAnimationDelayInSecs, disableAnimations});

    const retroStyleText = withRetroFont({text});

    return <div className={classes.buttonWrapper}>
        <button id={id} data-testid={id} className={cn(classes.button, className)} onClick={onClick}
                type={type} {...restProps}>
            {retroStyleText}
        </button>
    </div>
};

export default RetroButton;