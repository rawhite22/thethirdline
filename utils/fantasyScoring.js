export function fantasyPoints(g, a, sh, h, b, p, pp, shp, pm) {
  let goals = Number((g * scoring.goal).toFixed(2))
  let assists = Number((a * scoring.assist).toFixed(2))
  let shots = Number((sh * scoring.shot).toFixed(2))
  let hits = Number((h * scoring.hit).toFixed(2))
  let blocks = Number((b * scoring.block).toFixed(2))
  let pims = Number((p * scoring.pim).toFixed(2))
  let powerplaypoint = Number((pp * scoring.ppp).toFixed(2))
  let shorthandedpoint = Number((shp * scoring.shp).toFixed(2))
  let plusminus = Number((pm * scoring.plusMinus).toFixed(2))
  let totalArr = [
    goals,
    assists,
    shots,
    hits,
    blocks,
    pims,
    powerplaypoint,
    shorthandedpoint,
    plusminus,
  ]
  let total = totalArr.reduce((prev, curr) => prev + curr, 0)
  return total.toFixed(2)
}
