import classes from '../../styles/Containers.module.css';

export default function AppContainer(props) {
    return <div className={classes['app-container']}>{props.children}</div>;
}
