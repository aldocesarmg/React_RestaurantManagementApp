import '../stylesheets/UserIcon.css'

export default function UserIcon(props) {
    return(
        <div>
            <a href='#'><img className="user-icon" src={props.imageSource}></img></a>
        </div>
    );
}