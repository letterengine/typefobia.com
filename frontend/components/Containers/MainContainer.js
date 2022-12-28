import classes from '@styles/Containers.module.css';

export default function MainContainer(props) {
    return <main className={classes.main}>{props.children}</main>;
}
