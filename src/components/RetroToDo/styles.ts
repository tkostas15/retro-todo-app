import {purple, white} from "../../common/commonColors.ts";

export default {
    '@keyframes rise': {
        from: {opacity: 0, transform: 'translateY(-20px)'},
        to: {opacity: 1, transform: "translateY(0)"}
    },
    toDo: (props: any) => {
        const animationDelayInSecs = props?.animationDelayInSecs || 0;

        return {
            position: 'absolute',
            top: '53%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 4,
            opacity: 0,
            transform: 'translateY(-20px)',
            animation: '2s $rise forwards',
            animationDelay: `${animationDelayInSecs}s`
        }
    },
    toDoListWrapper: {
        minWidth: '50%',
        maxWidth: 'calc(100% - 80px)',
        overflow: 'auto',
    },
    toDoList: {
        position: 'relative',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        background: purple,
        zIndex: 2,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '1rem',
        maxHeight: '35vh',
        overflow: 'auto'
    },
    toDoRow: {
        display: 'grid',
        gridTemplateColumns: '20px 30% auto',
        gridGap: '1rem',
        color: white,
        fontFamily: 'retro',
        textAlign: 'left'
    }
}