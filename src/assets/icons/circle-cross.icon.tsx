import React from 'react'

export const CircleCrossIcon = () => {
  return (
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="21" height="21" fill="url(#pattern0_1_467)"/>
<defs>
<pattern id="pattern0_1_467" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1_467" transform="scale(0.00444444)"/>
</pattern>
<image id="image0_1_467" width="225" height="225" xlinkHref="data:image/png;base64,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Y/DmRxYfn86jAg/kE4T4yhqUq7QijNmyZYtaunQp1YQ0QeSzzs7OUoz7RiL3Tr1Js2TJEizTqI6ODvpESJpYfOgml12AoPQt4VA+++wz9Ze//CXzmdSi0tDQoDZs2CDCG0bpW8Kh1NXVqba2tqhlRODg1tZW+o3gAq4jricmhkSAn0dawhog0NTmzZvVunXr6BPBlAcffFDddtttpZvttEVEaAi6qljA/s1vfhMFihL0YFMCehPYKSSYISJkgG7VE088oX796197SVASOlhiuP/++9XixYtT3XBQFESEjqC7ihYS+xvL1EIuWrRIfetb31Lz58/PdWDdEBARegRb4/bu3at27NihNm7cqE6ePEm/CR/EBcVyzk033aRuuOGG0mwpSwMRYYKg24rN0Ahqi00Bx44do9/kH2whmzdvnrr22mujTeeS6zE5RIQpgkSoBw4cUPv374+8FZ566invYd85YL9q7OExa9YsSZqTMiLCjMGs6wcffKDefvvtaMM1Wk8IFCHcMenT09Pj1IJigRwJVuC1MWXKlGhTOMZwaNngo3f++edH66NCdogIAwIt6SeffBJ5TAwMDKj+/v7o8/Hjx0c/x44dG3lWnHXWWTJmCwgRoSBkjGxbE4SMEREKQsaICAUhY0SEgpAxIkJByBgRoSBkjIhQEDJFqf8DwHPK2tyInr0AAAAASUVORK5CYII="/>
</defs>
</svg>


  )
}

