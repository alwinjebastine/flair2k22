const breakPoints: any = {
  md: '670px',
  lg: '925px',
}

let mq: any = {}

for (const bp in breakPoints) {
  mq = { ...mq, [bp]: `@media (min-width: ${breakPoints[bp]})` }
}

export default mq
