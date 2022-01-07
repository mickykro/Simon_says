import React, { FC, ReactElement } from 'react';
import { StyleSheet } from 'react-native';


const useStyles = StyleSheet.create({
  greenButton: {
    color: "green",
    borderRadius: '25px 0px 0px 0px',
    height: '15vh',
  }
});

type props = {
    className: 'greenButton',
    children?: React.ReactNode,
    onClick: Function,
    tableNumber: number,
    available: boolean,

}

const Table: FC<props> = ({ className = 'triangle', children, onClick, tableNumber, available }: props): ReactElement => {
    const classes = useStyles();
    const color = available ? 'green' : 'red';
    // const color = className === 'triangle'? 'transparent' : available ? 'green' : 'red';
    const triangleColor = available ? 'green' : 'red';
    const isPentagon = className === 'pentagon' || className == 'triangle' ? className == 'triangle' ? color : 'transparent' : color;

    const getButtonByClass = () => {
        switch (className) {
            case 'circle':
            case 'square':
            case 'elipse': {
                return (
                    <button className={classes[className]} onClick={(e) => (onClick && onClick(e))} style={{ backgroundColor: `${color}` }}></button>
                )
            }

            case 'triangle': {
                return (
                    <button className={classes[className]} onClick={(e) => (onClick && onClick(e))} style={{ borderBottomColor: `${color}` }}></button>
                )
            }

            case 'pentagon': {
                return (
                    <button className={classes[className]} onClick={(e) => (onClick && onClick(e))} style={{ backgroundColor: `${color}`, borderColor: `${isPentagon}` }}></button>
                )
            }

        }
    }

    return (<Grid container item xs={4} direction='column'  >
        {className === 'pentagon' && <div>
            <div className={classes.pentagonBefore} style={{ borderBottomColor: `${color}` }} />
            <div className={classes.pentagonInner} style={{ borderBottomColor: `${color}`, borderTopColor: `${color}` }} />
        </div>
        }
        {

        }
        {getButtonByClass()}
        {tableNumber}
    </Grid>);
}


export default Table;