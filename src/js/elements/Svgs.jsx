export const MLoaderIcon = () => {
    return (
        <svg className="m-loader" width="128" height="128" viewBox="0 0 128 128">
            <defs>
                <clipPath id="clippath-m1">
                    <path className="clip-mask" d="M34.2,83.7c-4.05-9.31-6.07-20.79-6.07-34.45v-8.74h.65l-3.53-6.27v74.26h27.54v-.65c-8.35-6.79-14.55-14.83-18.6-24.14Z" />
                </clipPath>
                <clipPath id="clippath-m2">
                    <polygon className="clip-mask" points="46.14 20.14 17.96 20.4 17.96 21.18 25.26 34.23 28.14 40.5 28.79 40.5 54.5 92.96 55.93 92.96 67.35 64.87 46.14 20.14" />
                </clipPath>
                <clipPath id="clippath-m3">
                    <polygon className="clip-mask" points="67.04 65.63 77.73 39.32 78.51 39.32 78.64 100.92 71.59 107.71 71.59 108.49 104.09 108.49 103.96 27.97 108.92 21.18 108.92 20.4 81.64 20.4 65.72 60.08 65.07 60.08 67.04 65.63" />
                </clipPath>
                <clipPath id="clippath-outline">
                    <path className="clip-mask" d="M104.34,108.74h-33v-1.14l7.05-6.79-.13-61.24h-.37l-21.79,53.64h-1.76l-.07-.14-25.64-52.32h-.25v8.49c0,13.56,2.03,25.12,6.05,34.35,4.01,9.23,10.24,17.32,18.52,24.05l.09.07v1.02h-28.04V34.3l-7.31-13.05v-1.1l28.59-.27.07.14,18.86,39.79h.33l15.92-39.67h27.69v1.11l-4.96,6.79.13,80.69ZM71.84,108.24h32l-.13-80.35,4.96-6.79v-.45h-26.85l-15.92,39.67h-.98l-.07-.14-18.85-39.79-27.78.26v.47l7.31,13.05v74.07h27.04v-.28c-8.3-6.77-14.55-14.89-18.58-24.16-4.04-9.29-6.09-20.92-6.09-34.55v-8.99h1.06l.07.14,25.64,52.32h1.11l21.79-53.64h1.2v.25s.13,61.7.13,61.7l-.08.07-6.97,6.71v.43Z" />
                </clipPath>
                <linearGradient id="linear-gradient" x1="15.53" y1="252.52" x2="163.51" y2="252.52" gradientTransform="translate(-25.53 -183.55)" gradientUnits="userSpaceOnUse">
                    <stop offset=".3" stopColor="#000" />
                    <stop offset=".5" stopColor="#f00" />
                    <stop offset=".7" stopColor="#000" />
                </linearGradient>
            </defs>

            <g className="m1">
                <rect className="m-fills white" x="10.55" y="36.64" width="35.13" height="80.58" transform="translate(-30.87 20.1) rotate(-26)" />
                <rect className="m-fills green" x="10.55" y="36.64" width="35.13" height="80.58" transform="translate(-30.87 20.1) rotate(-26)" />
                <rect className="m-fills black" x="10.55" y="36.64" width="35.13" height="80.58" transform="translate(-30.87 20.1) rotate(-26)" />
            </g>

            <g className="m2">
                <rect className="m-fills white" x="31.04" y="10.4" width="30.94" height="83.91" transform="translate(-18.24 25.67) rotate(-26)" />
                <rect className="m-fills green" x="31.04" y="10.4" width="30.94" height="83.91" transform="translate(-18.24 25.67) rotate(-26)" />
                <rect className="m-fills black" x="31.04" y="10.4" width="30.94" height="83.91" transform="translate(-18.24 25.67) rotate(-26)" />
            </g>

            <g className="m3">
                <rect className="m-fills white" x="54.15" y="20.31" width="73.66" height="90.55" transform="translate(-19.54 46.5) rotate(-26)" />
                <rect className="m-fills green" x="54.15" y="20.31" width="73.66" height="90.55" transform="translate(-19.54 46.5) rotate(-26)" />
                <rect className="m-fills black" x="54.15" y="20.31" width="73.66" height="90.55" transform="translate(-19.54 46.5) rotate(-26)" />
            </g>

            <g className="m-outline">
                <rect className="gradient-rect" x="-10" y="-5" width="148" height="148" />
            </g>
        </svg>
    )
}

export const RoundEndNegative = () => {
    return (
        <svg width="1000" height="250" viewBox="0 0 1000 250">
            <path d="M0,0v250C0,117.5,223.9,10,500,10s500,107.5,500,240V0H0Z" />
        </svg>
    )
}

export const RoundEndPositiveDown = () => {
    return (
        <svg width="1000" height="250" viewBox="0 0 1000 250">
            <path d="M500,240C776.1,240,1000,132.5,1000,0H0C0,132.5,223.9,240,500,240Z" />
        </svg>
    )
}

export const RoundEndPositiveUp = () => {
    return (
        <svg width="1000" height="250" viewBox="0 0 1000 250">
            <path d="M500,10C223.9,10,0,117.5,0,250h1000c0-132.5-223.9-240-500-240Z" />
        </svg>
    )
}



