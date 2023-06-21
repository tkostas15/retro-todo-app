import {ComponentType} from "react";
import {createUseStyles} from "react-jss";
import cn from "classnames";

import styles from "./styles.ts";

const getStyles = createUseStyles({...styles})

const withGradientBorder = (Component: ComponentType<any>) => {
    const classes = getStyles();

    return (props: any) => {
        return (
            <div className={cn(classes.gradientBorderWrapper, props?.className)}>
                <Component {...props} />
            </div>
        )
    }
};

export default withGradientBorder;