import "./Header.css"

export default function Header(props: {title:string, phone:number}) {
    return (
        <>
            <p className="header-title">{props.title}</p>
            <p className="header-phone">{props.phone}</p>
        </>
    )
}
