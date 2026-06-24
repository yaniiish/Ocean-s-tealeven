// Petit utilitaire de concaténation conditionnelle de classes.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
