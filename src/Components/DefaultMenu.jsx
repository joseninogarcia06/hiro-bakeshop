export default function DefaultMenu({ url, label, isActive }){
    return <li><a className={isActive ? "active" : ""} href={url}>{label}</a></li>
}