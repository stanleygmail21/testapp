const Loader = (props) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", display: "block", shapeRRendering: "auto"}} width={props.size} height={props.size} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="24" strokeWidth="4" stroke={props.stroke} strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.5s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>
    )
}

export default Loader;