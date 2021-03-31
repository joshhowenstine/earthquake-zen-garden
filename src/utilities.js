export const timeStampToString = (unixEpoch) => {
    
    const time = new Date(unixEpoch);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const formatMonth = function (monthInt) {
        return monthNames[monthInt]
    }

    return `${formatMonth(time.getMonth())} ${time.getDay()}, ${time.getFullYear()}, ${time.toLocaleTimeString('en-US').replace(/^([0-9]*:[0-9]*)(:[0-9]*)/, '$1')}`

}