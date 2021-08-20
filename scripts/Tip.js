export const Tips = (tipObj) => {
    return `<ul>
        <li>Salinity: ${tipObj.salinity}</li>
        <br>
        <li>Water: ${tipObj.water} inches</li>
        <br>
        <li>Filtration: ${tipObj.filtration}</li>
        <br>
    </ul>`
}