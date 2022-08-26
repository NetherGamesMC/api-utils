function solveQuadratic(a: number, b: number, c: number): number[] {
  const discrim = b ** 2 - 4 * a * c
  if (discrim > 0) {
    const sqrtDiscrim = Math.sqrt(discrim)
    return [(-b + sqrtDiscrim) / (2 * a), (-b - sqrtDiscrim) / (2 * a)]
  }
  return discrim === 0 ? [-b / (2 * a)] : []
}

export function getXpToReachLevel(level: number): number {
  if (level <= 16) return level ** 2 + level * 6
  if (level <= 31) return level ** 2 * 2.5 - 40.5 * level + 360
  return level ** 2 * 4.5 - 162.5 * level + 2220
}

export function getLevelFromXp(xp: number): number {
  const a = xp <= getXpToReachLevel(16) ? 1 : xp <= getXpToReachLevel(31) ? 2.5 : 4.5
  const b = xp <= getXpToReachLevel(16) ? 6 : xp <= getXpToReachLevel(31) ? -40.5 : -162.5
  const c = xp <= getXpToReachLevel(16) ? 0 : xp <= getXpToReachLevel(31) ? 360 : 2220
  const x = solveQuadratic(a, b, c - xp)
  return ~~Math.max(...x)
}
